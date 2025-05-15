import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injector } from '@angular/core';
import { RestService } from '../../services/rest.service';

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
export class BaseComponent
{
    constructor(public injector: Injector) {
      this.rest = this.injector.get(RestService);
    }

    showError(error: any)
    {
        console.log(error);
    }

    showSuccess(message: string)
    {
        console.log(message);
    }
}
