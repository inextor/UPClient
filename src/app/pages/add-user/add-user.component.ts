import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { GetEmpty } from '../../models/GetEmpty';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: any = GetEmpty.user();
  address: any = GetEmpty.address();

  constructor(private rest: RestService) { }

  onSubmit() {
    console.log('User:', this.user);
    console.log('Address:', this.address);
    // Here you can call your service to save the user data
    this.rest.post('/users', { user: this.user, address: this.address }).then((response: any) => {
      console.log('response', response);
    });
  }
}
