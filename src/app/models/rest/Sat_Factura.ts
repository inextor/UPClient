export interface Sat_Factura{

	cancelado_por_sat:'YES'|'NO';
	type:'NORMAL'|'COMPLEMENTO_PAGO'|'POR_PERIODO'|'DESCONOCIDO';
  billing_data_id:number | null;
  created:string;
  created_by_user_id:number | null;
  folio:string | null;
  id:number;
  order_id:number | null;
  payment_id:number | null;
  pdf_attachment_id:number | null;
  request:any;
  serie:string | null;
  solicitud_cancelacion_sat_timestamp:string | null;
  system_cancelled_timestamp:string | null;
  transaccion:string | null;
  updated:string;
  updated_by_user_id:number | null;
  uuid:string | null;
  xml_attachment_id:number | null;
}