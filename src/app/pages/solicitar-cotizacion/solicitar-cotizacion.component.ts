import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solicitar-cotizacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitar-cotizacion.component.html',
  styleUrls: ['./solicitar-cotizacion.component.css']
})
export class SolicitarCotizacionComponent extends BaseComponent {
  public note: string = '';

  override ngOnInit(): void {
    super.ngOnInit();
  }

  solicitarCotizacion() {
    this.is_loading = true;
    this.rest.requestQuote({ note: this.note, items: [] }).then(response => {
      this.is_loading = false;
      this.showSuccess('Cotización solicitada con éxito');
      this.router.navigate(['/main']);
    }).catch(error => {
      this.is_loading = false;
      this.showError(error);
    });
  }
}