export interface Printer{

  created:string;
  created_by_user_id:number;
  description:number;
  device:string | null;
  id:number;
  ip_address:string | null;
  name:string;
  port:number | null;
  protocol:string;
  store_id:number | null;
  updated:string;
  updated_by_user_id:number;
}