import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHeaderComponent,
    TopHeaderComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
