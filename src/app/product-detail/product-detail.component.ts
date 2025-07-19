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
	images: any[] = [];
	main_color: string = '#ffffff';
	font_color: string = '#000000';

	constructor(private route: ActivatedRoute, private rest: RestService) { }

	ngOnInit(): void {
		this.main_color = this.rest.ecommerce.color || '#ffffff';
		this.font_color = this.rest.ecommerce.font_color || '#000000';

		this.route.paramMap.subscribe(params => {
			const id = params.get('item_id');
			if (id) {
				this.item_id = +id;
				this.fetchProductDetails();
				this.fetchProductImages();
			}
		});
	}

	fetchProductDetails(): void {
		console.log('Fetching product details...', this.item_id);
		if (this.item_id) {
			const params = this.rest.getUrlParams({ 'id,': this.item_id });
			this.rest.getItems(params)
				.then((response: any) => {
					if (response.data && response.data.length > 0) {
						this.product = response.data[0];
						if (this.product.item.image_id) {
							this.product.image_url = this.rest.base_url + '/image.php?id=' + this.product.item.image_id;
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

	fetchProductImages(): void {
		if (this.item_id) {
			// Assuming you have a method in your rest.service to fetch images
			// You might need to create it if it doesn't exist.
			// For now, let's construct the URL directly.
			const params = this.rest.getUrlParams({ 'item_id': this.item_id });
			fetch(`${this.rest.base_url}/item_image.php?${params.toString()}`)
				.then(response => response.json())
				.then(data => {
					this.images = data.data.map((image: any) => {
						return {
							id: image.id,
							url: `${this.rest.base_url}/image.php?id=${image.id}`
						};
					});
				})
				.catch(error => console.error('Error fetching product images:', error));
		}
	}

	addToCart(item_id: number): void {
		this.rest.addToCart(item_id, 1);
	}
}
