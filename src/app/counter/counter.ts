import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  constructor() {

  }
  
  counterValue = signal(0);
  
  increment(){
    console.log('Increment clicked!');
    this.counterValue.update((val) => val + 1);
  }

  reset(){
    console.log('Reset clicked!');
    this.counterValue.set(0);
  }  
  
  decrement(){
    console.log('Decrement clicked!');
    this.counterValue.update((val) => val - 1);
  }
}