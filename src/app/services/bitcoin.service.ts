import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, of, Observable } from 'rxjs';
import { ChartData } from '../models/chart-data.model';
import { Chart } from 'chart.js';

const baseUrl = 'https://blockchain.info/'
const chartsbaseUrl = 'https://api.blockchain.info/charts/'


@Injectable({
	providedIn: 'root'
})
export class BitcoinService {

	constructor(private http: HttpClient) { }

	public getRate(): Observable<number> {
		return this.http.get<number>(`${baseUrl}tobtc?currency=USD&value=1`)
	}

	public getMarketPlace(timespan: string): Observable<ChartData> {
		return this.http.get<ChartData>(`${chartsbaseUrl}market-price?timespan=${timespan}&format=json&cors=true`)
	}

	public getAvgBlockSize(timespan: string): Observable<ChartData> {
		return this.http.get<ChartData>(`${chartsbaseUrl}avg-block-size?timespan=${timespan}&format=json&cors=true`)
	}

	public getXTimeValues(values: any[]): any[] {
		return values.map(value => {
			const day = new Date(value.x * 1000).toLocaleDateString(['he-IL'], {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			})
			return day
		})
	}


	public getMarketPriceChart(chartData: ChartData, id: string) {
		const { name, description, values } = chartData

		const period = this.getFormattedPeriods(values)
		return new Chart(id, {
			type: 'line',
			data: {
				labels: this.getXTimeValues(values),
				datasets: [{
					label: name,
					data: values.map(value => value.y),
					borderWidth: 1,
					pointBackgroundColor: this.getPointColorsFromValues(values),
					pointRadius: 3,
					pointHoverRadius: 8
				}]
			},
			options: {
				scales: {
					y: {
						ticks: {
							// Include a dollar sign in the ticks
							callback: function (value, index, values) {
								return '$' + value;
							}
						}
					},
				},
				plugins: {
					title: {
						display: true,
						text: [`${name} at ${period}`, '', description],
					},
				}
			}
		});
	}


	public getPointColorsFromValues(values: any[]): any[] {
		return values.map((value, idx) => {
			const prev = (idx === 0) ? 0 : idx - 1
			const color = (value.y < values[prev].y) ? '#f00' : '#0f0'
			return color
		})
	}


	public getFormattedPeriods(values) {
		const options: object = { day: '2-digit', month: '2-digit', year: '2-digit' }

		return new Date(values[0].x * 1000).toLocaleDateString('he-IL', options) + '-' +
			new Date(values[values.length - 1].x * 1000).toLocaleDateString('he-IL', options)
	}


}
