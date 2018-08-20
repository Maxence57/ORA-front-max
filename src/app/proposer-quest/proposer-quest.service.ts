import { Answer } from './../model/answer';
import { Question } from './../model/question';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  

@Injectable()
export class PropositionService {
    constructor(private http: HttpClient) {}

    // on crée l'objet qu'on postera ensuite dans la base de donnée (objet proposition)
    public proposition = new Question();

    // ajout la proposition à la base de donnée --> on recupèrera son id générer en BDD pour 
    // poster les réponses correspondantes
    addProposition(proposition): Observable<Question> {
      return this.http.post<Question>('http://localhost:4200/api/propositions/post', proposition, httpOptions)
    }

    // poste les reponses true pour la question en saisie, i correspond à l'id générer pour la proposition
    postRepTrue(reponses,id_proposition) {
      return this.http.post<Answer[]>('http://localhost:4200/api/propostitions/answers/post/many/'+id_proposition, reponses ,httpOptions)
      .subscribe();
    }

    // idem pour les reponses falses
    postRepFalse(reponses,id_proposition) {
      return this.http.post<Answer[]>('http://localhost:4200/api/propostitions/answers/post/many/'+id_proposition, reponses ,httpOptions)
      .subscribe();
    }
}

