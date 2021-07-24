import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadhaarValidationComponent } from './login-content/aadhaar-validation/aadhaar-validation.component';

const routes: Routes = [
  {
    path: 'dashboard', component: AadhaarValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
