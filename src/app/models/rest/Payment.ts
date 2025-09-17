export interface Payment{

	facturado:'YES'|'NO';
	status:'ACTIVE'|'DELETED';
	type:'income'|'expense';
	sync_uuid:string | null;
	cancellation_reason:string | null;
	cancellation_timestamp:string | null;
	cancelled_by_user_id:number | null;
	change_amount:number;
	concept:string | null;
	created:string;
	created_by_user_id:number | null;
	currency_id:string;
	exchange_rate:number;
	id:number;
	paid_by_user_id:number | null;
	payment_amount:number;
	received_amount:number;
	sat_factura_id:number | null;
	sat_pdf_attachment_id:number | null;
	sat_uuid:string | null;
	sat_xml_attachment_id:number | null;
	store_id:number | null;
	sync_id:string | null;
	tag:string | null;
	updated:string;
}
