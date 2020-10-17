import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormComponent } from './form/form.component';


const routes: Routes=[
  {path: 'contactPage', component: ContactPageComponent},
  {path: 'form', component: FormComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
