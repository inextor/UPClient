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

	ngOnInit(): void
	{
		this.route.queryParamMap.subscribe((params) =>
		{
			let page = 1;
			let page_size = 10;

			if( params.has('page') )
			{
				this.current_page =	parseInt(params.get('page') as string);
			}

			let url = this.rest.base_url+'/item_info.php?limit='+page_size+'&page='+page;

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
}
