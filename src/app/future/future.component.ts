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

  // for pagination
  @Input()
  totalRecords!: number;

  /** @internal */
  page: number = 1;

  // font-awesome
  /** @internal */
  calendar:any = faCalendar;
  
  /** @internal */
  clock:any = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
