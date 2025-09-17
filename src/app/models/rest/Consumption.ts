export interface Consumption{

	status:'ACTIVE'|'DELETED';
  consumed:string;
  consumed_by_user_id:number | null;
  created:string;
  created_by_user_id:number;
  description:string | null;
  id:number;
  item_id:number;
  price:number;
  production_area_id:number | null;
  qty:number;
  store_id:number;
  updated:string;
  updated_by_user_id:number;
}