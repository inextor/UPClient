export interface Ecommerce_User{

	type:'ECOMMERCE_ADMIN'|'ROLE_ADMIN'|'ROLE_USER';
	created:string;
	created_by_user_id:number | null;
	ecommerce_id:number;
	id:number;
	updated:string;
	updated_by_user_id:number | null;
	user_id:number;
}
