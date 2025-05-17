import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported
import { RestService } from '../../services/rest.service'; // Import RestService
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component'; // Import HeaderComponent

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent], // Add CommonModule here if you use directives like *ngFor
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent extends BaseComponent implements OnInit { // Implement OnInit

  public cart_items: any[] = [ ];



  public get grandTotal(): number
  {
    return this.cart_items.reduce((total, item) =>
    {
      const quantity = item.quantity || 0;
      const price = item.price || 0;
      return total + (quantity * price);
    }, 0);
  }

  ngOnInit(): void { // Implement ngOnInit
    this.fetchCartItems();
  }

  public fetchCartItems()
  {

	let reduce_f = (p:any,c:any)=>
	{
		p.push(c);
		return p;
	}

	let cart_items = this.rest.getCartItems();
    let item_ids = cart_items.reduce(reduce_f,[]).join(',');

    let params = this.rest.getUrlParams({ 'id,': item_ids })

	this.rest.getItems(params)
	.then((response) =>
	{
		this.cart_items = response.map((item_info) =>
		{
			let cart_item = cart_items.find((item) => item.item_id === item_info.item.id);
			return {...cart_item, ...item_info};
		});
	})



    // Assign a sample array of fictitious cart items
    this.cart_items = [
      { name: 'Fictitious Product 1', quantity: 2, price: 10.50 },
      { name: 'Fictitious Product 2', quantity: 1, price: 30.00 },
      { name: 'Fictitious Product 3', quantity: 3, price: 5.75 }
    ];
  }
  // Add other methods as needed (e.g., to update quantity, remove item)

  public placeOrder()
  {
    console.log('Placing order...');
  }
}
