export interface Quote{

	approved_status:'PENDING'|'SENT'|'DECLINED'|'APPROVED'|'CANCELLED';
  approved_time:string | null;
  attachment_id:number | null;
  client_user_id:number | null;
  created:string;
  created_by_user_id:number;
  currency_id:string;
  email:string;
  id:number;
  name:string;
  note:string | null;
  phone:string;
  price_type_id:number | null;
  sent_timestamp:string | null;
  store_id:number;
  sync_id:string;
  tax_percent:number;
  updated:string;
  valid_until:string | null;
}