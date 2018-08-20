import { GcmCategorie } from './../model/gcmCategorie';

import { LangProg } from './../model/langProg';
import { FilterService } from './filter-questions.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filter } from './filter-questions';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-filter-questions',
  templateUrl: './filter-questions.component.html',
  styleUrls: ['./filter-questions.component.css']
})
export class FilterQuestionsComponent implements OnInit {

  constructor(private _filterService: FilterService, private router: Router, public dialog: MatDialog) { }

  public langProgArray = new Array<LangProg>();
  public catGcmArray = new Array<GcmCategorie>();

  // création du filtre 
  public filter = new Filter;
  public languageArray = new Array;
  public categorieGcm = new Array;
  public typeQuestion = new Array;
  //public timeQuestionnaire: string;
  public stringNiveau: string;

  // liste des questions après application du filtre
  public questionsfiltre = [];

  // languages possibles --> à remplacer par un service qui appelle la BDD
  languages = [];

  // catégorie GCM --> idem appel à la BDD à écrire
  categoriesGCM = [];

  ngOnInit() {

    this._filterService.getLangProg()
      .subscribe(data => data.forEach(element => {
        this.langProgArray.push(element);

        this.languages.push({ label: element.name, checked: false });
      }));

    this._filterService.getCatGcm()
      .subscribe(data => data.forEach(element => {
        this.catGcmArray.push(element);

        this.categoriesGCM.push({ label: element.name, checked: false });
      }));


  }

  // gère la checkbox des languages, on retourne une liste de String des languages à évalués
  onChangeNiveau(item) {

    item.checked = !item.checked; // ca marche donc je touche pas mais bon... ???

    if (item.checked) {
      this.languageArray.push(item.label);
    } else {
      this.languageArray = this.languageArray.filter(x => x !== item.label);
    }

  }

  // gère la checkbox des catégories 
  onChangeCategorie(item) {

    item.checked = !item.checked;

    if (item.checked) {
      this.categorieGcm.push(item.label);
    } else {
      this.categorieGcm = this.categorieGcm.filter(x => x !== item.label);
    }
  }

  // gère le niveau du questionnaire 
  setFilterNiveau(niveau) {
    this.stringNiveau = niveau.value;
  }


  // paramètrage du filtre
  genererQuestionnaire(timeQuestSaisi) {

    this.filter.categorieGcm = this.categorieGcm;
    this.filter.niveau = this.stringNiveau;
    this.filter.programmingLanguage = this.languageArray;
    this.filter.timeQuestionnaire = timeQuestSaisi;

    // gère manuellement les types de questions --> ici seulement questions fermées pour la première page
    let typeQuestionArray = new Array<String>();
    typeQuestionArray.push('QCM');
    typeQuestionArray.push('Vrai / Faux');
    typeQuestionArray.push('Oui / Non');
    this.filter.typeQuestion = typeQuestionArray

    // appelle la BDD pour filtrer les questions et retourné la liste finale filtrée
    console.log(this.filter);

    if(this.isFilterComplet()) {
          this._filterService.addFilter(this.filter)
            .subscribe((data) => {
              this.questionsfiltre = data
              this._filterService.questionsService = this.questionsfiltre;
              this.goQuestionnaire(timeQuestSaisi);
            })
    } 
    else {
      return this.isFilterComplet();
    }
  }


  // test si on a toutes les informations qu'il faut
  isFilterComplet() {
    console.log(this.filter);

    if (this.filter.categorieGcm.length == 0) {
      alert("Veuillez renseigner au moins une catégorie GCM");
      return false;
    }
    else if (this.filter.programmingLanguage.length == 0) {
      alert("Veuillez renseigner au moins un language de programmation");
      return false;
    }
    else if (this.filter.timeQuestionnaire == undefined) {
      alert("Veuillez renseigner le temps voulue pour le questionnaire");
      return false;
    }
    else if (this.filter.niveau == undefined) {
      alert("Veuillez renseigner le niveau du questionnaire à générer");
      return false;
    }
    else {
      return true
    }
  }


      // redirection vers le questionnaire à compléter
      goQuestionnaire(timeQuestSaisi) {
        this._filterService.timeQuestionnaire = timeQuestSaisi;
        this.router.navigateByUrl('/questionnaire');
      }

      // transmission de la liste filtrée à la prochaine page, en stockant dans questionsService
      ngOnDestroy() {
        this._filterService.questionsService = this.questionsfiltre;
      }



    }
