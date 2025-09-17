export interface Pallet_Content{

	status:'ACTIVE'|'REMOVED';
  box_id:number;
  created:string;
  created_by_user_id:number | null;
  id:number;
  pallet_id:number;
  updated:string;
  updated_by_user_id:number | null;
}