export interface Bank_Movement{

	status:'ACTIVE'|'DELETED';
	transaction_type:'CASH'|'CREDIT_CARD'|'DEBIT_CARD'|'CHECK'|'COUPON'|'TRANSFER'|'DISCOUNT'|'RETURN_DISCOUNT'|'PAYPAL';
	type:'expense'|'income';
  amount_received:number;
  bank_account_id:number | null;
  card_ending:string | null;
  client_user_id:number | null;
  created:string;
  currency_id:string;
  exchange_rate:number;
  id:number;
  invoice_attachment_id:number | null;
  note:string | null;
  origin_bank_name:string | null;
  paid_date:string | null;
  payment_id:number | null;
  provider_user_id:number | null;
  receipt_attachment_id:number | null;
  received_by_user_id:number | null;
  reference:string | null;
  total:number;
  updated:string;
}