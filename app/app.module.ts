import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookedComponent } from './booked/booked.component';
import { UserComponent } from './user/user.component';
import { CancelledComponent } from './cancelled/cancelled.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookedComponent,
    UserComponent,
    CancelledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
