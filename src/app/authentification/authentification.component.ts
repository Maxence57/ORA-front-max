import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';


export interface Gender {
  value: string;
  viewValue: string;
}

export interface Nationality {
  value: string;
  viewValue: string;
}
export interface Langlevel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})


export class AuthentificationComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  nomFormControl = new FormControl('', [
    Validators.required,
  ]);

  prenomFormControl = new FormControl('', [
    Validators.required,
  ]);

  genreFormControl = new FormControl('', [
    Validators.required,
  ]);

  birthdateFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  autresFormControl = new FormControl('', [
    Validators.required,
  ]);

  nationalityFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  adresseFormControl = new FormControl('', [
    Validators.required,
  ]);

  cityFormControl = new FormControl('', [
    Validators.required,
  ]);

  countryFormControl = new FormControl('', [
    Validators.required,
  ]);

  postalcodeFormControl = new FormControl('', [
    Validators.required,
  ]);

  portableFormControl = new FormControl('', [
    Validators.required,
  ]);

  telephonefixeFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastdegreeFormControl = new FormControl('', [
    Validators.required,
  ]);

  lastdegreeyearFormControl = new FormControl('', [
    Validators.minLength(4),
    Validators.maxLength(4),
    Validators.required,
  ]);

  englishlevFormControl = new FormControl('', [
    Validators.required,
  ]);

  germanlevFormControl = new FormControl('', [
    Validators.required,
  ]);

  spanishlevFormControl = new FormControl('', [
    Validators.required,
  ]);

  italianlevFormControl = new FormControl('', [
    Validators.required,
  ]);

  checkboxFormControl = new FormControl('', [
    Validators.required,
  ]);


  private isSelected: boolean = false;
  private value: boolean = false;



  constructor() { }


  genders: string[] = [
    'Homme', 'Femme'
  ];
  nationalities: string[] = [
    'Autre', 'française', 'anglaise', 'allemande', 'espagnole', 'italienne', 'marocaine', 'tunisienne'
  ];
  langlevels: string[] = [
    'Aucune connaissance', 'Notions / Débutant', 'Vocabulaire technique', 'Courant', 'Bilingue'
  ];


  ngOnInit() {      //tentative pour la validation des checkbox


  }

  onChange(event) {
    if (event.checked == true) {
      this.isSelected = false;
      this.value = true;
    } else {
      this.isSelected = true;
      this.value = false
    }
  }


  test() {

    this.nomFormControl.markAsTouched();
    console.log(this.nomFormControl);
    this.prenomFormControl.markAsTouched();
    console.log(this.prenomFormControl);
    this.genreFormControl.markAsTouched();
    console.log(this.genreFormControl);
    this.birthdateFormControl.markAsTouched();
    console.log(this.birthdateFormControl);
    this.nationalityFormControl.markAsTouched();
    console.log(this.nationalityFormControl);
    this.autresFormControl.markAsTouched();
    console.log(this.autresFormControl);
    this.emailFormControl.markAsTouched();
    console.log(this.emailFormControl);
    this.adresseFormControl.markAsTouched();
    console.log(this.adresseFormControl);
    this.cityFormControl.markAsTouched();
    console.log(this.cityFormControl);
    this.postalcodeFormControl.markAsTouched();
    console.log(this.postalcodeFormControl);
    this.countryFormControl.markAsTouched();
    console.log(this.countryFormControl);
    this.portableFormControl.markAsTouched();
    console.log(this.portableFormControl);
    this.telephonefixeFormControl.markAsTouched();
    console.log(this.telephonefixeFormControl);
    this.lastdegreeFormControl.markAsTouched();
    console.log(this.lastdegreeFormControl);
    this.lastdegreeyearFormControl.markAsTouched();
    console.log(this.lastdegreeyearFormControl);
    this.englishlevFormControl.markAsTouched();
    console.log(this.englishlevFormControl);
    this.germanlevFormControl.markAsTouched();
    console.log(this.germanlevFormControl);
    this.spanishlevFormControl.markAsTouched();
    console.log(this.spanishlevFormControl);
    this.italianlevFormControl.markAsTouched();
    console.log(this.italianlevFormControl);
    this.checkboxFormControl.markAsTouched();
    console.log("resr" + this.checkboxFormControl);
    if (this.value) {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }


  }
}



