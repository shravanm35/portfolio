import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  userInfo: UserModel;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('userProfile'));
  }
  public navigate(): void {
    this.router.navigateByUrl('home');
  }
}
