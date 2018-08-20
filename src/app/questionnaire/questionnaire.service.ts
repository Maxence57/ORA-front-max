import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Question } from "../model/question";
import { Observable } from "rxjs";

@Injectable()
export class QuestionnaireService {
    constructor(private http: HttpClient) {}

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>('http://localhost:4200/api/questions/findAll');

    }

}