import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  // onClick(title:HTMLInputElement,textInput:HTMLTextAreaElement,form:HTMLFormElement){
    onClick(title:string,textInput:string){
    const enteredTitle=title;
    const enteredText=textInput;
    console.log(enteredTitle)
    console.log(enteredText)
    // form.reset();     we can use like this to reset form after submit.But alternate way to access #form in comp class is by using VIEWCHILD
  this.form?.nativeElement.reset();
  }

}
