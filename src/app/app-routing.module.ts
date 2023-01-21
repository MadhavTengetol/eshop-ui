import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'login',component:UserComponent}
  // {path:'*',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
