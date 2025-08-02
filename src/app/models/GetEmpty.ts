import { Ecommerce, User, Address, Ecommerce_User } from './RestModels';

export class GetEmpty
{
	static ecommerce(): Ecommerce
	{
		return {
			id: 0,
			created: '',
			name: 'xxxx',
			color: 'white',
			font_color: 'black',
			updated: '',
			preferences_id: 1
		};
	}

	static user(): User
	{
		return {
			type: 'USER',
			status: 'ACTIVE',
			code: '',
			creation_store_id: 1,
			workshift_id: null,
			birthday: null,
			credit_limit: 0,
			role_id: '',
			credit_days: 0,
			created_by_user_id: null,
			created_by_store_id: null,
			updated_by_user_id: null,
			default_shipping_address_id: null,
			default_billing_address_id: null,
			email: '',
			id: 0,
			image_id: null,
			lat: null,
			lng: null,
			points: 0,
			password: '',
			phone: '',
			platform_client_id: null,
			username: '',
			name: '',
			payment_option: 'STORE',
			payment_address_id: null,
			price_type_id: 0,
			preferred_store_id: null,
			production_area_id: null,
			store_id: null,
			balance: 0,
			agent_name: '',
			installment_expired_qty: 0,
			installment_expired_amount: 0,
			installment_expired_since: '',
			installment_last_payment: '',
			last_payment_timestamp: '',
			created: '',
			updated: '',
			job_address: '',
			job_name: '',
			job_phone: ''
		};
	}

	static ecommerce_user(): Ecommerce_User
	{
		return {
			id: 0,
			user_id: 0,
			ecommerce_id: 0,
			last_login: '',
			type: 'ROLE_USER',
			status: 'ACTIVE',
			created: '',
			updated: ''
		};
	}

	static address(): Address
	{
		return {
			name: '',
			sat_regimen_capital: '',
			sat_regimen_fiscal: '',
			type: 'SHIPPING',
			address: '',
			zipcode: '',
			email: '',
			rfc: '',
			user_id: 0,
			phone: '',
			note: ''
		};
	}
}
