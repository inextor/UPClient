import { Component } from '@angular/core';
import { BaseComponent } from '../../pages/base/base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent extends BaseComponent {
}
