import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './partials/nav/nav.component';
import { RunSignUpComponent } from './pages/run-sign-up/run-sign-up.component';
import { SearchComponent } from './pages/search/search.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './partials/footer/footer.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { DistanceComponent } from './pages/distance/distance.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ErrorpageComponent,
    NavComponent,
    RunSignUpComponent,
    SearchComponent,
    FooterComponent,
    ThankyouComponent,
    DistanceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
