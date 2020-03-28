import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { ProductAnhComponent } from './product-anh/product-anh.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEmailComponent } from './product-email/product-email.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ProductService } from './service/product.service';


import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule , HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductSlideComponent, ProductAnhComponent, ProductListComponent, ProductEmailComponent, ProductFooterComponent, HomeComponent, NotFoundComponent, ServicesComponent, ProductManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
