export type MejiOrderStatus =
  | "pending_payment"
  | "paid"
  | "preparing"
  | "shipped"
  | "completed"
  | "cancelled";

export type MejiPaymentStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "refunded";

export type MejiCartItem = {
  id: number | string;
  name: string;
  category?: string;
  price: number;
  image?: string;
  color?: string;
  size?: string;
  quantity: number;
};

export type MejiCustomer = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  calle: string;
  colonia: string;
  cp: string;
  ciudad: string;
  estado: string;
  referencias: string;
};

export type MejiOrder = {
  id: string;
  orderNumber: string;
  createdAt: string;

  status: MejiOrderStatus;

  payment: {
    method: "mercadopago";
    status: MejiPaymentStatus;
    paymentId: string | null;
  };

  customer: MejiCustomer;

  items: MejiCartItem[];

  subtotal: number;
  shipping: number;
  total: number;
};

const ORDER_STORAGE_KEY = "meji-order";

function generateOrderId() {
  return `order_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function generateOrderNumber() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const random = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `MEJI-${year}${month}${day}-${random}`;
}

export function createPendingOrder({
  customer,
  items,
  subtotal,
  shipping,
  total,
}: {
  customer: MejiCustomer;
  items: MejiCartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}): MejiOrder {
  const order: MejiOrder = {
    id: generateOrderId(),

    orderNumber: generateOrderNumber(),

    createdAt: new Date().toISOString(),

    status: "pending_payment",

    payment: {
      method: "mercadopago",
      status: "pending",
      paymentId: null,
    },

    customer,

    items: [...items],

    subtotal,

    shipping,

    total,
  };

  localStorage.setItem(
    ORDER_STORAGE_KEY,
    JSON.stringify(order)
  );

  return order;
}

export function getCurrentOrder(): MejiOrder | null {
  try {
    const stored = localStorage.getItem(
      ORDER_STORAGE_KEY
    );

    if (!stored) {
      return null;
    }

    return JSON.parse(stored) as MejiOrder;
  } catch (error) {
    console.error(
      "No se pudo cargar el pedido MEJI:",
      error
    );

    return null;
  }
}

export function updateCurrentOrder(
  updates: Partial<MejiOrder>
): MejiOrder | null {
  const currentOrder = getCurrentOrder();

  if (!currentOrder) {
    return null;
  }

  const updatedOrder: MejiOrder = {
    ...currentOrder,
    ...updates,
  };

  localStorage.setItem(
    ORDER_STORAGE_KEY,
    JSON.stringify(updatedOrder)
  );

  return updatedOrder;
}