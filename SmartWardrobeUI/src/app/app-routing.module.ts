import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ProductComponent } from './product/product.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserImageThreedComponent } from './user-image-threed/user-image-threed.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'product', component: ProductComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path: 'tryMe3D', component: UserImageThreedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
