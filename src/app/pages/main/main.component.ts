import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

import { CurrencyPipe } from '@angular/common';
import { RestService } from '../../services/rest.service';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';
import { Profile } from '../../models/RestModels';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [HeaderComponent, RouterLink, CurrencyPipe],
	templateUrl: './main.component.html',
	styleUrl: './main.component.css'
})
export class MainComponent extends BaseComponent
{
	item_info_list: any[] = [];
	current_page:number = 1;
	total_pages: number = 1;
	page_numbers: number[] = [];
	ecommerce_user: any = {};
	profiles:Profile[] = [];

	main_color: string = '#ffffff';
	font_color: string = '#000000';
	profile_id: number | null = null;

	ngOnInit(): void
	{
		document.title = 'uniformesprofesionales.mx';
		this.ecommerce_user = this.rest.ecommerce_user;

		if (!this.rest.bearer)
		{
			this.router.navigate(['/login']);
			return;
		}
		else
		{
			document.title = this.rest.ecommerce.name;

			document.body.style.setProperty('--main-color', this.rest.ecommerce.color || '#ffffff');
			this.main_color = this.rest.ecommerce.color || '#ffffff';
			document.body.style.setProperty('--font-color', this.rest.ecommerce.font_color || '#000000');
			document.body.style.setProperty('--bs-body-bg', '#F5F5F5');
			this.font_color = this.rest.ecommerce.font_color || '#000000';
		}

		this.route.queryParamMap.subscribe((params) =>
		{
			const profile_id = params.get('profile_id');;

			if (profile_id || this.ecommerce_user.type != 'ECOMMERCE_ADMIN')
			{
				this.profile_id = parseInt(profile_id as string);
				this.fetchProducts();
			}
			else
			{
				this.rest.getProfiles().then(response=>
				{
					this.profiles = response.data;
				});
				this.item_info_list = [];
			}
		});
	}

	onSelectProfile(profile:Profile)
	{
		this.router.navigate(['/main'], { queryParams: { profile_id: profile.id } });
	}

	fetchProductsByProfile(profile_id: number)
	{
		// This part is similar to what is in list-ecommerce-item.component.ts
		this.rest.getEcommerceItemProfiles({ profile_id: profile_id, limit: 99999 })
			.then((response:any) => {
				const ecommerce_item_ids = response.data.map((item: any) => item.ecommerce_item_id);
				if (ecommerce_item_ids.length === 0) {
                    this.item_info_list = [];
					return Promise.reject('No items for this profile'); // Stop the chain
				}
				return this.rest.getEcommerceItems({ 'id,': ecommerce_item_ids.join(','), limit: 99999 });
			})
			.then((response:any) => {
				const item_ids = response.data.map((item: any) => item.item_id);
				if (item_ids.length === 0) {
					this.item_info_list = [];
					return Promise.reject('No items for this profile'); // Stop the chain
				}
				return this.rest.getItems({ 'id,': item_ids.join(','), limit: 99999 });
			})
			.then((response:any) => {
				this.item_info_list = response.data.map((item_info: any) => {
					let image_url = item_info.item.image_id ? this.rest.base_url + '/image.php?id=' + item_info.item.image_id : null;
					return {...item_info, image_url};
				});
			})
			.catch(error => {
                if (error !== 'No items for this profile') {
				    this.showError(error);
                }
			});
	}

	public addToCart(item_id: any): void
	{
		this.rest.addToCart(item_id, 1);
	}

	getPageNumbers(): number[]
	{
		const pageNumbers: number[] = [];
		const totalPages = this.total_pages;
		const currentPage = this.current_page;
		const maxPagesToShow = 5; // You can adjust this number

		if (totalPages <= maxPagesToShow) {
			// Show all pages if total pages are within the limit
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			// Always show the first page
			pageNumbers.push(1);

			// Show pages around the current page
			const start = Math.max(2, currentPage - Math.floor((maxPagesToShow - 3) / 2));
			const end = Math.min(totalPages - 1, currentPage + Math.ceil((maxPagesToShow - 3) / 2));

			if (start > 2) {
				pageNumbers.push(-1); // Placeholder for ellipsis
			}

			for (let i = start; i <= end; i++) {
				pageNumbers.push(i);
			}

			// Always show the last page
			if (end < totalPages - 1) {
				pageNumbers.push(-1); // Placeholder for ellipsis
			}
			if (end < totalPages) {
				pageNumbers.push(totalPages);
			}
		}

		return pageNumbers;
		}


	goToPage(page: number)
	{
		if (page >= 1 && page <= this.total_pages)
		{
			this.current_page = page;
			this.fetchProducts(); // Call the function to fetch products for the new page
		}
	}

	previousPage()
	{
		if (this.current_page > 1)
		{
			this.goToPage(this.current_page - 1);
		}
	}

	nextPage()
	{
		if (this.current_page < this.total_pages)
		{
			this.goToPage(this.current_page + 1);
		}
	}

	fetchProducts():void
	{
		let page_size = 10;

		let params = this.rest.getUrlParams
		({
			limit: page_size,
			page: this.current_page-1,
			profile_id: this.profile_id,
			ecommerce_id: this.rest.ecommerce.id
		});

		this.rest.getItems(params)
		.then((response: any) =>
		{
			this.total_pages = response.total / 100 + (response.total % 100 ? 1 : 0);
			this.page_numbers = this.getPageNumbers();

			this.item_info_list = response.data
			.map((item_info:any)=>
			{
				let image_url = item_info.item.image_id ? this.rest.base_url + '/image.php?id=' + item_info.item.image_id : null;
				return {...item_info, image_url};
			});
		})
		.catch((error) =>
		{
			this.showError(error);
		});
	}
}
