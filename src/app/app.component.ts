import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent {
//   public title: string = 'My app';
//   public number: number = 1;
//   public numbers: number[] = [1,2];

//   public giveMeNumber(): number {
//     return this.number
//   }

export class AppComponent {
    public numbers: number[] = [1,2];
    title = 'Tour of Heroes';
  }

  
