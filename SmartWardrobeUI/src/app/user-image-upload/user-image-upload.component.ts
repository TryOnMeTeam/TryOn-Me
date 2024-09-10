import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-image-upload',
  templateUrl: './user-image-upload.component.html',
  styleUrl: './user-image-upload.component.css'
})
export class UserImageUploadComponent {
  userImage: string | ArrayBuffer | null = null;
  productImage: string | ArrayBuffer | null = null;

  @ViewChild('userUpload', { static: false }) userUpload!: ElementRef<HTMLInputElement>;
  @ViewChild('productUpload', { static: false }) productUpload!: ElementRef<HTMLInputElement>;

  triggerUpload(inputElement: HTMLInputElement) {
    inputElement.click();
  }

  onImageSelected(event: any, side: 'user' | 'product') {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (side === 'user') {
          this.userImage = reader.result;
        } else {
          this.productImage = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(side: 'user' | 'product') {
    if (side === 'user') {
      this.userImage = null;
      if (this.userUpload) {
        this.userUpload.nativeElement.value = '';
      }
    } else {
      this.productImage = null;
      if (this.productUpload) {
        this.productUpload.nativeElement.value = '';
      }
    }
  }

  analyzeImages() {
    if (this.userImage && this.productImage) {
      alert('Analyzing the uploaded images!');
    } else {
      alert('Please upload both user and product images.');
    }
  }
}
