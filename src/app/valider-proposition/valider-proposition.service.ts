import { Answer } from './../model/answer';
import { Question } from '../model/question';
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
export class ValidationService {
    constructor(private http: HttpClient) {}

    // tableau qui contiendra toutes les propositions en attente de validation
    public propositionArray = new Array<Question>();

    // recupère les questions non validées de la base de données
    getPropositionNotValid(): Observable<Question[]> {
        return this.http.get<Question[]>('http://localhost:4200/api/questionsNotValid/findAll')
    }

    validateServiceProposition(proposition) {
        console.log(proposition)
        return this.http.post<Question>('http://localhost:4200/api/propositions/validate',proposition,httpOptions) ;
    }

    supprimerServiceProposition(proposition) {
        console.log("dans le service !");
        console.log(proposition.id);
        return this.http.delete<Question>('http://localhost:4200/api/propositions/delete/'+proposition.id)
    }

    // supprimerServiceAnswer(answer) {
    //     console.log(answer.id);
    //     return this.http.delete<Answer>('http://localhost:4200/api/answers/delete/'+answer.id);
    // }

}
