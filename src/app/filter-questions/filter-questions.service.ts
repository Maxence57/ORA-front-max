import { TypeQuestion } from './../model/typeQuestion';
import { GcmCategorie } from './../model/gcmCategorie';
import { LangProg } from './../model/langProg';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { Filter } from "./filter-questions";
import { HttpHeaders } from '@angular/common/http';
import { Question } from "../model/question";



const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  

@Injectable()
export class FilterService {
    constructor(private http: HttpClient) {}

    // durée du questionnaire
    public timeQuestionnaire = new Number();

    public questionsService = [];

    addFilter(filter: Filter): Observable<Question[]> {
        return this.http.post<Question[]>('http://localhost:4200/api/questions', filter, httpOptions)
    }

    public langProgService = [];

    getLangProg(): Observable<LangProg[]> {
        return this.http.get<LangProg[]>('http://localhost:4200/api/langProg/findAll', httpOptions)
    }

    public catGcmService = [];

    getCatGcm(): Observable<GcmCategorie[]> {
        return this.http.get<GcmCategorie[]>('http://localhost:4200/api/catGcm/findAll', httpOptions)
    }

    public typeQuestionService = [];

    getTypeQuestion(): Observable<TypeQuestion[]> {
        return this.http.get<TypeQuestion[]>('http://localhost:4200/api/typeQuestion/findAll', httpOptions)
    }


}
