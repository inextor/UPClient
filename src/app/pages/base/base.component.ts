import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      base works!
    </p>
  `,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

}