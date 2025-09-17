export interface Bank_Account{

	is_a_payment_method:'NO'|'YES';
  account:string;
  alias:string;
  bank:string;
  bank_rfc:string | null;
  created:string;
  currency:string;
  email:string | null;
  id:number;
  name:string;
  updated:string;
  user_id:number | null;
}