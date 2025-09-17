export interface Requisition{

	approved_status:'PENDING'|'APPROVED'|'NOT_APPROVED';
	shipped_status:'PENDING'|'SHIPPED';
	status:'PENDING'|'CANCELLED'|'NOT_APPROVED'|'SHIPPED'|'CLOSED'|'APPROVED';
  created:string;
  created_by_user_id:number | null;
  date:string;
  id:number;
  note:string | null;
  requested_to_store_id:number | null;
  required_by_store_id:number;
  required_by_timestamp:string | null;
  updated:string;
  updated_by_user_id:number | null;
}