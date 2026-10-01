import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { items, orderId } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No hay productos para procesar." },
        { status: 400 }
      );
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items.map((item: any) => ({
          id: String(item.id),
          title: String(item.title),
          quantity: Number(item.quantity),
          unit_price: Number(item.unit_price),
          currency_id: "MXN",
        })),

        external_reference: orderId
          ? String(orderId)
          : `MEJI-${Date.now()}`,

        back_urls: {
          success: "https://meji.mx/confirmacion?status=success",
          failure: "https://meji.mx/checkout?status=failure",
          pending: "https://meji.mx/checkout?status=pending",
        },

        auto_return: "approved",

        statement_descriptor: "MEJI",
      },
    });

    return NextResponse.json({
      id: response.id,
      init_point: response.init_point,
      sandbox_init_point: response.sandbox_init_point,
    });
  } catch (error) {
    console.error("Error creando preferencia de Mercado Pago:", error);

    return NextResponse.json(
      {
        error: "No se pudo crear la preferencia de pago.",
      },
      { status: 500 }
    );
  }
}