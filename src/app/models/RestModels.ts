export interface Attachment{
	content_type:string | null;
	created:string;
	file_type_id:number | null;
	filename:string;
	height:number | null;
	id:number | null;
	original_filename?:string | null;
	size:number | null;
	status:'ACTIVE'|'DELETED';
	updated:string;
	uploader_user_id:number | null;
	width:number | null;
}

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
	logo_image_id: number|null;
	preferences_id: number;
}

export interface Ecommerce_Item_Profile {
	id: number;
	profile_id: number;
	ecommerce_item_id: number;
	created: string;
	updated: string;
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

export interface Preferences {
  // Add properties of Preferences if known, otherwise leave empty for now
}

export interface Profile {
  id: number;
  ecommerce_id: number;
  name: string;
  created: string;
  updated: string;
  created_by_user_id: number;
  updated_by_user_id: number;
}
export interface Bank_Account{
	account:string;
	alias:string;
	bank:string;
	bank_rfc:string | null;
	created:string;
	currency:string;
	email:string | null;
	id:number;
	is_a_payment_method:'NO'|'YES';
	name:string;
	updated:string;
	user_id:number | null;
}
export interface Bank_Movement{
	amount_received:number;
	bank_account_id:number | null;
	card_ending:string | null;
	client_user_id:number | null;
	created:string;
	currency_id:string | null;
	id:number;
	invoice_attachment_id:number | null;
	note:string | null;
	origin_bank_name:string | null;
	paid_date:string | null;
	payment_id:number | null;
	provider_user_id:number | null;
	receipt_attachment_id:number | null;
	received_by_user_id:number | null;
	reference:string | null;
	status:'ACTIVE'|'DELETED';
	total:number;
	transaction_type:'CASH'|'CREDIT_CARD'|'DEBIT_CARD'|'CHECK'|'COUPON'|'TRANSFER'|'DISCOUNT'|'RETURN_DISCOUNT'|'PAYPAL';
	type:'expense'|'income';
	updated:string;
}
export interface Bank_Movement_Bill{
	amount:number;
	bank_movement_id:number
	bill_id:number
	created:string;
	currency_amount:number;
	currency_id:string;
	exchange_rate:number;
	id:number;
	updated:string;
}
export interface Bank_Movement_Order{
	amount:number;
	bank_movement_id:number
	created:string;
	created_by_user_id:number | null;
	currency_amount:number;
	currency_id:string | null;
	exchange_rate:number;
	id:number;
	order_id:number
	status:'ACTIVE'|'DELETED';
	updated:string;
	updated_by_user_id:number | null;
}
export interface Batch_Record{
	movement_type:'POSITIVE'|'NEGATIVE'|'ADJUSTMENT';
	batch:string;
	created:string;
	created_by_user_id:number;
	description:string | null;
	expiration_date:string | null;
	id:number;
	is_current:number | null;
	item_id:number;
	movement_qty:number;
	order_item_id:number | null;
	previous_qty:number;
	production_item_id:number | null;
	purchase_detail_id:number | null;
	qty:number;
	shipping_item_id:number | null;
	stock_record_id:number | null;
	store_id:number;
	updated:string;
	updated_by_user_id:number;
}
export interface Bill{
	accepted_status:'PENDING'|'ACCEPTED'|'REJECTED';
	amount_paid:number;
	aproved_by_user_id:number | null;
	bank_account_id:number | null;
	created:string;
	currency_id:string | null;
	due_date:string | null;
	folio:string | null;
	id:number;
	invoice_attachment_id:number | null;
	name:string;
	note:string | null;
	organization_id:number | null;
	paid_by_user_id:number | null;
	paid_date:string | null;
	paid_status:'PENDING'|'PAID';
	paid_to_bank_account_id:number | null;
	pdf_attachment_id:number | null;
	provider_user_id:number | null;
	purchase_id:number | null;
	receipt_attachment_id:number | null;
	status:'DELETED'|'ACTIVE';
	store_id:number | null;
	total:number;
	updated:string;
}
export interface Billing_Data{
	address:string | null;
	city:string | null;
	created:string;
	created_by_user_id:number | null;
	id:number;
	password:string | null;
	porcentaje_ISR:number;
	precision:number;
	razon_social:string | null;
	regimen_capital:string | null;
	regimen_fiscal:string | null;
	remaining_credits:number | null;
	rfc:string;
	state:string | null;
	updated:string;
	updated_by_user_id:number | null;
	usuario:string | null;
	zipcode:string | null;
}
export interface Box{
	created:string;
	id:number;
	production_item_id:number | null;
	serial_number_range_end:number | null;
	serial_number_range_start:number | null;
	status:'ACTIVE'|'DELETED';
	store_id:number | null;
	type_item_id:number
	updated:string;
}
export interface Box_Content{
	box_id:number
	id:number;
	initial_qty:number
	item_id:number
	qty:number
	serial_number_range_end:number | null;
	serial_number_range_start:number | null;
}
export interface Brand{
	created:string;
	created_by_user_id:number | null;
	description:string | null;
	id:number;
	image_id:number | null;
	name:string;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Cart_Item{
	created:string;
	id:number;
	item_id:number
	qty:number | null;
	session_id:string | null;
	type:'IN_CART'|'BUY_LATER';
	updated:string;
	user_id:number | null;
}
export interface Cash_Close{
	cash_on_hand:number;
	created:string;
	created_by_user_id:number
	end:string;	// 'Hora de la dispositivo del cajero, No es una hora fiable, para hacer las cuentas solo sirve para imprimir el ticket',
	id:number;
	since:string;
	start:string;	// 'Hora de la dispositivo del cajero, No es una hora fiable, para hacer las cuentas solo sirve para imprimir',
	updated:string;
}
export interface Cashier_Withdrawal{
	amount:number;
	created:string;
	currency_id:string;
	id:number;
	store_id:number
	user_id:number
}
export interface Category{
	background:string | null;
	code:string | null;
	created:string;
	created_by_user_id:number | null;
	default_clave_prod_serv:string | null;
	display_status:'NORMAL'|'HIDDEN';
	id:number;
	image_id:number | null;
	image_style:'COVER'|'CONTAIN';
	name:string;
	shadow_color:string | null;
	sort_weight:number;
	text_color:string | null;
	text_style:'NEVER'|'CENTER'|'DOWN';
	type:string | null;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Category_Store{
	category_id:number
	created:string;
	created_by_user_id:number
	id:number;
	pos_preference:'SHOW'|'HIDE'|'DEFAULT';
	store_id:number
	updated:string;
	updated_by_user_id:number
}
export interface Category_Tree{
	child_category_id:number
	created:string;
	created_by_user_id:number
	depth:number
	id:number;
	parent_category_id:number
	path:string | null;
	updated:string;
	updated_by_user_id:number
}
export interface Category_Type{
	TYPE:'PRODUCT_FOR_SALE'|'TOOL'|'RAW_MATERIAL';
	id:string;
}
export interface Check_In{
	created_by_user_id:number | null;
	current:number;
	id:number;
	end_timestamp:string;
	start_timestamp:string;
	updated_by_user_id:number | null;
	user_id:number
}
export interface Check_In_Raw{
	created:string;
	created_by_user_id:number
	id:number;
	user_id:number
}
export interface Commanda{
	commanda_type_id:number
	has_sound:number;
	id:number;
	name:string;
	order_display_preferences:'ALL_ORDERS'|'COMMANDA_TYPE_ORDERS';
	print_preferences:'ONLY_DISPLAY'|'PRINT_PARTIAL'|'FULL_PRINT'|'PRINT_ONLY_NEW_ITEMS';
	printer_ip:string | null;
	printer_port:string | null;
	store_id:number
}
export interface Commanda_Type{
	created:string;
	id:number;
	name:string;
	updated:string;
}
export interface Consumption {
	id: number;
	item_id: number;
	price: number;
	qty: number;
	production_area_id: number | null;
	consumed_by_user_id: number | null;
	store_id: number;
	description: string | null;
	status: 'ACTIVE' | 'DELETED';
	created: string;
	created_by_user_id: number;
	updated: string;
	updated_by_user_id: number;
}
export interface Currency{
	id:string;
	name:string;
}
export interface Currency_Rate{
	currency_id:string;
	id:number;
	rate:number;
	store_id:number
}
export interface Delivery_Assignment
{
	id:number;
	created:string;
	user_id:number;
	reservation_item_id:number;
	updated:string;
}
export interface File_Type{
	content_type:string;
	created:string;
	extension:string | null;
	id:number;
	image_id:number | null;
	is_image:'NO'|'YES';
	name:string;
	updated:string;
}
export interface Form
{
	created:string | null;
	created_by_user_id:number;
	description:string | null;
	id:number;
	is_active:number | null;
	is_response_title_required:number | null;
	responses_allowed:number | null;
	title:string;
	updated:string | null;
	updated_by_user_id:number;
}
export interface Fund{
	amount:number;
	cashier_hour:string;	// 'Se usa para imprimir el corte de caja, esta hora no es segura para hacer comparaciones de rango los usuario suelen cambiar las horas de los dispositivos, y se afecta en los cambios de horario anualmente, pero es para la refererencia en el misma linea de tiempo',
	created:string;
	created_by_user_id:number
	currency_id:string;
	id:number;
	store_id:number | null;
	updated:string;
}
export interface Image{
	content_type:string;
	created:string;
	filename:string;
	height:number
	id:number;
	is_private:number;
	original_filename:string | null;
	size:number
	uploader_user_id:number | null;
	width:number
}
export interface Ingredient{
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number | null;
	name:string;
	order_type:'ALL'|'TOGO'|'IN_PLACE'|'PICK_UP'|'QUICK_SALE';
	qty:number;
	stock_item_id:number | null;
	updated:string;
	updated_by_user_id:number
}
export interface Item{
	applicable_tax:'DEFAULT'|'EXEMPT'|'PERCENT';
	availability_type:'ON_STOCK'|'BY_ORDER'|'ALWAYS';
	background:string | null;
	brand_id:number | null;
	category_id:number | null;
	clave_sat:string | null;
	code:string | null;
	commanda_type_id:number | null;
	commission:number | null;
	commission_currency_id:string | null;
	commission_type:'NONE'|'AMOUNT'|'PERCENT';
	created:string;
	created_by_user_id:number | null;
	currency_id:string | null;
	description:string | null;
	extra_name:string | null;
	form_id:number | null;
	for_reservation:'NO'|'YES';
	has_serial_number:'NO'|'YES';
	id:number;
	image_id:number | null;
	image_style:'COVER'|'CONTAIN';
	json_tags:string[] | null;
	measurement_unit:string | null;
	name:string;
	note_required:'NO'|'YES';
	on_sale:'NO'|'YES';
	partial_sale:'NO'|'YES';
	period_type:'BY_HOUR'|'DAILY'|'WEEKLY'|'MONTHLY';
	product_id:number | null;
	provider_user_id:number | null;
	reference_currency_id:string;
	reference_price:number;
	return_action:'RETURN_TO_STOCK'|'ADD_TO_MERMA'|'TRANSFORM_INTO_ITEM';
	shadow_color:string | null;
	sort_weight:number;
	status:'ACTIVE'|'DELETED';
	text_color:string | null;
	text_style:'NEVER'|'CENTER'|'DOWN';
	unidad_medida_sat_id:string | null;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Item_Attribute{
	id:number;
	item_id:number
	name:string;
	value:string;
}
export interface Item_Exception{
	created:string;
	description:string;
	id:number;
	item_id:number
	list_as_exception:'YES'|'NO';
	order_type:'ALL'|'TOGO'|'IN_PLACE'|'PICK_UP'|'QUICK_SALE';
	stock_item_id:number | null;
	stock_qty:number;
	updated:string;
}
export interface Item_Option{
	id:number;
	included_extra_qty:number
	included_options:number | null;
	item_id:number
	max_extra_qty:number | null;
	max_options:number | null;
	min_options:number | null;
	name:string;
	status:'ACTIVE'|'DELETED';
}
export interface Item_Option_Value{
	charge_type:'OPTIONAL'|'INCLUDED'|'EXTRA_CHARGE';
	extra_price:number;
	id:number;
	item_id:number
	item_option_id:number | null;
	max_extra_qty:number | null;
	portion_amount:number;
	price:number;
	status:'ACTIVE'|'DELETED';
}
export interface Item_Points{
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	points_percent:number
	updated:string;
	updated_by_user_id:number
}
export interface Item_Recipe{
	created:string;
	id:number;
	item_id:number
	parent_item_id:number
	portion_qty:number;
	print_on_recipe:'NO'|'YES';
	updated:string;
}
export interface Item_Store{
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	pos_preference:'SHOW'|'HIDE'|'DEFAULT';
	store_id:number
	updated:string;
	updated_by_user_id:number
}

export interface Keyboard_Shortcut{
	created:string;
	created_by_user_id:number | null;
	id:number;
	key_combination:string;
	name:string;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Merma{
	box_id:number | null;
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	note:string | null;
	price:number;
	qty:number
	shipping_id:number | null;
	store_id:number
	updated:string;
}
export interface Notification_Token{
	created:string;
	id:number;
	provider:string;
	status:'ACTIVE'|'DELETED';
	token:string;
	updated:string;
	user_id:number
}
export interface Offer{
	category_id:number | null;
	coupon_code:string | null;
	created:string;
	created_by_user_id:number
	description:string | null;
	discount:number;
	gift_item_id:number | null;
	hour_end:string;
	hour_start:string;
	id:number;
	image_id:number | null;
	is_cumulative:'NO'|'YES';
	is_valid_friday:number;
	is_valid_monday:number;
	is_valid_saturday:number;
	is_valid_sunday:number;
	is_valid_thursday:number;
	is_valid_tuesday:number;
	is_valid_wednesday:number;
	item_id:number | null;
	m:number | null;
	n:number | null;
	name:string | null;
	percent_qty:number | null;
	price:number;
	status:'ACTIVE'|'DELETED';
	store_id:number | null;
	type:'PERCENT_DISCOUNT'|'N_X_M'|'AMOUNT_DISCOUNT'|'GIFT'|'FIXED_PRICE';
	updated:string;
	updated_by_user_id:number;
	valid_from:string;
	valid_thru:string;
}
export interface Order{
	address:string | null;
	amount_paid:number;
	ares:number | null;
	authorized_by:string | null;
	billing_address_id:number | null;
	billing_data_id:number | null;
	cancellation_reason:string | null;
	cancellation_timestamp:string | null;
	cancelled_by_user_id:number | null;
	cashier_user_id:number | null;
	city:string | null;
	client_name:string | null;
	client_user_id:number | null;
	closed_timestamp:string | null;
	created:string;
	currency_id:string;
	delivery_status:'PENDING'|'SENT'|'DELIVERED'|'CANCELLED'|'READY_TO_PICKUP';
	delivery_user_id:number | null;
	discount:number;
	discount_calculated:number;
	facturacion_code:string;
	facturado:'NO'|'YES';
	guests:number | null;
	id:number;
	lat:number | null;
	lng:number | null;
	initial_payment:number;
	marked_for_billing:'YES'|'NO';
	note:string | null;
	paid_status:'PENDING'|'PAID'|'PARTIALLY_PAID';
	paid_timetamp:string | null;
	period_id:number | null;
	price_type_id:number
	quote_id:number | null;
	sat_codigo_postal:string | null;
	sat_domicilio_fiscal_receptor:string | null;
	sat_factura_id:number | null;
	sat_forma_pago:string | null;
	sat_ieps:number;
	sat_isr:number;
	sat_exchange_rate:number;
	sat_pdf_attachment_id:number | null;
	sat_razon_social:string | null;
	sat_receptor_email:string | null;
	sat_receptor_rfc:string | null;
	sat_regimen_capital_receptor:string | null;
	sat_regimen_fiscal_receptor:string | null;
	sat_serie:string | null;
	sat_serie_consecutive:number | null;
	sat_uso_cfdi:string | null;
	sat_xml_attachment_id:number | null;
	service_type:'TOGO'|'IN_PLACE'|'PICK_UP'|'QUICK_SALE';
	shipping_address_id:number | null;
	shipping_cost:number;
	state:string | null;
	status:'PENDING'|'CANCELLED'|'ACTIVE'|'CLOSED';
	store_consecutive:number | null;
	store_id:number
	subtotal:number;
	suburb:string | null;
	sync_id:string | null;
	system_activated:string | null;
	table_id:number | null;
	tag:string | null;
	tax:number;
	tax_percent:number;
	total:number;
	updated:string;
	version_created:string | null;
	version_updated:string | null;
}
export interface Order_Item{
	reservation_item_id: number | null;
	commanda_id:number | null;
	commanda_status:'NOT_DISPLAYED'|'PENDING'|'DISMISSED';
	created:string;
	created_by_user_id:number | null;
	delivered_qty:number;
	delivery_status:'PENDING'|'DELIVERED';
	discount:number;
	discount_percent:number | null;
	exceptions:string | null;
	has_separator:'NO'|'YES';
	id:number;
	id_payment:number | null;
	is_free_of_charge:'NO'|'YES';
	is_item_extra:'NO'|'YES';
	item_extra_id:number | null;
	item_group:number | null;
	item_id:number
	item_option_id:number | null;
	item_option_qty:number;
	note:string | null;
	offer_id:number | null;
	order_id:number
	original_unitary_price:number;
	paid_qty:number | null;
	preparation_status:'PENDING'|'IN_PREPARATION'|'READY'|'DELIVERED';
	price_id:number | null;
	qty:number;
	return_required:'NO'|'YES';
	status:'ACTIVE'|'DELETED';
	stock_status:'IN_STOCK'|'STOCK_REMOVED';
	subtotal:number;
	system_preparation_ended:string | null;
	system_preparation_started:string | null;
	tax:number;
	tax_included:'NO'|'YES';
	total:number;
	type:'NORMAL'|'REFUND';
	unitary_price:number;
	unitary_price_meta:number;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Order_Item_Cost{
	child_items_cost:number;
	cost:number;
	created:string;
	id:number;
	ingredients_cost:number;
	item_cost:number;
	item_id:number
	name:string;
	order_id:number
	order_item_id:number
	qty:number;
	sale_profit:number;
	sale_total:number;
	store_id:number
	total:number;
}
export interface Order_Item_Exception{
	created:string;
	description:string;
	id:number;
	item_exception_id:number
	order_item_id:number
	stock_item_id:number | null;
	updated:string;
}
export interface Order_Item_Serial{
	id:number;
	item_id:number
	order_item_id:number
	serial_id:number
}
export interface Order_Offer{
	amount:number;
	coupon_code:string;
	created:string;
	created_by_user_id:number
	id:number;
	offer_id:number
	order_id:number
	updated:string;
	updated_by_user_id:number
}
export interface Pallet{
	created:string;
	created_by_user_id:number | null;
	id:number;
	production_item_id:number | null;
	store_id:number | null;
	updated:string;
}
export interface Pallet_Content{
	box_id:number
	created:string;
	created_by_user_id:number | null;
	id:number;
	pallet_id:number
	status:'ACTIVE'|'REMOVED';
	updated:string;
	updated_by_user_id:number | null;
}
export interface Parent_Process{
	child_process_id:number
	created:string;
	id:number;
	parent_process_id:number
	updated:string;
}
export interface Payment{
	change_amount:number;
	concept:string | null;
	created:string;
	created_by_user_id:number | null;
	currency_id:string | null;
	exchange_rate:number;
	facturado:'YES'|'NO';
	id:number;
	paid_by_user_id:number | null;
	payment_amount:number;
	sat_factura_id:number | null;
	received_amount:number;
	sat_pdf_attachment_id:number | null;
	sat_uuid:string | null;
	sat_xml_attachment_id:number | null;
	status:'ACTIVE'|'DELETED';
	store_id:number | null;
	sync_id:string | null;
	tag:string | null;
	type:'income'|'expense';
	updated:string;
}
export interface Paypal_Access_Token{
	access_token:string;
	created:string;
	expires:string;
	id:number;
	raw_response:string | null;
}
export interface Paypal_Order{
	buyer_user_id:number
	create_response:string;
	created:string;
	id:string;
	log:string | null;
	order_id:number | null;
	status:string;
}
export interface Payroll{
	id:number;
	user_id:number;
	store_id:number | null;
	created_by_user_id:number | null;
	updated_by_user_id:number | null;
	start_date:string;
	end_date:string;
	subtotal:number;
	total:number;
	paid_status:'PENDING'|'PAID';
	status:'ACTIVE'|'DELETED';
	created:string;
	updated:string;
}
export interface Payroll_Concept{
	id:number;
	type:'DEDUCTION'|'PERCEPTION';
	name:string;
	status:'ACTIVE'|'DELETED';
	formula:string;
}
export interface Payroll_Concept_Value{
	id:number;
	payroll_id:number;
	payroll_concept_id:number;
	value:number;
	status:'ACTIVE'|'DELETED';
}
export interface Period{
	id:number;
	created:string;
	created_by_user_id:number;
	end_timestamp:string;
	minutes_offset:number;
	note:string | null;
	reservation_id:number;
	start_timestamp:string;
	status:'ACTIVE'|'DELETED';
	updated:string;
	updated_by_user_id:number;
}
export interface Points_Log{
	client_user_id:number
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	order_id:number
	points:number;
	updated:string;
}
export interface Post{
	created:string;
	created_by_user_id:number
	id:number;
	images_ids:string;
	post:string;
	title:string;
	updated:string;
	updated_by_user_id:number
}
export interface Preferences{
	ask_for_guests_number:number;
	background_image_id:number | null;
	background_image_size:'repeat'|'cover';
	ecommerce_enabled:number;
	btn_primary_bg_color:string | null;
	btn_primary_bg_color_hover:string | null;
	btn_primary_border_color:string | null;
	btn_primary_border_color_hover:string | null;
	btn_primary_border_width:number | null;
	btn_primary_text_color:string | null;
	btn_primary_text_color_hover:string | null;
	btn_secondary_bg_color:string | null;
	btn_secondary_bg_color_hover:string | null;
	btn_secondary_border_color:string | null;
	btn_secondary_border_color_hover:string | null;
	btn_secondary_border_width:number | null;
	btn_secondary_text_color:string | null;
	btn_secondary_text_color_hover:string | null;
	button_border_radius:string | null;
	button_style:string | null;
	card_background_color:string | null;
	card_background_image_id:number | null;
	card_background_opacity:number | null;
	card_border_color:string | null;
	card_border_radius:string | null;
	charts_colors:string | null;
	chat_upload_attachment_image_id:number | null;
	chat_upload_image_id:number | null;
	created:string;
	currency_price_preference:'ONLY_DEFAULT_CURRENCY'|'MULTIPLE_CURRENCY';
	default_cash_close_receipt:number | null;
	default_file_logo_image_id:number | null;
	default_input_type:'TACTILE'|'KEYBOARD';
	default_pos_availability_type:'ALWAYS'|'ON_STOCK';
	default_price_type_id:number | null;
	default_print_receipt:number | null;
	default_product_image_id:number | null;
	default_return_action:'RETURN_TO_STOCK'|'ADD_TO_MERMA'|'TRANSFORM_TO_PRODUCT';
	default_ticket_format:number | null;
	default_ticket_image_id:number | null;
	default_user_logo_image_id:number | null;
	display_categories_on_items:'YES'|'NO';
	header_background_color:string | null;
	header_text_color:string | null;
	id:number;
	item_selected_background_color:string | null;
	item_selected_text_color:string | null;
	link_color:string | null;
	link_hover:string | null;
	login_background_image_id:number | null;
	login_background_image_size:'repeat'|'cover';
	login_image_id:number | null;
	logo_image_id:number | null;
	menu_background_color:string | null;
	menu_background_image_id:number | null;
	menu_background_image_size:'cover'|'repeat';
	menu_background_type:'IMAGE'|'COLOR';
	menu_color_opacity:number | null;
	menu_icon_color:string | null;
	menu_text_color:string | null;
	menu_title_color:string | null;
	name:string | null;
	pv_bar_background_color:string | null;
	pv_bar_text_color:string | null;
	pv_bar_total_color:string | null;
	pv_show_all_categories:'NO'|'YES';
	pv_show_orders:'ALL_OPEN'|'OPEN_SAME_DAY';
	radius_style:string | null;
	stock_negative_values_allowed:number;
	submenu_background_color:string | null;
	submenu_color_opacity:number | null;
	submenu_icon_color:string | null;
	submenu_text_color:string | null;
	text_color:string | null;
	titles_color:string | null;
	touch_size_button:string | null;
	touch_text_color:string | null;
	touch_text_shadow_color:string | null;
	update_prices_on_purchases:number | null;
	updated:string;
}
export interface Price{
	created:string;
	created_by_user_id:number | null;
	currency_id:string | null;
	id:number;
	item_id:number
	percent:number;
	price:number;
	price_list_id:number
	price_type_id:number
	tax_included:'NO'|'YES';
	updated:string;
	updated_by_user_id:number | null;
}
export interface Price_List{
	created:string;
	created_by_user_id:number | null;
	id:number;
	name:string;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Price_Log{
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	new_percent:number;
	new_price:number;
	old_percent:number;
	old_price:number;
	old_tax_included:'YES'|'NO';
	price_list_id:number
	price_type_id:number
	tax_included:'NO'|'YES';
	updated:string;
}
export interface Price_Type{
	created:string;
	id:number;
	model:'AMOUNT'|'PERCENT'|'ALL';
	name:string;
	show_bill_code:'YES'|'NO';
	sort_priority:number;
	tax_model:'TAX_INCLUDED'|'PLUS_TAX'|'ALL';
	type:'RETAIL'|'WHOLESALE';
	updated:string;
	wholesale_min_qty:number;
	wholesale_type:'BY_ARTICLE'|'BY_CATEGORY';
}
export interface Process{
	category_id:number | null;
	created:string;
	id:number;
	item_id:number | null;
	name:string;
	production_area_id:number
	status:'ACTIVE'|'DELETED';
	type:'SALE_ITEM'|'SALE_CATEGORY'|'SHIPPING'|'SHIPPING_ITEM';
	updated:string;
}
export interface Process_Status{
	created:string;
	id:number;
	mark_task_as_done:number;
	name:string;
	process_id:number
	status:'ACTIVE'|'DELETED';
	updated:string;
}
export interface Product{
	id:number;
	name:number
}
export interface Production{
	alternate_qty: number;
	control: string | null;
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	merma_qty:number;
	merma_reason:string | null;
	produced: string;
	produced_by_user_id: number | null;
	production_area_id: number | null;
	qty:number
	qty_reported:number;
	store_id:number;
	status:'ACTIVE'|'DELETED';
	updated:string;
	verified_by_user_id:number | null;
}
export interface Production_Area{
	created:string;
	id:number;
	name:string;
	store_id:number;
	status:'ACTIVE'|'DELETED';
	updated:string;
}
export interface Production_Area_Item{
	created:string;
	id:number;
	item_id:number
	production_area_id:number
	status:'ACTIVE'|'DELETED';
	updated:string;
}

export interface Role_Item_Price{
	created:string;
	created_by_user_id:number;
	id:number;
	item_id:number;
	price:number;
	role_id:number;
	updated:string;
	updated_by_user_id:number;
}

export interface Purchase{
	created:string;
	created_by_user_id:number | null;
	id:number;
	order_id:number | null;
	provider_name:string | null;
	provider_user_id:number | null;
	status:'ACTIVE'|'DELETED';
	stock_status:'PENDING'|'ADDED_TO_STOCK'|'SHIPPING_CREATED';
	store_id:number
	total:number;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Purchase_Detail{
	created:string;
	description:string | null;
	id:number;
	item_id:number
	purchase_id:number
	qty:number;
	serial_number:string | null;
	status:'ACTIVE'|'DELETED';
	stock_status:'PENDING'|'ADDED_TO_STOCK';
	total:number
	unitary_price:number;
	updated:string;
}
export interface Push_Notification{
	app_path:string | null;
	body:string;
	created:string;
	icon_image_id:number | null;
	id:number;
	link:string | null;
	object_id:string | null;
	object_type:string;
	priority:'normal'|'high';
	push_notification_id:string | null;
	read_status:'PENDING'|'READ';
	response:string | null;
	sent_status:number | null;
	title:string;
	updated:string;
	user_id:number
}
export interface Quote{
	approved_status:'PENDING'|'SENT'|'DECLINED'|'APPROVED'|'CANCELLED';
	approved_time:string | null;
	attachment_id:number | null;
	client_user_id:number | null;
	created:string;
	created_by_user_id:number
	email:string;
	id:number;
	name:string;
	phone:string;
	price_type_id:number | null;
	store_id:number
	sync_id:string;
	tax_percent:number;
	updated:string;
	valid_until:string | null;
}
export interface Quote_Item{
	created:string;
	discount:number;
	discount_percent:number;
	id:number;
	item_id:number
	original_unitary_price:number;
	provider_price:number;
	qty:number;
	quote_id:number
	status:'ACTIVE'|'DELETED';
	subtotal:number;
	tax:number;
	tax_included:'YES'|'NO';
	total:number;
	unitary_price:number;
	updated:string;
}
export interface Requisition{
	approved_status: 'PENDING'|'NOT_APPROVED'|'APPROVED';
	created:string;
	created_by_user_id:number | null;
	date:string | null;
	id:number;
	requested_to_store_id:number | null;
	required_by_store_id:number
	required_by_timestamp: string | null;
	status:'PENDING'|'CANCELLED'|'NOT_APPROVED'|'SHIPPED'|'CLOSED'|'APPROVED';
	updated:string;
	updated_by_user_id:number | null;
}
export interface Requisition_Item{
	aproved_status:'NOT_APPROVED'|'APPROVED';
	created:string;
	id:number;
	item_id:number
	qty:number
	requisition_id:number
	status:'ACTIVE'|'DELETED';
	updated:string;
}
export interface Reservation
{
	price_type_id: number;
	id:number;
	address_id:number | null;
	client_name:string;
	created:string;
	created_by_user_id:number;
	condition:'DRAFT'|'ACTIVE'|'CLOSED';
	currency_id:string;
	note:string | null;
	start:string;
	status: 'ACTIVE' | 'DELETED';
	store_id:number;
	updated:string;
	updated_by_user_id:number;
	user_id:number | null;
}
export interface Reservation_Item{
	id: number;
	created: string;
	delivered_qty: number;
	end: string| null;
	item_id: number;
	last_period_id: number | null;
	note: string | null;
	period_type: 'BY_HOUR' | 'DAILY' | 'WEEKLY' | 'MONTHLY'|'ONCE_ONLY';
	price: number;
	tax_included: 'YES' | 'NO';
	qty: number;
	reservation_id: number;
	returned_qty: number;
	scheduled_delivery: string | null;
	scheduled_return: string | null;
	serial_item_id: number;
	start: string;
	status: 'ACTIVE' | 'DELETED';
	updated: string;
}
export interface Reservation_Item_Serial{
	id: number;
	created: string;
	created_by_user_id: number;
	delivered_timestamp: string | null;
	delivery_by_user_id: number | null;
	end: string | null;
	minutes_offset: number;
	note: string | null;
	reservation_item_id: number;
	returned_timestamp: string | null;
	returned_by_user_id: number | null;
	schedule_delivery: string | null;
	schedule_return: string | null;
	serial_id: number;
	serial: string;
	start: string | null;
	status: 'ACTIVE' | 'DELETED';
	updated: string;
	updated_by_user_id: number;
}
export interface Return_Assignment
{
	id:number;
	created:string;
	user_id:number;
	reservation_item_id:number;
	updated:string;
}
export interface Returned_Item{
	created:string;
	id:number;
	item_id:number
	returned_qty:number
	returns_id:number
	total:number;
	updated:string;
}
export interface Returns{
	amount_paid:number;
	cashier_user_id:number
	client_user_id:number | null;
	code:string;
	created:string;
	id:number;
	note:string | null;
	order_id:number
	store_id:number
	total:number;
	updated:string;
}
export interface Role{
	created:string;
	created_by_user_id:number | null;
	id:number;
	name:string;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Sat_Factura{
	created:string;
	created_by_user_id:number | null;
	id:number;
	order_id:number | null;
	payment_id:number | null;
	pdf_attachment_id:number
	updated:string;
	updated_by_user_id:number | null;
	uuid:string;
	xml_attachment_id:number | null;
}
export interface Sat_Response{
	created:string;
	created_by_user_id:number | null;
	id:number;
	id_order:number
	request:string | null;
	response:string | null;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Serial
{
	id:number;
	additional_data:string | null;
	available_status:'AVAILABLE'|'RESERVED'|'MAINTENANCE';
	created:string;
	created_by_user_id:number | null;
	description:string | null;
	item_id:number
	last_order_id:number | null;
	last_reservation_id:number | null;
	serial_number:string;
	status:'ACTIVE'|'INACTIVE';
	store_id:number
	updated:string;
	updated_by_user_id:number | null;
}
interface Serial_Log{
	id:number;
	serial_id:number;
	note:string;
	reservation_item_id:number;
	timestamp:string;
}

export interface Serial_Image{
	created:string;
	description:string | null;
	id:number;
	image_id:number
	serial_id:number
	updated:string;
}
export interface Serie_Counter{
	counter:number | null;
	created:string;
	id:string;
	updated:string;
}

export interface Session{
	created:string;
	id:string;
	status:'ACTIVE'|'INACTIVE';
	updated:string;
	user_id:number | null;
}
export interface Shipping{
	created:string;
	created_by_user_id:number | null;
	date:string | null;
	delivery_timestamp: string | null;
	from_store_id:number | null;
	id:number;
	note:string | null;
	purchase_id:number | null;
	received_by_user_id:number | null;
	requisition_id:number | null;
	shipping_company:string;
	shipping_guide:string;
	status:'PENDING'|'DELIVERED'|'SENT'|'CANCELLED';
	to_store_id:number | null;
	updated:string;
	updated_by_user_id:number | null;
}
export interface Shipping_Item{
	box_id?:number | null;
	created?:string;
	id?:number;
	item_id:number | null;
	pallet_id?:number | null;
	qty?:number | null;
	received_qty?:number | null;
	requisition_item_id?:number | null;
	serial_number:string | null;
	shipping_id?:number
	shrinkage_qty?:number | null;
	updated?:string;
}
export interface Stock_Alert{
	created:string;
	created_by_user_id:number
	id:number;
	item_id:number
	max:number | null;
	min:number | null;
	store_id:number
	updated:string;
	updated_by_user_id:number
}
export interface Stock_Record{
	created:string;
	created_by_user_id:number
	description:string | null;
	id:number;
	is_current:number;
	item_id:number
	movement_qty:number;
	movement_type:'POSITIVE'|'NEGATIVE'|'ADJUSTMENT';
	order_item_id:number | null;
	previous_qty:number;
	production_item_id:number | null;
	purchase_detail_id:number | null;
	qty:number;
	serial_number_record_id:number | null;
	shipping_item_id:number | null;
	store_id:number
	updated:string;
	updated_by_user_id:number
}
export interface Stock_Record{
	created:string;
	created_by_user_id:number;
	description:string | null;
	id:number;
	is_current:number;
	item_id:number;
	movement_qty:number;
	movement_type:'POSITIVE'|'NEGATIVE'|'ADJUSTMENT';
	order_item_id:number | null;
	previous_qty:number;
	production_item_id:number | null;
	purchase_detail_id:number | null;
	qty:number;
	serial_number_record_id:number | null;
	shipping_item_id:number | null;
	store_id:number;
	updated:string;
	updated_by_user_id:number;
}
export interface Stocktake{
	created:string;
	created_by_user_id:number | null;
	id:number;
	name:string | null;
	status:'ACTIVE'|'CLOSED';
	store_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Stocktake_Item{
	box_content_id:number | null;
	box_id:number | null;
	created:string;
	created_by_user_id:number | null;
	creation_qty:number | null;
	current_qty:number | null;
	id:number;
	item_id:number | null;
	pallet_id:number | null;
	stocktake_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Stocktake_Scan{
	box_content_id:number | null;
	box_id:number | null;
	created:string;
	created_by_user_id:number | null;
	id:number;
	item_id:number | null;
	pallet_id:number | null;
	qty:number
	stocktake_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Storage{
	created:string;
	created_by_user_id:number | null;
	id:number;
	section:string;
	shelf:string;
	sort_order:number | null;
	store_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Storage_Item{
	created:string;
	created_by_user_id:number | null;
	id:number;
	item_id:number
	storage_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Store{
	address?:string | null;
	accept_cash:number;
	accept_credit_card:number;
	accept_check:number;
	accept_transfer:number;
	autofacturacion_day_limit?:number | null;
	autofacturacion_enabled?:'YES'|'NO';
	autofacturacion_settings:'ONLY_SAME_MONTH'|'ONLY_DAY_LIMIT'|'BOTH'|'DISABLED';
	business_name?:string | null;
	city:string | null;
	client_user_id:number | null;
	created?:string;
	created_by_user_id?:number | null;
	default_billing_data_id:number | null;
	default_claveprodserv:string;
	default_currency_id:string;
	default_sat_item_name:string;
	default_sat_serie:string;
	electronic_transfer_percent_fee?:number | null;
	//exchange_rate:number | null;
	id:number;
	image_id?:number | null;
	lat:number | null;
	lng:number | null;
	main_pc_ip:string | null;
	max_cash_amount:number;
	modo_facturacion:'DESGLOSADA'|'COMPACTA';
	name?:string | null;
	offline_search_enabled:number;
	paypal_email?:string | null;
	phone?:string | null;
	pos_category_preferences?:'DEFAULT_BY_PRODUCT'|'HIDE_BY_DEFAULT'|'SHOW_BY_DEFAULT';
	price_list_id:number;
	print_receipt?:number | null;
	print_receipt_copies:number;
	printer_ticket_config:string | null;
	production_enabled:number | null;
	qr_size:'PERCENT_25'|'PERCENT_50'|'PERCENT_75'|'PERCENT_100';
	rfc:string | null;
	sales_enabled:number | null;
	show_facturacion_qr:'NO'|'YES',
	state?:string | null;
	status:'ACTIVE'|'DISABLED';
	suggested_tip:number;
	tax_percent:number;
	ticket_footer_text?:string | null;
	ticket_image_id?:number | null;
	updated?:string;
	updated_by_user_id?:number | null;
	zipcode?:string | null;
}
export interface Store_Bank_Account{
	bank_account_id:number
	created:string;
	id:number;
	name:string;
	store_id:number
	updated:string;
}
export interface Store_Sale_Report{
	amount_description:string;
	ares_order_ids:string;
	average_order_amount:number;
	created:string;
	created_by_user_id:number
	date:string | null;
	discounts:number
	end:string;
	expense_payments:number
	id:number;
	income_payments:number
	localtime_end:string;
	localtime_start:string;
	order_count:number
	order_ids:string;
	start:string;
	store_consecutive:number
	store_id:number
	total_sales:number
	updated:string;
	updated_by_user_id:number
}
export interface Table{
	attended_by_user_id:number | null;
	capacity:number | null;
	clean_status:'CLEAN'|'NEED_CLEANING';
	created:string;
	created_by_user_id:number | null;
	id:number;
	is_dirty:'NO'|'YES';
	name:string;
	order_id:number | null;
	ordered_status:'PENDING'|'ORDERED';
	status:'ACTIVE'|'DELETED';
	store_id:number
	updated:string;
	updated_by_user_id:number | null;
}
export interface Task{
	category_id:number | null;
	counter:number | null;
	created:string;
	description:string;
	id:number;
	in_charge_user_id:number | null;
	is_done:number;
	item_id:number | null;
	order_id:number | null;
	over_extend_qty:number | null;
	parent_task_id:number | null;
	process_id:number
	process_status_id:number | null;
	qty:number | null;
	requisition_id:number | null;
	status:'ACTIVE'|'DELETED';
	updated:string;
}
export interface Task_Comment{
	comment:string;
	created:string;
	id:number;
	task_id:number
	type:'SYSTEM'|'USER';
	updated:string;
	user_id:number | null;
}
export interface Unidad_Medida_Sat{
	descripcion:string | null;
	id:string;
	nombre:string;
}

export interface User_Permission{
	add_asistance:number;
	add_bills:number;
	add_commandas:number;
	add_credit_sales:number;
	add_items:number;
	add_form:number;
	add_marbetes:number;
	add_payments:number;
	add_payroll:number;
	add_providers:number;
	add_purchases:number;
	add_requisition:number;
	add_roles: number;
	add_stock:number;
	add_user:number;
	advanced_order_search:number;
	approve_bill_payments:number;
	asign_marbetes:number;
	caldos:number;
	cancel_closed_orders:number;
	cancel_ordered_item:number;
	change_client_prices:number;
	created:string;
	created_by_user_id:number | null;
	currency_rates:number;
	discounts:number;
	edit_billing_data:number;
	fullfill_orders:number;
	global_add_stock:number;
	global_bills:number;
	global_order_delivery:number;
	global_pos:number;
	global_prices:number;
	global_purchases:number;
	global_receive_shipping:number;
	global_requisition:number;
	global_send_shipping:number;
	global_stats:number;
	hades:number;
	is_provider:number;
	open_cashier_box_anytime:number;
	order_delivery:number;
	pay_bills:number;
	pos:number;
	preferences:number;
	price_types:number;
	print_pre_receipt:number;
	production:number;
	purchases:number;
	pv_returns:number;
	quotes:number;
	receive_shipping:number;
	reports:number;
	shipping_receive_type: 'VALIDATE' | 'CAPTURE_QTY';
	show_tables:number;
	send_shipping:number;
	stocktake:number;
	store_prices:number;
	updated:string;
	updated_by_user_id:number | null;
	user_id:number;
	view_asistance:number;
	view_commandas:number;
	view_payroll:number;
	view_responses:number;
	view_stock:number;
	view_stock_alerts:number;
}

export interface Work_Log
{
	id:number;
	break_seconds: number;
	date:string;
	disciplinary_actions:string | null;
	docking_pay:number;
	end_timestamp:string | null;
	extra_hours:number;
	hours:number;
	in_out_count: number;
	on_time:'YES'|'NO';
	total_payment:number;
	seconds_log:number | null;
	start_timestamp:string | null;
	updated:string;
	user_id:number;
	json_values:Record<string, string> | null;
}
export interface Workshift
{
	sun_start :string | null;
	mon_start :string | null;
	tue_start :string | null;
	thu_start :string | null;
	wed_start :string | null;
	fri_start :string | null;
	sat_start :string | null;
	created:string;
	id:number;
	name:string;
	sun_hours:number | null;
	mon_hours:number | null;
	tue_hours:number | null;
	wed_hours:number | null;
	sat_hours:number | null;
	thu_hours:number | null;
	fri_hours:number | null;
	tolerance:number | null;
	updated:string;
}
export interface Work_log_rules
{
	id:number;
	store_id:number;
	json_rules:Record<string, string>;
}
export interface User_extra_fields
{
	id:number;
	user_id:number;
	json_fields:Record<string, string>;
}

export interface Account{
	id:number;
	balance:number;
	created:string;
	created_by_user_id:number;
	currency_id:string;
	updated:string;
	updated_by_user_id:number;
	user_id:number;
}

export interface Answer{
	id:number;
	answer_choice_id:number | null;
	answer_number:number | null;
	answer_text:string | null;
	question_id:number;
	response_id:number;
}

export interface Attribute{
	id:number;
	created_by_user_id:number;
	created:string;
	name:string;
	updated_by_user_id:number;
	updated:string;
}

export interface Ecommerce_Item{
	id:number;
	item_id:number;
	ecommerce_id:number;
	created:string;
	updated:string;
	created_by_user_id:number;
	updated_by_user_id:number;
}

export interface Ecommerce_User{
	id:number;
	ecommerce_id:number;
	user_id:number;
	created:string;
	type:'ECOMMERCE_ADMIN'|'ROLE_ADMIN'|'ROLE_USER';
	updated:string;
	created_by_user_id:number | null;
	updated_by_user_id:number | null;
}

export interface Ecommerce_Item_Role{
	id:number;
	created_by_user_id:number;
	created:string;
	ecommerce_item_id:number;
	role_id:number;
	updated:string;
	updated_by_user_id:number;
}

export interface Profile {
  id: number;
  ecommerce_id: number;
  name: string;
  created: string;
  updated: string;
  created_by_user_id: number;
  updated_by_user_id: number;
}

export interface Labels{
	id:number;
	store:string;
	production_area:string;
	ingredients:string;
	created:string;
	updated:string;
}

export interface Ledger{
	id:number;
	account_id:number;
	amount:number;
	created:string;
	created_by_user_id:number;
	currency_id:string;
	description:string | null;
	final_balance:number;
	ledger_category_id:number;
	order_id:number | null;
	payment_id:number | null;
	previous_balance:number;
	source_document_id:string | null;
	source_document_type:string | null;
	transaction_type:'DEBIT'|'CREDIT';
	updated:string;
	updated_by_user_id:number;
}

export interface Ledger_Category{
	id:number;
	created:string;
	created_by_user_id:number;
	description:string | null;
	name:string;
	updated:string;
	updated_by_user_id:number;
}

export interface Pharos_Credentials{
	id:number;
	created_by_user_id:number;
	created:string;
	endpoint:string;
	name:string;
	password:string;
	merchant_code:string;
	terminal_code:string;
	updated_by_user_id:number;
	updated:string;
	user:string;
}

export interface Pharos_Payment_Request{
	id:number;
	pharos_credentials_id:number;
	created_by_user_id:number;
	amount:number;
	created:string;
	currency_id:string;
	merchant_code:string;
	order_id:number | null;
	terminal_code:string;
	transaction_uuid:string;
	response:string | null;
	updated_by_user_id:number;
	updated:string;
}

export interface Production_User{
	id:number;
	production_id:number;
	user_id:number;
	price:number;
	currency_id:string;
	created:string;
	updated:string;
	created_by_user_id:number;
	updated_by_user_id:number;
}

export interface Question{
	id:number;
	created:string;
	form_id:number;
	help:string | null;
	priority:number;
	question:string;
	type:'text'|'textarea'|'multiple_choice'|'rating'|'ranking'|'date'|'number'|'tel';
	required:number | null;
	updated:string;
}

export interface Question_Choice{
	id:number;
	question_id:number;
	choice_text:string | null;
	choice_value:number | null;
}

export interface Quote_Request{
	id:number;
	quote_id:number | null;
	user_id:number;
	email:string;
}

export interface Response{
	id:number;
	created:string;
	created_by_user_id:number;
	form_id:number;
	respondent_identifier:string | null;
	title:string | null;
	updated:string;
	updated_by_user_id:number;
	user_id:number | null;
}

export interface Storage_Serial{
	id:number;
	created_by_user_id:number;
	created:string;
	serial_id:number;
	sort_weight:number;
	storage_id:number;
	updated_by_user_id:number;
	updated:string;
}

export interface Storage_Type{
	id:number;
	created_by_user_id:number;
	created:string;
	name:string | null;
	sort_weight:number;
	updated_by_user_id:number;
	updated:string;
}

export interface User_Attachment{
	id:number;
	alias:string;
	attachment_id:number;
	created_by_user_id:number;
	created:string;
	status:'ACTIVE'|'DELETED';
	updated_by_user_id:number;
	updated:string;
	user_id:number;
}

export interface Withdrawal{
	id:number;
	amount:number;
	created_by_user_id:number;
	created:string;
	currency:string;
	device_time:string;
	note:string;
	updated:string;
}
