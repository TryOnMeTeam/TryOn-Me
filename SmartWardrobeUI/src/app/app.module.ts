import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UserImageThreedComponent } from './user-image-threed/user-image-threed.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    UserImageThreedComponent,
    ProductComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
