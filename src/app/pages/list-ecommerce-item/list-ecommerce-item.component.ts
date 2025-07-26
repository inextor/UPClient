import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-list-ecommerce-item',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './list-ecommerce-item.component.html',
  styleUrls: ['./list-ecommerce-item.component.css']
})
export class ListEcommerceItemComponent implements OnInit {
  item_info_list: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.rest.getItems({}).then(response => {
      this.item_info_list = response.data;
    });
  }
}