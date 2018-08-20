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
  selector: 'app-proposer-vrai-faux',
  templateUrl: './proposer-vrai-faux.component.html',
  styleUrls: ['./proposer-vrai-faux.component.css']
})
export class ProposerVraiFauxComponent implements OnInit {

  answer: string;
  answers: string[] = ['Vrai', 'Faux'];

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
        });
  };

  goHome(){
   this.router.navigateByUrl('/home');
  }
}

