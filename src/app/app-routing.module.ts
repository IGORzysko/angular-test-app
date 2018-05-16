import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListingComponent } from './components/listing-component/listing-component';
import { ListingModalComponent } from './components/listing-modal-component/listing-modal-component';

const routes:Routes = [
  {path: 'listing', component: ListingComponent},
  {path: 'listing-modal', component: ListingModalComponent}
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports:
  [RouterModule]
})

export class AppRoutingModule {
}