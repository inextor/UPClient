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
  public nombre: string = '';
  public correo: string = '';
  public telefono: string = '';
  public descripcion: string = '';
  public cantidad: number | null = null;
  public fecha_entrega: string = '';
  public attachment_id: number | null = null;

  ngOnInit(): void {

  }
  onAttachmentIdChange(id: number) {
    this.attachment_id = id;
  }
  solicitarCotizacion() {
    this.is_loading = true;

    const formData = new FormData();
    formData.append('name', this.nombre);
    formData.append('email', this.correo);
    formData.append('phone', this.telefono);

    let comments = `Descripción: ${this.descripcion}\nCantidad: ${this.cantidad}\nFecha de Entrega: ${this.fecha_entrega}`;
    formData.append('comments', comments);

    // Not sending the file as per user request

    this.rest.sendQuoteForm(formData).then(response => {
      this.is_loading = false;
      this.showSuccess('Cotización solicitada con éxito');
      this.router.navigate(['/main']);
    }).catch(error => {
      this.is_loading = false;
      this.showError(error);
    });
  }
}
