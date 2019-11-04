import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { ViewChildComponent } from './view-child/view-child.component';
import { EmployeeServiceService } from './employee-service.service';
import { ViewChildComponent } from './view-child/view-child.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    // ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientModule,
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }