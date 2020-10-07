import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
export class EditorComponent implements OnInit {
  public candidateType=false;

  markdown=`1. Project Name
  - Point 1
  - Point 2`;
  public portFolioForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,
    Validators.email]),
    contact: new FormControl('',[Validators.pattern('0-9'),Validators.maxLength(10)]),
    linkedIn: new FormControl(''),
    candidateType: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }
   public onFormSubmit():void{

   }
   candidateTypeSelect(value):void{
    console.log(value)
    console.log(this.markdown)
   }
  }
