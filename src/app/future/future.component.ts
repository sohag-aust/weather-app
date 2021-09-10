import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'future-forecast',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  @Input()
  foreCastDataList: any;

  calendar:any = faCalendar;
  clock:any = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
