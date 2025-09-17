import { Component, OnInit, Input, Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { RestService } from '../../services/rest.service';
import { AttachmentInfo } from '../../models/models';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attachment-uploader',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attachment-uploader.component.html',
  styleUrls: ['./attachment-uploader.component.css']
})
export class AttachmentUploaderComponent implements OnInit, OnChanges {

	constructor(public rest:RestService) { }

	@Input() attachment_id?:number;
	@Input() image?:number;
	@Input() default_message:string = 'Add File Attachment';
	@Output() attachmentChange= new EventEmitter<AttachmentInfo>();
	@Output() attachment_idChange = new EventEmitter<number>();
	@Input() displayUploadedAttachmentName:boolean = true;
	@Input() containerClasses:any = { 'avatar': true, 'avatar-sm': true };
	@Input() imageClasses:any ={'avatar-img': true};
	@Input() multiple:boolean = false;

	filename?:string;
	file_id = '_attachment_uploader_'+Date.now();

	ngOnInit():void
	{

	}

	uploadAttachment(evt:any)
	{
		if (evt.target.files.length == 0)
		{
			this.rest.showError('No se subio nada el archivo');
			return;
		}

		let file = evt.target.files[0];

		this.uploadFile(file).then((attachmentInfo:AttachmentInfo)=>
		{
			this.filename	= attachmentInfo.attachment.original_filename || '';
			this.attachment_id	= attachmentInfo.attachment.id || undefined;

			this.attachmentChange.emit( attachmentInfo );
			this.attachment_idChange.emit( attachmentInfo.attachment.id || undefined );

			this.rest.showSuccess('Archivo subido correctamente');
		})
		.catch((error:any)=>
		{
			this.rest.showError(error);
		});
	}


	uploadFile(file:File,is_private:boolean=false):Promise<AttachmentInfo>
	{
		let form_data = new FormData();
		form_data.append('file', file, file.name);

		return this.rest.postForm('/attachment.php', form_data);
	}

	ngOnChanges(props:SimpleChanges)
	{
	}
}
