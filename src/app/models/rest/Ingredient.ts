export interface Ingredient{
	order_type:'ALL'|'TOGO'|'IN_PLACE'|'PICK_UP'|'QUICK_SALE';
	created:string;
	created_by_user_id:number;
	id:number;
	item_id:number;
	name:string | null;
	qty:number;
	stock_item_id:number;
	updated:string;
	updated_by_user_id:number;
}
