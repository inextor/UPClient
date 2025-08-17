export interface Ecommerce {
	id: number;
	created: string;
	name: string;
	color: string;
	font_color: string;
	store_id?: number;
	updated: string;
	price_type_id: number;
	price_list_id: number;
	logo_image_id?: number;
	preferences_id: number;
}


export interface CartItemInfo
{
	item_id: number;
	qty: number;
	item_info: any;
}
export interface Product {
	item: {
		id: number;
		name: string;
		description: string;
		image_id?: number;
	};
	category?: {
		name: string;
	};
	prices: {
		price: number;
	}[];
	image_url?: string;
	images: { id: number; url: string }[];
	ecommerce_item?: any;
}
export interface User {
	type: string;
	status: string;
	code: string;
	creation_store_id: number;
	workshift_id: number | null;
	birthday: string | null;
	credit_limit: number;
	role_id: string;
	credit_days: number;
	created_by_user_id: number | null;
	created_by_store_id: number | null;
	updated_by_user_id: number | null;
	default_shipping_address_id: number | null;
	default_billing_address_id: number | null;
	email: string;
	id: number;
	image_id: number | null;
	lat: number | null;
	lng: number | null;
	points: number;
	password?: string;
	phone: string;
	platform_client_id: number | null;
	username: string;
	name: string;
	payment_option: string;
	payment_address_id: number | null;
	price_type_id: number;
	preferred_store_id: number | null;
	production_area_id: number | null;
	store_id: number | null;
	balance: number;
	agent_name: string;
	installment_expired_qty: number;
	installment_expired_amount: number;
	installment_expired_since: string;
	installment_last_payment: string;
	last_payment_timestamp: string;
	created: string;
	updated: string;
	job_address: string;
	job_name: string;
	job_phone: string;
}

export interface Address {
	name: string;
	sat_regimen_capital: string;
	sat_regimen_fiscal: string;
	type: string;
	address: string;
	zipcode: string;
	email: string;
	rfc: string;
	user_id: number;
	phone: string;
	note: string;
}

export interface Ecommerce_User {
	id: number;
	user_id: number;
	ecommerce_id: number;
	last_login: string;
	type: 'ECOMMERCE_ADMIN'|'ROLE_USER'|'ROLE_ADMIN';
	status: string;
	created: string;
	updated: string;
}

export interface EcommerceUserInfo {
		user: User;
		ecommerce_user: Ecommerce_User;
}
