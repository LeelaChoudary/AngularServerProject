import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control'    ,             //here we are setting control class to host element 
    '(click)' : 'onClick()'            //here we are listening to the event for host element
  }
})
export class ControlComponent {
  // @HostBinding('class') className='control';
  // @HostListener('click') onClick2(){ console.log("Clicked");}
  private el= inject(ElementRef)   //ElementREf is used to access HOST element programatically..
  @Input({required:true}) title:string | undefined;

  onClick(){
    console.log("Clicked", this.el);
  }

}
