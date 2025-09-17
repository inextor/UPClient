export interface Cash_Count{

	type:'COIN'|'BILL'|'CREDIT_CARD'|'DEBIT_CARD'|'CHECK'|'TRANSFER';
  cash_close_id:number;
  created:string | null;
  currency_id:string;
  denomination:number;
  id:number;
  only_reference:number;
  quantity:number;
  updated:string | null;
}