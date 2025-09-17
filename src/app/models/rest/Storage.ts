export interface Storage{

  created:string;
  created_by_user_id:number;
  id:number;
  level:number;
  name:string | null;
  parent_storage_id:number | null;
  storage_type_id:number;
  store_id:number;
  updated:string;
  updated_by_user_id:number;
}