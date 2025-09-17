export interface Table{

	clean_status:'CLEAN'|'NEED_CLEANING';
	is_dirty:'NO'|'YES';
	ordered_status:'PENDING'|'ORDERED';
	status:'ACTIVE'|'DELETED';
  attended_by_user_id:number | null;
  capacity:number;
  created:string | null;
  created_by_user_id:number | null;
  id:number;
  name:string;
  order_id:number | null;
  store_id:number;
  updated:string;
  updated_by_user_id:number | null;
}