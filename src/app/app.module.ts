import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { UserComponent } from './component/user/user.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product-list/product/product.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    ProductListComponent,
    ProductComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
