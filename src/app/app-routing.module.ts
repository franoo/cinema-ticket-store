import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowingDetailsComponent } from './showings/showing-details/showing-details.component';
import { ShowingListComponent } from './showings/showing-list/showing-list.component';

const routes: Routes = [
  {
    path:'showings', component: ShowingListComponent
  },
  {path:'', redirectTo: '/showings', pathMatch: 'full'},
  {path:'showings/:id', component: ShowingDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
