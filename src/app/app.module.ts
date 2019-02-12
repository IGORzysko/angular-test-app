import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListingService } from './services/listing.service';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing-component/listing-component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [
    AppComponent
    ,ListingComponent     ],

  imports: [
    FormsModule,   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule     
  ],

  providers: [ListingService],

  bootstrap: [AppComponent]
})
export class AppModule {
  
 }