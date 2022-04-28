import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartData } from 'src/app/models/chart-data.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
	selector: 'avg-block-size-chart',
	templateUrl: './avg-block-size-chart.component.html',
	styleUrls: ['./avg-block-size-chart.component.scss']
})
export class AvgBlockSizeChartComponent implements OnInit, OnChanges {

	@Input() chartData: ChartData

	constructor(private bitcoinService: BitcoinService) { }

	chart: Chart


	ngOnInit(): void {
		const { name, description, values } = this.chartData
		const period = this.bitcoinService.getFormattedPeriods(values)
		this.chart = new Chart('avg-block-size-chart', {
			type: 'line',
			data: {
				labels: this.bitcoinService.getXTimeValues(values),
				datasets: [{
					label: name,
					data: values.map(value => value.y),
					borderWidth: 1,
					pointBackgroundColor: this.bitcoinService.getPointColorsFromValues(values),
					pointHoverBackgroundColor: this.bitcoinService.getPointColorsFromValues(values),
					pointRadius: 3,
					pointHoverRadius: 8
				}]
			},
			options: {
				scales: {
					x: {
						ticks: {
							maxTicksLimit: 8,
							maxRotation: 0,
							minRotation: 0,
							align:'start'
						}
					},
					y: {
						ticks: {
							callback: (value: number) => {
								return value.toFixed(2) + ' MB';
							}
						}
					},
				},
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: true,
						text: [`${name} at ${period}`, '', description],
						padding: { bottom: 30 },
						font: {
							family: 'Roboto', weight: '500', size: 16
						}
					},
				}
			}
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (!changes['chartData'].isFirstChange()) this.updateChart()
	}

	updateChart() {
		const { values, name, description } = this.chartData
		const period = this.bitcoinService.getFormattedPeriods(values)
		this.chart.data.labels = this.bitcoinService.getXTimeValues(values)
		this.chart.data.datasets[0].data = values.map(value => value.y)
		this.chart.options.plugins.title.text = [`${name} at ${period}`, '', description],
			this.chart.update()
	}
}
