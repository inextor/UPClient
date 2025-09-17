export interface Price_Type{

	model:'AMOUNT'|'PERCENT'|'ALL';
	show_bill_code:'YES'|'NO';
	status:'ACTIVE'|'DELETED';
	tax_model:'TAX_INCLUDED'|'PLUS_TAX'|'ALL';
	type:'RETAIL'|'WHOLESALE';
	wholesale_type:'BY_ARTICLE'|'BY_CATEGORY'|'BY_TAG';
  created:string;
  id:number;
  installments:number;
  json_tags:any;
  name:string;
  pv_bar_background_color:string;
  pv_bar_text_color:string;
  pv_bar_total_color:string;
  sort_priority:number;
  updated:string;
  wholesale_min_qty:number;
}