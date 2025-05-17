import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [], // Add CommonModule here if you use directives like *ngFor
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit { // Implement OnInit

  public cart_items: any[] = []; // Add this line

  constructor() { }

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
    // Fetch cart data and populate cart_items
    // This is where you'll add your logic to get cart data
    // Example: this.cartItems = yourCartService.getCartItems();
  }

  // Add other methods as needed (e.g., to update quantity, remove item)
}