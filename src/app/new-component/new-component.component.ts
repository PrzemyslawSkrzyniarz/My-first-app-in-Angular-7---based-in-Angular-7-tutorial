import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  @Input() name: string = ''; //@Input() - dzięki temu Angular obserwuje ten element i można go zewnętrznie modyfikować
  @Input() public surname: string = '';

  constructor() {
    console.log(this);
   }

  ngOnInit() {
  }

}
