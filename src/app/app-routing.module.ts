import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {
	path: '', 
	component: HomepageComponent
  },
  {
    path: 'register',
    component: UserregComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
   {
  path: 'productdetail/:id', 
  component: ProductdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
