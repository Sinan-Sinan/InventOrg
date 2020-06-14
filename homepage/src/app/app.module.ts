import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
