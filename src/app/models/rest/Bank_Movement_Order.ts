export interface Bank_Movement_Order{

	status:'ACTIVE'|'DELETED';
  amount:number;
  bank_movement_id:number;
  created:string;
  created_by_user_id:number | null;
  currency_amount:number;
  currency_id:string;
  exchange_rate:number;
  id:number;
  order_id:number;
  updated:string;
  updated_by_user_id:number | null;
}