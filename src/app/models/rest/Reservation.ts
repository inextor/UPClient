export interface Reservation{

	condition:'DRAFT'|'ACTIVE'|'CLOSED';
	status:'ACTIVE'|'DELETED';
  address_id:number | null;
  client_name:string;
  created:string;
  created_by_user_id:number;
  currency_id:string;
  id:number;
  note:string | null;
  price_type_id:number;
  start:string;
  store_id:number;
  updated:string;
  updated_by_user_id:number;
  user_id:number | null;
}