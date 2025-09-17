export interface Store_Bank_Account{

	default_transaction_type:'CASH'|'CREDIT_CARD'|'DEBIT_CARD'|'CHECK'|'COUPON'|'TRANSFER'|'DISCOUNT'|'RETURN_DISCOUNT'|'PAYPAL';
  bank_account_id:number;
  created:string;
  id:number;
  name:string;
  store_id:number;
  updated:string;
}