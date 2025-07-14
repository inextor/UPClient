import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  item_id: number | null = null;
  product: any = null;

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('item_id');
      if (id) {
        this.item_id = +id;
        this.fetchProductDetails();
      }
    });
  }

  fetchProductDetails(): void {
    if (this.item_id) {
      const params = this.rest.getUrlParams({ 'ids,': this.item_id });
      this.rest.getItems(params)
        .then((response: any) => {
          if (response.data && response.data.length > 0) {
            this.product = response.data[0];
            if (this.product.item.image_id) {
              this.product.imageUrl = this.rest.base_url + '/image.php?id=' + this.product.item.image_id;
            }
            console.log('Product details:', this.product);
          } else {
            console.log('Product not found');
          }
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    }
  }

  addToCart(item_id: number): void {
    this.rest.addToCart(item_id, 1);
  }
}
