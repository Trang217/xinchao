export enum OrderStatus {
  INITIALIZED = "INITIALIZED",
  CONFIRMED = "CONFIRMED",
  ON_THE_WAY = "ON_THE_WAY",
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  DELIVERED = "DELIVERED",
}

export interface OrderInfo {
  orderId: number;
  orderStatus: OrderStatus;
}
