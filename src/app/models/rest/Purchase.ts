export interface Purchase{

	status:'ACTIVE'|'DELETED';
	stock_status:'PENDING'|'ADDED_TO_STOCK'|'SHIPPING_CREATED';
  amount_paid:number;
  created:string;
  created_by_user_id:number | null;
  id:number;
  order_id:number | null;
  paid_timestamp:string | null;
  provider_name:string | null;
  provider_user_id:number | null;
  store_id:number;
  total:number;
  updated:string;
  updated_by_user_id:number | null;
}