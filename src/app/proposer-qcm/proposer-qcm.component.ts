import { Router } from '@angular/router';
import { Question } from './../model/question';
import { Answer } from './../model/answer';
import { PropositionService } from './../proposer-quest/proposer-quest.service';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({ name: 'noSanitize' })
export class NoSanitizePipe implements PipeTransform {
   constructor(private domSanitizer: DomSanitizer) {

   }
   transform(html: string): SafeHtml {
      return this.domSanitizer.bypassSecurityTrustHtml(html);
   }
}

@Component({
  selector: 'app-proposer-qcm',
  templateUrl: './proposer-qcm.component.html',
  styleUrls: ['./proposer-qcm.component.css']
})

export class ProposerQcmComponent implements OnInit {
  

  // listes contenant les propositions de réponses vraies et fausses
  public repCorrectes = new Array<Answer>();
  public repFausses = new Array<Answer>();

  // on initialise la proposition qu'on va récupérer de la page précédente et completer
  public propositionToPost = new Question();


  // on doit enregistrer les icones qu'on utiliser dans MatIconRegistry
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _propositionService: PropositionService , private router:Router) {
    iconRegistry.addSvgIcon(
      'add-button',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/add-button.svg'));
    iconRegistry.addSvgIcon(
      'clear-button',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/clear-button.svg'));
  }


  // on récupère la proposition à poster avec les infos renseignées à la page précédente !
  ngOnInit() {
    this.propositionToPost = this._propositionService.proposition;
  }


  // on rajoute l'answer proposée au tableau d'answer qu'il faudra poster
  addRepCorrect(repTrue) {
    // on crée l'objet reponse correcte --> id générer automatiquement par sequence commune aux rep false et true
    var answerToPost = new Answer();
    answerToPost.validity = true;
    answerToPost.statement = repTrue;
    this.repCorrectes.push(answerToPost);
  }

  // idem avec les answer fausses
  addRepFalse(repFalse) {
    var answerToPost = new Answer();
    answerToPost.validity = false;
    answerToPost.statement = repFalse;
    this.repFausses.push(answerToPost);
  }


  deleteRepFalse(repFalse) {
    this.repFausses = this.repFausses.filter(rep => rep !== repFalse);
  }

  deleteRepTrue(repTrue) {
    this.repCorrectes = this.repCorrectes.filter(rep => rep !== repTrue);
  }

  // activatePropositionvalidation(){
  //   if(this.propositionToPost.enonce_question==undefined){
  //     this.isNotEmpty=true;
  //   }else{
  //     this.isNotEmpty=false;
  //   }
  // }


  // on rajoute les informations manquantes à la proposition avant de la poster
  publier(enonceQuestion,tempsQuestion) {
    console.log(this.propositionToPost);
    this.propositionToPost.enonce_question = enonceQuestion;

    // codé en dur mais à changer !
    this.propositionToPost.duration_question = tempsQuestion;
    
    this.propositionToPost.creationdate = new Date(); // revoir pour la date... heure non prise en compte
    this.propositionToPost.id_redac_question = 1;
    this.propositionToPost.id_corr_question = 1;
    this.propositionToPost.id_quizdefault = 1;
    this.propositionToPost.isValide = false;

    
    this.propositionToPost.id_language = 1; // francais

    this._propositionService.addProposition(this.propositionToPost)
      .subscribe(
        (proposition) => {
          console.log("Proposition postée avec succès : ", this.propositionToPost)

          // publication des réponses vraies et fausses liées à la proposition direct dans le callback
          this._propositionService.postRepTrue(this.repCorrectes,proposition.id);
          this._propositionService.postRepFalse(this.repFausses,proposition.id);
        });
  };

  goHome(){
   this.router.navigateByUrl('/home');
  }
}
