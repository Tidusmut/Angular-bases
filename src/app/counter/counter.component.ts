import { Component,OnInit } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
  <h3>Counter: {{counter}}</h3>

  <button (click)="increasedBy(+1)">+1</button>
  <button (click)="increasedBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>


  `
})
export class CounterComponent{

    public title: string = 'Hola Mundo';
    public counter: number = 10;

    increasedBy ( value: number): void {
      this.counter += value;

    }

    resetCounter() {
      this.counter = 10;
    }

  }
