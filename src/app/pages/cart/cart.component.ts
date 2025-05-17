import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported
import { RestService } from '../../services/rest.service'; // Import RestService
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here if you use directives like *ngFor
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit { // Implement OnInit

  public cart_items: any[] = [ // Add this line
 ];

  constructor(public rest: RestService) { } // Inject RestService

  public get grandTotal(): number {
    return this.cart_items.reduce((total, item) => {
      const quantity = item.quantity || 0;
      const price = item.price || 0;
      return total + (quantity * price);
    }, 0);
  }

  ngOnInit(): void { // Implement ngOnInit
    this.fetchCartItems();
  }

  public fetchCartItems() {
    // Assign a sample array of fictitious cart items
    this.cart_items = [
      { name: 'Fictitious Product 1', quantity: 2, price: 10.50 },
      { name: 'Fictitious Product 2', quantity: 1, price: 30.00 },
      { name: 'Fictitious Product 3', quantity: 3, price: 5.75 }
    ];
  }
  // Add other methods as needed (e.g., to update quantity, remove item)

  public placeOrder() {
    console.log('Placing order...');
  }
}