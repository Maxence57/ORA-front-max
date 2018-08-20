import { LangProg } from './langProg';
import { GcmLevel } from './gcmLevel';
import { GcmCategorie } from './gcmCategorie';
import { TypeQuestion } from './typeQuestion';

export class Question {
    id: number;
    id_redac_question: number;
    id_corr_question: number;
    typeQuestion: TypeQuestion;
    enonce_question: String;
    gcmCategorie: GcmCategorie;
    gcmLevel: GcmLevel;
    duration_question: number;
    creationdate: Date;
    languageQuestion: LangProg;
    id_language: number; 
    id_quizdefault: number;
    isValide: boolean;
}
