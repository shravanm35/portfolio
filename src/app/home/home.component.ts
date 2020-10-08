import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: UserModel;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('userProfile'));
  }
  public navigate(pageName: string): void {
    this.router.navigateByUrl(pageName);
  }
}
