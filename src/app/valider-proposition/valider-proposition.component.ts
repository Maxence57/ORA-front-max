import { Question } from './../model/question';
import { Answer } from './../model/answer';
import { ValidationService } from './valider-proposition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valider-proposition',
  templateUrl: './valider-proposition.component.html',
  styleUrls: ['./valider-proposition.component.css']
})
export class ValiderPropositionComponent implements OnInit {

  constructor(private _propositionService:ValidationService) { }

  // array qui va recevoir toutes les propositons stocjés dans la base de données 
  private listPropositions = new Array<Question>();

  // on va créer deux tableaux de réponses (fausses et correctes) poru séparer leur affichages
  private listAnswerTrue = new Array<Answer>();
  //private listAnswerTrue = new Array<AnswerProposition>();


  ngOnInit() {
    this._propositionService.getPropositionNotValid()
      .subscribe(data => data.forEach(proposition => {
        this.listPropositions.push(proposition);
        console.log(this.listPropositions);
      }));
  }


  validerProposition(proposition) {
    this._propositionService.validateServiceProposition(proposition).subscribe();
    window.location.reload();
  }

  // un seul appel ici mais dans le back on va supprimer les réponses liées avant de supprimer la proposition
  supprimerProposition(proposition) {
    console.log(proposition);
    this._propositionService.supprimerServiceProposition(proposition).subscribe();
    window.location.reload();
  }

  // // on doit supprimer les reponses liés a la question avant de supprimer la question en elle même
  // supprimerAnswer(proposition) {
  //   console.log(proposition.answers)
  //   proposition.answers.forEach(ans => {
  //     this._propositionService.supprimerServiceAnswer(ans).subscribe();
  //   });
  // }

}
