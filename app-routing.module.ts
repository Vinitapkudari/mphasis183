import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookedComponent } from './booked/booked.component';
import { UserComponent } from './user/user.component';
import { CancelledComponent } from './cancelled/cancelled.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent },
  {path: "booked", component: BookedComponent },
  {path: "user", component: UserComponent },
  {path: "cancelled", component: CancelledComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
