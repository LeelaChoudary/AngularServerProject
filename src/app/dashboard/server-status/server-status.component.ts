import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  constructor(){
   
    effect(()=>{console.log(this.currentStatus())})  //signal effect is used to set subscription on signal change.
  }
  
  ngOnInit(){
    console.log("NG ONINIT")
    const interval=setInterval(()=>{
      const rnd=Math.random(); //0 - 0.9999
      if(rnd<0.5){
this.currentStatus.set('online');
      }
      else if(rnd<0.9){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown');
      }
    }, 5000
    )
  }
}
