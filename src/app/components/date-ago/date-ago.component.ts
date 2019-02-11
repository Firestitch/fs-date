import { Component, Input, ElementRef, OnInit, OnChanges } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

import { ago, format as fsFormat } from '../../../libs';


@Component({
  selector: 'fs-date-ago',
  templateUrl: './date-ago.component.html'
})
export class FsDateAgoComponent implements OnInit, OnChanges {

  @Input() public date = null;
  @Input() public showTime = false;
  @Input() public format = 'date';

  public formattedDate: string = null;
  public tooltip: string = null;

  constructor(public elementRef: ElementRef) { }

  // Working for compiled component
  public ngOnInit() {
    this.updateFormatted();
  }

  public ngOnChanges() {
    this.updateFormatted();
  }

  private updateFormatted() {

    this.formattedDate = ago(this.date, this.format);
    let tooltipFormat = 'date-time';

    if (moment().format('YYYY') === moment(this.date).format('YYYY')) {
      tooltipFormat = 'date-time-yearless';
    }

    this.tooltip = this.showTime ? fsFormat(this.date, tooltipFormat) : null;
  }

}