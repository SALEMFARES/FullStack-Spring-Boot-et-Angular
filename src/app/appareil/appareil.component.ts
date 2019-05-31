import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  appareilName: string = 'Machine a lave';
  appareilStatus: string = 'étein';

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }


}
