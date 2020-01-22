import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { AssignedTicketsComponent } from './pages/assigned-tickets/assigned-tickets.component';
import { PendingTicketsComponent } from './pages/pending-tickets/pending-tickets.component';
import { ClosedTicketsComponent } from './pages/closed-tickets/closed-tickets.component';
import { OverDueTicketsComponent } from './pages/over-due-tickets/over-due-tickets.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'openTicket', pathMatch: 'full', component: OpenTicketComponent},
  { path: 'ticketList', pathMatch: 'full', component: TicketListComponent},
  { path: 'assignedTickets', pathMatch: 'full', component: AssignedTicketsComponent},
  { path: 'viewOpenTickets', pathMatch: 'full', component: PendingTicketsComponent },
  { path: 'viewAClosedTickets', pathMatch: 'full', component: ClosedTicketsComponent},
  { path: 'viewOverDueTickets', pathMatch: 'full', component: OverDueTicketsComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
