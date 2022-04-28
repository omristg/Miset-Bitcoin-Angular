import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Segement {
  value: string;
  viewValue: string;
}

interface Period {
  segement: string
  count: number
}

@Component({
  selector: 'timespan-input',
  templateUrl: './timespan-input.component.html',
  styleUrls: ['./timespan-input.component.scss']
})
export class TimespanInputComponent implements OnInit {

  @Output() setPeriod = new EventEmitter

  constructor() { }

  segements: Segement[] = [
    { value: 'days', viewValue: 'Days' },
    { value: 'months', viewValue: 'Months' },
    { value: 'years', viewValue: 'Years' },
  ]

  period: Period = {
    segement: '',
    count: null,
  }

  ngOnInit(): void {
  }

  
  
  onSetPeriod() {
    if (!this.period.count || !this.period.segement) return
    const period = `${this.period.count}${this.period.segement}`
    this.setPeriod.emit(period)
  }

  suffix() {
    if (this.period.count > 1) return 's'
    else return ''
  }

}
