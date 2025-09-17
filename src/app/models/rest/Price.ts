export interface Price{

	tax_included:'NO'|'YES';
  created:string;
  created_by_user_id:number | null;
  currency_id:string;
  id:number;
  item_id:number;
  percent:number;
  price:number;
  price_list_id:number;
  price_type_id:number;
  updated:string;
  updated_by_user_id:number | null;
}