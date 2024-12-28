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
@Input({required:true}) ticketObj:Ticket | undefined   //for input ,2 configurations are available(alias,transform)
@Output() close=new EventEmitter();                     //for output ,1 configuration is available(alias)
                                              //alias helps us to give other name to input property which we can use outside of this component
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
