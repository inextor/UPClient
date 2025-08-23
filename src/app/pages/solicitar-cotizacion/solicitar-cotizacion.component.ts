import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttachmentUploaderComponent } from '../../components/attachment-uploader/attachment-uploader.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-solicitar-cotizacion',
  standalone: true,
  imports: [CommonModule, FormsModule, AttachmentUploaderComponent, HeaderComponent],
  templateUrl: './solicitar-cotizacion.component.html',
  styleUrls: ['./solicitar-cotizacion.component.css']
})
export class SolicitarCotizacionComponent extends BaseComponent {
  public note: string = '';
  public attachment_id: number | null = null;

  ngOnInit(): void {

  }
  onAttachmentIdChange(id: number) {
    this.attachment_id = id;
  }
  solicitarCotizacion() {
    this.is_loading = true;
    this.rest.requestQuote({ note: this.note, items: [], attachment_id: this.attachment_id }).then(response => {
      this.is_loading = false;
      this.showSuccess('Cotización solicitada con éxito');
      this.router.navigate(['/main']);
    }).catch(error => {
      this.is_loading = false;
      this.showError(error);
    });
  }
}
