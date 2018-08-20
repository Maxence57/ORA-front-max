// import { Utilisateur } from './../model/utilisateur';
// import { Component, OnInit } from '@angular/core';
// import { GcmLevel } from '../model/GcmLevel';
// import { GcmCategorie } from './../model/GcmCategorie';
// import { Agency } from './../model/Agency';
// import { Administrator } from './../model/Administrator';
// import { Gender } from './../model/Gender';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-creer-profil',
//   templateUrl: './creer-profil.component.html',
//   styleUrls: ['./creer-profil.component.css']
// })
// export class CreerProfilComponent implements OnInit {
//   @Input() elementId: String;
//   @Output() onEditorContentChange = new EventEmitter();
 
  // editor;
  // levGcmCheckArray: any;
  // tyepQuestionArray: any;
  // typeQuestionCheckArray: any;

  // constructor(private _filterService: FilterService, private __creationService: CreationService, private router: Router) { }

    // array d'objets qui récupèrent les instances du back
  // public catGcmArray = new Array<GcmCategorie>();
  // public levGcmArray = new Array<GcmLevel>();
  // public agencyArray = new Array<Agency>();
  // public administratorArray = new Array<Administrator>();
  // public genderArray = new Array<Gender>();

  // on créait l'objet qu'on postera ensuite dans la base de donnée (objet creation)
  // public creationToPost = new Utilisateur();

  // liste à parcourir pour créer les checkbox d'affichage --> d'ou les attribut label et checked
  // categoriesGcmCheckArray = [];
  // niveauxGcmCheckArray = [];
  // agencyCheckArray = [];
  // administratorCheckArray = [];
  // genderCheckArray = [];


  
  // on initiialise les checkbox avec les données du back
  // ngOnInit() {
//     this._filterService.getCatGcm()
//       .subscribe(data => data.forEach(element => {
//         this.catGcmArray.push(element);
//         this.categoriesGcmCheckArray.push({ label: element.name, checked: false });
//       }));

//     this._filterService.getLevGcm()
//       .subscribe(data => data.forEach(element => {
//         this.levGcmArray.push(element);
//         this.levGcmCheckArray.push({ label: element.name, checked: false });
//       }));  

//     this._filterService.getAgency()
//       .subscribe(data => data.forEach(element => {
//         this.agencyArray.push(element);
//         this.agencyCheckArray.push({ label: element.type, checked: false });
//       }));

//       this._filterService.getAdministrator()
//       .subscribe(data => data.forEach(element => {
//         this.administratorArray.push(element);
//         this.administratorCheckArray.push({ label: element.type, checked: false });
//       }));


// //   }

// }

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creer-profil',
  templateUrl: './creer-profil.component.html',
  styleUrls: ['./creer-profil.component.css']
})
export class CreerProfilComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  idFormControl = new FormControl('', [
    Validators.required,
  ]);

  pwdFormControl = new FormControl('', [
    Validators.required,
  ]);

  pwdagainFormControl = new FormControl('', [
    Validators.required,
  ]);

  nomFormControl = new FormControl('', [
    Validators.required,
  ]);

  prenomFormControl = new FormControl('', [
    Validators.required,
  ]);

  genreFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  genders: string[] = [
    'Homme', 'Femme'
  ];

  ngOnInit() {
  }

  test() {
    this.idFormControl.markAsTouched();
    console.log(this.idFormControl);
    this.pwdFormControl.markAsTouched();
    console.log(this.pwdFormControl);
    this.pwdagainFormControl.markAsTouched();
    console.log(this.pwdagainFormControl);
    this.nomFormControl.markAsTouched();
    console.log(this.nomFormControl);
    this.prenomFormControl.markAsTouched();
    console.log(this.prenomFormControl);
    this.genreFormControl.markAsTouched();
    console.log(this.genreFormControl);
    this.emailFormControl.markAsTouched();
    console.log(this.emailFormControl);
  }

}

