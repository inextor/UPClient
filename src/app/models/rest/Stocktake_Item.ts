export interface Stocktake_Item{

  box_content_id:number | null;
  box_id:number | null;
  created:string;
  created_by_user_id:number | null;
  db_qty:number;
  id:number;
  item_id:number;
  pallet_id:number | null;
  real_qty:number;
  stocktake_id:number;
  updated:string;
  updated_by_user_id:number | null;
}