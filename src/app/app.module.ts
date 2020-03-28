import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductSlideComponent, ProductAnhComponent, ProductListComponent, ProductEmailComponent, ProductFooterComponent, HomeComponent, NotFoundComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
