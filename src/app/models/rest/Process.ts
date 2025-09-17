export interface Process{

	generator_type:'ON_DEMAN'|'SALE_ITEM'|'SALE_CATEGORY'|'SALE_JSON_TAG';
	status:'ACTIVE'|'DELETED';
  category_id:number | null;
  created:string;
  id:number;
  item_id:number | null;
  json_tags:any;
  name:string;
  production_area_id:number;
  updated:string;
}