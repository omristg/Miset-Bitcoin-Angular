import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { NgChartsModule } from 'ng2-charts';



import { AppComponent } from './root-cmp/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { MarketPriceComponent } from './cmps/market-price-chart/market-price-chart.component';
import { LoginComponent } from './pages/login/login.component';
import { AvgBlockSizeChartComponent } from './cmps/avg-block-size-chart/avg-block-size-chart.component';
import { TimespanInputComponent } from './cmps/timespan-input/timespan-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateiralModule } from './modules/mateiral/mateiral.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFilterComponent,
    StatisticComponent,
    MarketPriceComponent,
    LoginComponent,
    AvgBlockSizeChartComponent,
    TimespanInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MateiralModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
