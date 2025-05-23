import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

import { RestService } from '../../services/rest.service';
import { HeaderComponent } from "../../components/header/header.component";
@Component({
	selector: 'app-main',
	standalone: true,
	imports: [CommonModule, HeaderComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.css'
})
export class MainComponent extends BaseComponent
{
	item_info_list: any[] = [];
    current_page:number = 1;
    total_pages: number = 1;
    page_numbers: number[] = [];

	ngOnInit(): void
	{
		this.route.queryParamMap.subscribe((params) =>
		{
			let page_size = 10;
			if( params.has('page') )
			{

				this.current_page =	parseInt(params.get('page') as string);
			}

			let url = this.rest.base_url+'/item_info.php?limit='+page_size+'&page='+this.current_page;

			fetch(url)
			.then((response:any) =>
			{
				return response.json();
			})
			.then((response) =>
			{
				this.total_pages = response.total/100+(response.total%100?1:0);
				this.item_info_list = response.data;
			})
			.catch((error) =>
			{
				console.log(error);
			});
		});


	}

	public addToCart(item_id: any): void
	{
		this.rest.addToCart(item_id, 1);
	}

	getPageNumbers(): number[] {
		return Array.from({ length: this.total_pages }, (_, i) => i + 1);
	  }


	goToPage(page: number) {
		if (page >= 1 && page <= this.total_pages) {
		  this.current_page = page;
		  this.fetchProducts(); // Call the function to fetch products for the new page
		}
	  }

	  previousPage() {
		if (this.current_page > 1) {
		  this.goToPage(this.current_page - 1);
		}
	  }

	  nextPage() {
		if (this.current_page < this.total_pages) {
		  this.goToPage(this.current_page + 1);
		}
	  }

	  fetchProducts() {
		let page_size = 10;
		let url = this.rest.base_url + '/item_info.php?limit=' + page_size + '&page=' + this.current_page;

		fetch(url)
		  .then((response: any) => {
			return response.json();
		  })
		  .then((response) => {
			this.total_pages = response.total / 100 + (response.total % 100 ? 1 : 0);
			this.page_numbers = this.getPageNumbers();
			this.item_info_list = response.data;
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  }
}
