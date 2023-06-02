import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserViewModel {
  username: string;
  avatarUrl?: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserViewModel | null>({
    username: 'hari',
    roles: ['finance'],
  });

  // private userSubject = new BehaviorSubject<UserViewModel | null>(null);

  user$ = this.userSubject.asObservable();

  constructor() {}
}
