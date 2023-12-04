import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateClientModalComponent } from '../components/create-client-modal/create-client-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditAddClientModalComponent } from '../components/edit-add-client-modal/edit-add-client-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateClientModalComponent,
    EditAddClientModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    [RouterModule.forRoot(routes), NgbModule],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
