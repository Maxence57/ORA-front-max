import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-choix-questionnaire',
  templateUrl: './choix-questionnaire.component.html',
  styleUrls: ['./choix-questionnaire.component.css']
})
export class ChoixQuestionnaireComponent implements OnInit {

  dateFormControl = new FormControl('', [
    Validators.required,
  ]);

  lieuFormControl = new FormControl('', [
    Validators.required,
  ]);


  constructor() { }

  ngOnInit() {
  }

  test() {

    this.dateFormControl.markAsTouched();
    console.log(this.dateFormControl);
    this.lieuFormControl.markAsTouched();
    console.log(this.lieuFormControl);
 
  }

}
