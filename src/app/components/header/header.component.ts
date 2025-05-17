import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../pages/base/base.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent extends BaseComponent
 implements OnInit {
  ngOnInit(): void {
    console.log('rest.bearer:', this.rest.bearer);
  }
}

