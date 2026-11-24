export interface UpdatePaymentInfo {
  orderId: number;
  amount: number;
  transactionId: string;
  success: boolean;
  failureReasons?: string;
}

export interface InitializePaymentInfo {
  orderId: number;
  amount: number;
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUND = "REFUND",
}

export enum PaymentGateway {
  STRIPE = "STRIPE",
  PAYPAL = "PAYPAL",
}
