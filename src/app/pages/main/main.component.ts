import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent extends BaseComponent
{
	item_info_list:any[] = [];

		ngOnInit(): void
		{

			fetch('https://uniformesprofesionales.integranet.xyz/api/item_info.php?limit=20')
			.then((response)=>
			{
				return response.json();
			})
			.then((response)=>
			{
				this.item_info_list = response.data;
			});
		}
  }
