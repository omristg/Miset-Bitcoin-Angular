import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private _userDb: User[] = [
    {
      name: 'David Shukrun',
      coins: 100,
      moves: []
    },
    {
      name: 'Omri Steinerg',
      coins: 100,
      moves: []
    },
  ]


  private _user$ = new BehaviorSubject<User[]>([])
  public user$ = this._user$.asObservable()

  public getUser() {
    const user = this._userDb
    this._user$.next(user)
  }

}
