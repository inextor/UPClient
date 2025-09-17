export interface Item_Exception{

	list_as_exception:'YES'|'NO';
	order_type:'ALL'|'TOGO'|'IN_PLACE'|'PICK_UP'|'QUICK_SALE';
  created:string;
  description:string;
  id:number;
  item_id:number;
  stock_item_id:number | null;
  stock_qty:number;
  updated:string;
}