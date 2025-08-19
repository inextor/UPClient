import { Component } from '@angular/core';
import { ErrorMessage } from '../../models/ErrorMessage';
import { RestService } from '../../services/rest.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.css'
})
export class ToastMessageComponent {

	constructor(public rest: RestService) { }

	ngOnInit(): void {
		this.subs = this.rest.error_observable.subscribe((error) => {
			if (error.message)
				this.addError(error);
		});
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	subs !: Subscription;
	errors: ErrorMessage[] = [];

	addError(error: ErrorMessage) {
		this.errors.push(error);
		console.log('errors are ', this.errors);
		if (error.auto_hide)
			setTimeout(() => this.removeError(error), 5000);
	}

	removeError(error: ErrorMessage) {
		let index = this.errors.indexOf(error);
		if (index > -1)
			this.errors.splice(index, 1);
	}

}
