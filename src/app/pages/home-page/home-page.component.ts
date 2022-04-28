import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  user: User
  subs: Subscription[] = []
  bitcoinRate: number
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }



  ngOnInit(): void {
    this.userService.getUser()
    this.subs[this.subs.length] = this.userService.user$.subscribe(user => {
      this.user = user[0]
    })

    this.subs[this.subs.length] = this.bitcoinService.getRate().subscribe(rate => {
      this.bitcoinRate = rate
    })
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe())
  }

}
