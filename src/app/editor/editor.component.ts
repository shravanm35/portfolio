import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { EXPERIENCE, COVER_LETTER } from '../constants/constants';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  public candidateType = false;
  userInfo: UserModel;
  markdown = `1. Project Name
  - Point 1
  - Point 2`;
  MOBILE_PATTERN = /[0-9\+\-\ ]/;
  public portFolioForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    intro: new FormControl(''),
    linkedIn: new FormControl(''),
    candidateType: new FormControl(''),
    experience: new FormControl(''),
    coverLetter: new FormControl(''),
    github: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userProfile')) {
      this.userInfo = JSON.parse(sessionStorage.getItem('userProfile'));
      this.portFolioForm.get('name').setValue(this.userInfo.name);
      this.portFolioForm.get('email').setValue(this.userInfo.email);
      this.portFolioForm.get('contact').setValue(this.userInfo.contact);
      this.portFolioForm.get('intro').setValue(this.userInfo.intro);
      this.portFolioForm.get('linkedIn').setValue(this.userInfo.linkedIn);
      this.portFolioForm.get('experience').setValue(this.userInfo.experience);
      this.portFolioForm.get('coverLetter').setValue(this.userInfo.coverLetter);
      this.portFolioForm.get('github').setValue(this.userInfo.github);
      this.portFolioForm
        .get('candidateType')
        .setValue(this.userInfo.candidateType);
    } else {
      this.portFolioForm.get('experience').setValue(EXPERIENCE);
      this.portFolioForm.get('coverLetter').setValue(COVER_LETTER);
    }
  }

  public onFormSubmit(): void {
    if (this.portFolioForm.valid) {
      this.router.navigateByUrl('home');
      sessionStorage.setItem(
        'userProfile',
        JSON.stringify(this.portFolioForm.value)
      );
    }
  }
}
