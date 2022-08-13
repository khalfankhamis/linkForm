import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [{
  path:'',
  component:MainLayoutComponent,
  children:[{
    path:'',
    component:HomeComponent
  },{
    path:'user',
    component:UserComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:"addProduct",
    component:AddproductComponent
  }
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
