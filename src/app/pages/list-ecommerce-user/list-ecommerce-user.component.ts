import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { User } from '../../models/RestModels';

@Component({
  selector: 'app-list-ecommerce-user',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './list-ecommerce-user.component.html',
  styleUrls: ['./list-ecommerce-user.component.css']
})
export class ListEcommerceUserComponent implements OnInit {
  user_list: User[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.rest.post('/users',{}).then(response => {
      this.user_list = response.data;
    });
  }
}