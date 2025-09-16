import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { Product } from '../models/RestModels';
import { BaseComponent } from '../pages/base/base.component';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent extends BaseComponent implements OnInit {
	item_id: number | null = null;
	product: Product | null = null;
	mainImage: string | undefined;
	main_color: string = '#ffffff';
	font_color: string = '#000000';
	attachments: any[] = [];


	ngOnInit(): void {
		this.main_color = this.rest.ecommerce.color || '#ffffff';
		this.font_color = this.rest.ecommerce.font_color || '#000000';

		this.route.paramMap.subscribe(params =>
		{
			const id = params.get('item_id');
			if (id)
			{
				this.item_id = +id;
				this.fetchProductDetails();
			}
		});
	}

	fetchProductDetails(): void {
		if (this.item_id) {
			const params = this.rest.getUrlParams({ 'id,': this.item_id });
			this.rest.getItems(params)
				.then((response: any) => {
					if (response.data && response.data.length > 0) {
						this.product = response.data[0];

						if (this.product && this.product.item.image_id)
						{
							this.product.image_url = this.rest.base_url + '/image.php?id=' + this.product.item.image_id;
							this.mainImage = this.product.image_url;

							if( this.product.item.image_id )
							{
								this.product.images = [ { id: this.product.item.image_id, url: this.product.image_url } ];
							}
						}

						this.fetchProductImages();
						this.fetchEcommerceItem();
						this.fetchAttachments();
					} else {
						this.showError('Product not found');
					}
				})
				.catch(error => {
					this.showError(error);
				});
		}
	}

	fetchAttachments(): void {
		if (this.item_id) {
			this.rest.getItemAttachments({ item_id: this.item_id })
				.then((response: any) => {
					this.attachments = response.data.map((attachment: any) => {
						return {
							...attachment,
							url: this.rest.base_url + '/attachment.php?id=' + attachment.attachment_id
						};
					});
				})
				.catch(error => {
					this.showError(error);
				});
		}
	}

	fetchEcommerceItem(): void {
		if (this.item_id) {
			const params = this.rest.getUrlParams({ 'item_id': this.item_id, 'ecommerce_id': this.rest.ecommerce.id });
			this.rest.getEcommerceItems(params)
				.then((response: any) => {
					if (response.data && response.data.length > 0 && this.product) {
						this.product.ecommerce_item = response.data[0];
					}
				})
				.catch(error => {
					this.showError(error);
				});
		}
	}

	fetchProductImages(): void {
		if (this.item_id) {

			const params = this.rest.getUrlParams({ 'item_id': this.item_id });
			fetch(`${this.rest.base_url}/item_image.php?${params.toString()}`)
				.then(response => response.json())
				.then(data => {
					if( this.product )
					{
						this.product.images = data.data.map((image: any) => {
							return {
								id: image.id,
								url: `${this.rest.base_url}/image.php?id=${image.image_id}`
							};
						});
					}
				})
				.catch(error => this.showError(error));
		}
	}

	setMainImage(image: string): void {
		this.mainImage = image;
	}

	addToCart(item_id: number): void {
		this.rest.addToCart(item_id, 1);
	}
}
