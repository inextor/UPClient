export interface User{

	payment_option:'ADDRESS'|'TRANSFER'|'STORE';
	status:'ACTIVE'|'DELETED';
	type:'CLIENT'|'USER';
  birthday:string | null;
  code:string | null;
  created:string;
  created_by_store_id:number | null;
  created_by_user_id:number | null;
  creation_store_id:number | null;
  credit_days:number;
  credit_limit:number;
  default_billing_address_id:number | null;
  default_shipping_address_id:number | null;
  email:string | null;
  id:number;
  image_id:number | null;
  job_address:string | null;
  job_name:string | null;
  job_phone:string | null;
  lat:number | null;
  lng:number | null;
  name:string;
  password:string | null;
  payment_address_id:number | null;
  phone:string | null;
  platform_client_id:number | null;
  points:number;
  preferred_store_id:number | null;
  price_type_id:number;
  production_area_id:number | null;
  role_id:number | null;
  store_id:number | null;
  updated:string;
  updated_by_user_id:number | null;
  username:string | null;
  workshift_id:number | null;
}