import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FlipBookModule } from '@labsforge/flipbook';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutMainComponent } from './common/layout-main/layout-main.component';
import { MagazinePdfComponent } from './pages/magazine-pdf/magazine-pdf.component';
import { BlogScreenComponent } from './pages/blog-screen/blog-screen.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutMainComponent,
    MagazinePdfComponent,
    BlogScreenComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    FlipBookModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
