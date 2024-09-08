import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  previewImage: string | ArrayBuffer | null = null;
  uploadedImage: File | null = null;

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedImage = file;

      const reader = new FileReader();
      reader.onload = e => this.previewImage = reader.result;
      reader.readAsDataURL(file);
    }
  }

  analyzeImage() {
    if (this.uploadedImage) {
      // Call backend API to analyze image (we'll implement this later)
    }
  }
}
