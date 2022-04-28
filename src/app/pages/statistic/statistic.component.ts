import { Component, OnInit } from '@angular/core';
import { ChartData } from 'src/app/models/chart-data.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  marketPriceData: ChartData
  avgBlockSizeData: ChartData

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getMarketPlace('2months').subscribe(res => {
      this.marketPriceData = res
    })
    this.bitcoinService.getAvgBlockSize('5months').subscribe(res => {
      this.avgBlockSizeData = res
    })
  }
  onSetMarketPeriod(period) {
    this.bitcoinService.getMarketPlace(period).subscribe(res => {
      this.marketPriceData = res
    })
  }

  onSetAvgSizePeriod(period) {
    this.bitcoinService.getAvgBlockSize(period).subscribe(res => {
      this.avgBlockSizeData = res
    })
  }


}
