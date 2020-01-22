import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { AssignedTicketsComponent } from './pages/assigned-tickets/assigned-tickets.component';
import { ClosedTicketsComponent } from './pages/closed-tickets/closed-tickets.component';
import { OverDueTicketsComponent } from './pages/over-due-tickets/over-due-tickets.component';
import { PendingTicketsComponent } from './pages/pending-tickets/pending-tickets.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    OpenTicketComponent,
    TicketListComponent,
    AssignedTicketsComponent,
    ClosedTicketsComponent,
    OverDueTicketsComponent,
    PendingTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
