export interface QuotationSharePayload {
  shareName: string;
  price: number;
}

type QuotationSharesPayload = QuotationSharePayload[];
