export interface Returns{

	type:'RETURN_COUPON'|'RETURN_MONEY';
  amount_paid:number;
  cashier_user_id:number;
  client_user_id:number | null;
  code:string;
  created:string;
  currency_id:string;
  id:number;
  note:string | null;
  order_id:number;
  store_id:number;
  total:number;
  updated:string;
}