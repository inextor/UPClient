export interface Price_Log{

	old_tax_included:'YES'|'NO';
	tax_included:'NO'|'YES';
  created:string;
  created_by_user_id:number;
  id:number;
  item_id:number;
  new_percent:number;
  new_price:number;
  old_percent:number;
  old_price:number;
  price_list_id:number;
  price_type_id:number;
  updated:string;
}