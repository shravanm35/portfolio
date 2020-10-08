import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  userInfo:UserModel ;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('userProfile'));
  }
  navigate(){
    this.router.navigateByUrl('home');
  }

}
