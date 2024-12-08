import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MarketingComponent } from './marketing/marketing.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Start a payment | fmservice.com' } },
  { path: 'home', component: HomeComponent, data: { title: 'Log in to your account | fmservice.com' } },
  { path: 'contacts', component: ContactsComponent, data: { title: 'Log in to your account | fmservice.com' } },
  { path: 'inventory', component: InventoryComponent, data: { title: 'Log in to your account | fmservice.com' } },
  { path: '**', redirectTo: '/home', pathMatch: 'full', data: { title: 'Start a payment | fmservice.com' } }
];

@NgModule({
  declarations: [
    ContactsComponent,
    InventoryComponent,
    MarketingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoggedInModule { }
