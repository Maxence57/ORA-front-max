import { Question } from './../model/question';
import { TypeQuestion } from './../model/typeQuestion';

import { LangProg } from './../model/langProg';
import { GcmCategorie } from './../model/gcmCategorie';
import { Router } from '@angular/router';
import { FilterService } from './../filter-questions/filter-questions.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropositionService } from './proposer-quest.service';
import { GcmLevel } from '../model/gcmLevel';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';



@Component({
  selector: 'app-proposer-quest',
  templateUrl: './proposer-quest.component.html',
  styleUrls: ['./proposer-quest.component.css']
})
export class ProposerQuestComponent implements OnInit {
  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();
 
  editor;

  constructor(private _filterService: FilterService, private _propositionService: PropositionService, private router: Router) { }


  // array d'objets qui récupèrent les instances du back
  public catGcmArray = new Array<GcmCategorie>();
  public domainesArray = new Array<LangProg>();
  public tyepQuestionArray = new Array<TypeQuestion>();


  // on créait l'objet qu'on postera ensuite dans la base de donnée (objet proposition)
  public propositionToPost = new Question();

  // liste à parcourir pour créer les checkbox d'affichage --> d'ou les attribut label et checked
  categoriesGcmCheckArray = [];
  domainesCheckArray = [];
  typeQuestionCheckArray = [];


  // on initiialise les checkbox avec les données du back
  ngOnInit() {
    this._filterService.getCatGcm()
      .subscribe(data => data.forEach(element => {
        this.catGcmArray.push(element);
        this.categoriesGcmCheckArray.push({ label: element.name, checked: false });
      }));

    this._filterService.getLangProg()
      .subscribe(data => data.forEach(element => {
        this.domainesArray.push(element);
        this.domainesCheckArray.push({ label: element.name, checked: false });
      }));  

    this._filterService.getTypeQuestion()
      .subscribe(data => data.forEach(element => {
        this.tyepQuestionArray.push(element);
        this.typeQuestionCheckArray.push({ label: element.type, checked: false });
      }));



  }


  // choix de la catégorie GCM
  onChangeCategorie(categorie,i_gcm) {
    // ca marche donc je touche pas mais bon... ???
    categorie.checked = !categorie.checked;

    if (categorie.checked) {
      var gcmCatProposition = new GcmCategorie();
      gcmCatProposition.name = categorie.label;
      gcmCatProposition.id = (i_gcm+1);
      this.propositionToPost.gcmCategorie = gcmCatProposition;
 
    } else {
      var gcmCat = new GcmCategorie();
      gcmCat.name = '';
      gcmCatProposition.id = 0;
      this.propositionToPost.gcmCategorie = gcmCat;

    }
  }


  // choix du domaine associé à la question
  onChangeDomaine(domaine,i_domaine) {
    domaine.checked = !domaine.checked;

    if (domaine.checked) {
      var domaineProposition = new LangProg();
      domaineProposition.name = domaine.label;
      domaineProposition.id = (i_domaine+1);
      this.propositionToPost.languageQuestion = domaineProposition;

    } else {
      var domaineProposition = new LangProg();
      domaineProposition.name = "";
      this.propositionToPost.languageQuestion = domaineProposition;

    }
  }


  // choix du niveau de la proposition (propre à la catégorie GCM selectionnée)
  setNiveauGcm(niveau) {
    var levelGcmProposition = new GcmLevel();
    levelGcmProposition.level = niveau;
    levelGcmProposition.id = niveau;
    this.propositionToPost.gcmLevel = levelGcmProposition;
  }


  // choix du type de la proposition
  // l'index i permet de set l'id correspondant, l'ordre est donc important
  onChangeType(type,i) { 
    var typeQuestionProposition = new TypeQuestion();
    typeQuestionProposition.type = type.label;
    typeQuestionProposition.id = (i+1);
    this.propositionToPost.typeQuestion = typeQuestionProposition;

  }




  // accéder à la saisi de l'énoncé de la proposition en fonction du type renseigné
  goEnonceProposition(niveau) {

    this.setNiveauGcm(niveau);

    // redirection enfonction du type de question à saisir
    if (this.propositionToPost.typeQuestion.type == "QCM") {
      this.router.navigateByUrl("proposerQcm");
    }
    if (this.propositionToPost.typeQuestion.type == "Vrai / Faux") {
      this.router.navigateByUrl("proposerVraiFaux");
    }
    if (this.propositionToPost.typeQuestion.type == "Oui / Non") {
      this.router.navigateByUrl("proposerOuiNon");
    }
    if (this.propositionToPost.typeQuestion.type == "Question Ouverte") {
      this.router.navigateByUrl("proposerQuestionOuverte");
    }
    else {
      console.log('too bad');
    }
  }




  // transmission de la proposition à la seconde page de saisie pour l'utilisateur
  ngOnDestroy() {
    this._propositionService.proposition = this.propositionToPost;
  }

  goBack(){
    this.router.navigateByUrl('/home');
  }



}

