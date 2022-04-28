import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
	{ path: 'statistic', component: StatisticComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'contact/detail/:id', component: ContactDetailsComponent },
	{
		path: 'contact', component: ContactAppComponent, children: [
			{ path: 'edit', component: ContactEditComponent },
			{ path: 'edit/:id', component: ContactEditComponent },
		]
	},
	{ path: '', component: HomePageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
