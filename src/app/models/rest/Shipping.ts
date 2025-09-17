export interface Shipping{

	status:'PENDING'|'DELIVERED'|'SENT'|'CANCELLED';
  created:string;
  created_by_user_id:number | null;
  date:string;
  delivery_timestamp:string | null;
  from_store_id:number | null;
  id:number;
  note:string | null;
  production_area_id:number | null;
  purchase_id:number | null;
  received_by_user_id:number | null;
  requisition_id:number | null;
  shipping_company:string;
  shipping_guide:string;
  to_store_id:number;
  updated:string;
  updated_by_user_id:number | null;
}