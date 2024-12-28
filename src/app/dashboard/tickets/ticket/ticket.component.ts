import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
@Input({required:true}) ticketObj:Ticket | undefined 
@Output() close=new EventEmitter();
// isVisible=false;
isVisible=signal(false);
onButtonToggle(){
  // this.isVisible=true;
  // this.isVisible.set(!this.isVisible);
  this.isVisible.update((wasVisible)=>!wasVisible);
}
onMarkasComplete(){
  this.close.emit();
}
}
