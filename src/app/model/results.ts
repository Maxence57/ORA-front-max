import { Answer } from './answer';
import { Question } from './question';


export class Results {
    id: number;
    id_quiz: number;
    question: Question;
    answer: Answer;
    closedAnswerCandidate: Boolean;
    pointClosedQuestion: Boolean;
    openAnswerCandidate: String;
    correctionOpenQuestion: Boolean;
    pointOpenQuestion: number;
}