export interface Production{

	status:'ACTIVE'|'DELETED';
  alternate_qty:number;
  batch:string | null;
  control:string | null;
  created:string;
  created_by_user_id:number | null;
  id:number;
  item_id:number;
  merma_qty:number;
  merma_reason:string | null;
  produced:string;
  produced_by_user_id:number | null;
  production_area_id:number;
  qty:number;
  qty_reported:number;
  store_id:number;
  updated:string;
  verified_by_user_id:number | null;
}