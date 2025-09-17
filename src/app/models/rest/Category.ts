export interface Category{

	available_online:'YES'|'NO';
	display_status:'NORMAL'|'HIDDEN';
	image_style:'COVER'|'CONTAIN';
	text_style:'NEVER'|'CENTER'|'DOWN';
  background:string;
  code:string | null;
  created:string;
  created_by_user_id:number | null;
  default_clave_prod_serv:string | null;
  id:number;
  image_id:number | null;
  name:string;
  shadow_color:string;
  sort_weight:number;
  text_color:string;
  type:string | null;
  updated:string;
  updated_by_user_id:number | null;
}