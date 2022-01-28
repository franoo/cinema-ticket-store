import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './services/in-memory-data.service';
import { ShowingListComponent } from './showings/showing-list/showing-list.component';
import { ShowingItemComponent } from './showings/showing-item/showing-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowingDetailsComponent } from './showings/showing-details/showing-details.component';
import { TicketPurchaseComponent } from './ticket-purchase/ticket-purchase.component';
import { SceneComponent } from './showings/scene/scene.component';
import { ShowingItemDetailsComponent } from './showings/showing-item-details/showing-item-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowingListComponent,
    ShowingItemComponent,
    ShowingDetailsComponent,
    TicketPurchaseComponent,
    SceneComponent,
    ShowingItemDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
