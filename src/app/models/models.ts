import { Address } from "./rest/Address";
import { Attachment } from "./rest/Attachment";
import { Bank_Movement } from "./rest/Bank_Movement";
import { Bank_Movement_Order } from "./rest/Bank_Movement_Order";
import { Category } from "./rest/Category";
import { Delivery_Assignment } from "./rest/Delivery_Assignment";
import { Ecommerce_Item } from "./rest/Ecommerce_Item";
import { Ecommerce_User } from "./rest/Ecommerce_User";
import { File_Type } from "./rest/File_Type";
import { Item } from "./rest/Item";
import { Item_Exception } from "./rest/Item_Exception";
import { Item_Option } from "./rest/Item_Option";
import { Item_Option_Value } from "./rest/Item_Option_Value";
import { Offer } from "./rest/Offer";
import { Order } from "./rest/Order";
import { Order_Item } from "./rest/Order_Item";
import { Order_Item_Exception } from "./rest/Order_Item_Exception";
import { Order_Item_Serial } from "./rest/Order_Item_Serial";
import { Payment } from "./rest/Payment";
import { Period } from "./rest/Period";
import { Price } from "./rest/Price";
import { Price_Type } from "./rest/Price_Type";
import { Process } from "./rest/Process";
import { Production } from "./rest/Production";
import { Production_Area } from "./rest/Production_Area";
import { Purchase } from "./rest/Purchase";
import { Requisition } from "./rest/Requisition";
import { Requisition_Item } from "./rest/Requisition_Item";
import { Reservation } from "./rest/Reservation";
import { Reservation_Item } from "./rest/Reservation_Item";
import { Reservation_Item_Serial } from "./rest/Reservation_Item_Serial";
import { Return_Assignment } from "./rest/Return_Assignment";
import { Serial } from "./rest/Serial";
import { Serial_Image } from "./rest/Serial_Image";
import { Shipping } from "./rest/Shipping";
import { Shipping_Item } from "./rest/Shipping_Item";
import { Stock_Record } from "./rest/Stock_Record";
import { Store } from "./rest/Store";
import { Task } from "./rest/Task";
import { User } from "./rest/User";


export interface UserBalance extends User{
	balance: number;
	agent_name: string;
	installment_expired_qty:number;
	installment_expired_amount:number;
	installment_expired_since:string;
	installment_last_payment:string;
	last_payment_timestamp:string;
}

export interface AttachmentInfo {
	attachment: Attachment;
	file_type: File_Type;
	// Add other properties of AttachmentInfo if known
}

interface CSerial extends Serial
{
	store_name?:string;
}
export interface SearchTerm
{
	term: string;
	position: number;
	item_id: number;
}
export interface SerialInfo
{
	serial:CSerial;
	images:Serial_Image[];
	order_item_serial?:Order_Item_Serial;
	selected: boolean; //Just a help variable used in lists
}

export interface OrderItemInfo extends ItemInfo
{
	order_item:Order_Item; //Obligatorio
	created:Date;
	//serials:SerialInfo[];
	order_item_exceptions: Order_Item_Exception[];
	serials_string:string;
	commanda_type_id:number | null;
	draw_separator?:boolean;//Not in backend
	category_zero: number | null;
}

export interface OrderItemStructureInfo extends OrderItemInfo
{
	childs:OrderItemInfo[];
	total_options:number;
	total_cost:number;
}

export interface OrderInfo
{
	period?: Period;
	id?:number; //en offline
	order: Order; //Obligatorio
	items: OrderItemInfo[]; //Obligatorio
//	structured_items: OrderItemStructureInfo[]; //Obligatorio
//	resume_of_items?: OrderItemStructureInfo[];
	client: User | null;
	cashier: User | null;
	delivery_user: User | null;
	price_type: Price_Type;
	store: Store;
	purchase: Purchase | null;
	offers:Offer[];
}

export interface StructuredOrderInfo extends OrderInfo
{
	structured_items: OrderItemStructureInfo[]; //Obligatorio
}

export interface ProductionInfo
{
	user: User;
	production:Production;
	production_area: Production_Area | null;
	item:Item;
	category:Category | null;
}

export interface RequisitionItemInfo
{
	requisition_item:Requisition_Item;
	item: Item;
	category:Category | null;
}

export interface RequisitionInfo
{
	requisition:Requisition;
	items:RequisitionItemInfo[];
	required_by_store:Store;
	requested_to_store:Store|null;
	user:User;
	shipping:Shipping | null;
}


export interface SerialItemInfo
{
	serial_info:SerialInfo;
	item_info:ItemInfo;
}

export interface TaskInfo
{
	proccess	: Process;
	task		: Task;
	category	: Category | null;
	item		: Item | null;
	Order		: Order | null;
	OrderItem	: Order_Item | null;
	requisition	: Requisition | null;
	in_charge	: User | null;

}

export interface ShippingItemInfo
{
	item: Item;
	shipping_item:Shipping_Item;
	category:Category | null;
	available?:number;
}

export interface ShippingInfo
{
	shipping:Partial<Shipping>;
	items:Partial<ShippingItemInfo>[];
	//purchase:Purchase;
}
export interface SocketMessage
{
	type:string;
	store_id:number;
	order_id?:number;
	message?:string;
	id?:string | number;
}

export interface ReservationItemSerialInfo
{
	reservation_item_serial:Reservation_Item_Serial;
	serial:Serial;
}

export interface DeliveryAssignmentInfo
{
	delivery_assignment:Delivery_Assignment;
	user:User;
}

export interface ReturnAssignmentInfo
{
	return_assignment:Return_Assignment;
	user:User;
}

export interface ItemOptionValueInfo
{
	item_option_value: Item_Option_Value;
	item:Item;
	category?:Category;
}
export interface ItemOptionInfo
{
	item_option:Item_Option;
	values:ItemOptionValueInfo[];
}

export interface ItemInfo
{
    ecommerce_item: Ecommerce_Item | null;
    image_url: string | null;
	item:Item;
	category:Category | null;
	//product?:Product; //Category
	item_options:ItemOptionInfo[];
	//attributes?:Item_Attribute[];
	price?:Price;
	prices:Price[];
	records:Stock_Record[];
	stock_record?:Stock_Record;
	options:ItemOptionInfo[];
	exceptions:Item_Exception[];
	display_category?:boolean;
	serials:SerialInfo[];
	images:any[];
}

//export interface ItemInfo
//{
//	item:Item;
//	category:Category | null;
//	category_zero: number;
//	//product?:Product; //Category
//	//item_options?:ItemOptionInfo[];
//	//attributes?:Item_Attribute[];
//
//	price:Price | undefined;
//	prices:Price[];
//	//records:Stock_Record[];
//	//stock_record:Stock_Record;
//	options:ItemOptionInfo[];
//	exceptions:Item_Exception[];
//	display_category?:boolean;
//	//serials:SerialInfo[];
//}

export interface ItemStockInfo extends ItemInfo
{
	total:number;
}

export interface ReservationItemInfo
{
	reservation_item:Reservation_Item;
	category:Category | null;
	item:Item;
	serial_item:Item;
	serials:ReservationItemSerialInfo[];
	return_assignments:ReturnAssignmentInfo[];
	delivery_assignments:DeliveryAssignmentInfo[];
}

//
export interface ExtendedReservation extends Reservation
{
	_end:string;
	_to_schedule:number;
	_to_schedule_delivery :number;
	_to_schedule_return:number;

	_to_be_returned:number | null;
	_to_be_delivered:number|null;

	_to_assign:number|null
	_return_assignments:number|null
	_delivery_assignments:number|null;

	_count_items:number; //Numbero de articulos en reserva actualmente, En caso de que modificaron los articulos este valor se actualizara
	_total_qty:number; //De esos articualos, cuantos de reservaron, En caso de que modificaron los articulos este valor se actualizara
	//Ej, si rentaron Solo 10 baños, _count_ items = 1 y _total_qty_ = 10
	//Si rentaron 10 baños y 10 cajas de papel, _count_ items = 2 y _total_qty_ = 20
	_timestamp_next_dispatch_after: Date | null;
	_timestamp_next_delivery:Date | null;
	_timestamp_next_return:Date | null;
}

export interface ReservationInfo
{
	client_user: User | null;
	reservation:ExtendedReservation;
	items:ReservationItemInfo[]
	user:User | null;
	address:Address | null;
}

export interface MovementInfo
{
	bank_movement:Bank_Movement;
	bank_movement_orders:Bank_Movement_Order[];
}

export interface PaymentInfo
{
	payment:Payment;
	movements:MovementInfo[];
}

export interface CartItemInfo
{
	item_id: number;
	qty: number;
	item_info: any;
}


export interface EcommerceUserInfo {
		user: User;
		ecommerce_user: Ecommerce_User;
		address: Address;
}


export interface Product {
	item: {
		id: number;
		name: string;
		description: string;
		image_id?: number;
	};
	category?: {
		name: string;
	};
	prices: {
		price: number;
	}[];
	image_url?: string;
	images: { id: number; url: string }[];
	ecommerce_item?: any;
}
