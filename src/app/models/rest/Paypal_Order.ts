export interface Paypal_Order{

  buyer_user_id:number;
  create_response:string;
  created:string;
  id:string;
  log:string | null;
  order_id:number | null;
  status:string;
}