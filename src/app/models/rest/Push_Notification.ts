export interface Push_Notification{

	priority:'normal'|'high';
	read_status:'PENDING'|'READ';
  app_path:string | null;
  body:string;
  created:string;
  icon_image_id:number | null;
  id:number;
  link:string | null;
  object_id:string | null;
  object_type:string;
  push_notification_id:string | null;
  response:string | null;
  sent_status:number | null;
  title:string;
  updated:string;
  user_id:number;
}