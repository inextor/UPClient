export interface Stocktake{

	status:'ACTIVE'|'CLOSED';
	stock_adjustment:'DIFFERENCE'|'EXACT_QTY';
  created:string;
  created_by_user_id:number | null;
  id:number;
  name:string | null;
  store_id:number;
  updated:string;
  updated_by_user_id:number | null;
}