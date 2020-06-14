import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path: 'inventory', component: InventoryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
