export interface Shipping_Item{

  box_id:number | null;
  created:string;
  id:number;
  item_id:number | null;
  pallet_id:number | null;
  qty:number;
  received_qty:number;
  requisition_item_id:number | null;
  serial_number:string | null;
  shipping_id:number;
  shrinkage_qty:number;
  updated:string;
}