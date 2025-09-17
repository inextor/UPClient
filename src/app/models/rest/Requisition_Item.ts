export interface Requisition_Item{

	aproved_status:'NOT_APPROVED'|'APPROVED';
	status:'ACTIVE'|'DELETED';
  created:string;
  id:number;
  item_id:number;
  qty:number;
  requisition_id:number;
  updated:string;
}