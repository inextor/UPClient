import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { GetEmpty } from '../../models/GetEmpty';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent extends BaseComponent implements OnInit {
  user: any = GetEmpty.user();
  address: any = GetEmpty.address();
  profiles: any[] = [];

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.rest.get('/profile.php', {}).then((response: any) => {
      this.profiles = response.data;
    }).catch(error => {
      this.showError(error);
    });
  }

  onSubmit() {
    this.is_loading = true;
    this.rest.post('/users', { user: this.user, address: this.address }).then((response: any) => {
      this.is_loading = false;
      this.router.navigate(['/list-ecommerce-user']);
    }).catch(error => {
      this.is_loading = false;
      this.showError(error);
    });
  }
}
