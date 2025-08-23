import { Attachment } from "./RestModels";

export interface File_Type {
  id: number;
  image_id: number;
  // Add other properties of File_Type if known
}

export interface AttachmentInfo {
  attachment: Attachment;
  file_type: File_Type;
  // Add other properties of AttachmentInfo if known
}
