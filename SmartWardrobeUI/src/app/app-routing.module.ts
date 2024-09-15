import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ProductComponent } from './components/product/product.component';
import { TeamComponent } from './components/team/team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'product', component: ProductComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
