import { TypeQuestion } from './../model/typeQuestion';
import { Answer } from './../model/answer';
import { CandidatRep, ReplyCheck } from './../model/candidatRep';

import { QuestionnaireService } from './questionnaire.service';
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter-questions/filter-questions.service';
import { Results } from '../model/results';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  // on va récupérer le temps du questionnaire
  public timeQuestionnaire = new Number();
  // listes vide qu'on remplit à l'initialisation avec FilterService
  public questions = [];
  // ici on stocke les réponses des candidats sous un tableau d'objet de type candidatRep
  public candidatResponses = new Array<CandidatRep>();


  constructor(private _filterService: FilterService) { }


  ngOnInit() {

    // recupère le temps du questionanire voulu
    this.timeQuestionnaire = this._filterService.timeQuestionnaire;

    // rempli la liste de questions à affciher
    this.questions = this._filterService.questionsService;

    // pour chaques question on va créer un object réponse candidatRep qui contient
    // l'id de la question et les différentes checkbox initialisée à false
    this.questions.forEach(e => {

      // créer un objetc candidatRep pour chaque question --> référence de l'id de la question correspodante
      let candidatRep = new CandidatRep();
      candidatRep.questionId = e.id;

      // le deuxième argument de candidatRep est un liste d'objet de type ReplyCheck
      candidatRep.reply = new Array<ReplyCheck>();

      for (var j = 0; j < e.answers.length; j++) {

        let replyCheck = new ReplyCheck();

        // on stocke dans replyCheck l'id de l'answer en lien avec la réponse cochée
        replyCheck.answerId = e.answers[j].id;
        replyCheck.checked = false;

        candidatRep.reply.push(replyCheck);
      }

      this.candidatResponses.push(candidatRep);
      console.log(candidatRep);
    });
  }


  // on veut changer la valeur de la checkbox enregistré dans le tableau de réponse candidat
  // k indice de la question pointée //  item pointe une answer avec i son index
  onChangeAnswer(item, question, i, k) {

    // euh ??
    item.checked = !item.checked;

    // on change la valeur du check dans le tableau de réponses du candidats (initilisée à false de base)
    this.candidatResponses[k].reply[i].checked = item.checked;
  }


  // on test le nombre de réponses valide en comparant la valeur du checkbox avec validity des questions
  nbrErreurs() {

    var erreur = 0;
    // index pointe l'index dans le tableau questions
    this.questions.forEach((e, index) => {

      for (var j = 0; j < e.answers.length; j++) {

        if (this.candidatResponses[index].reply[j].checked == e.answers[j].validity) {
          // do something
        } else {
          erreur += 1;
        }

      }
    });

    console.log("nombre d'erreurs :", erreur);
  }


  timetotal() {
    console.log("L'utilisateur voulait une questionanire de ", this._filterService.timeQuestionnaire, " minutes")
    let totalTime = new Number();
    this.questions.forEach(quest => {
      totalTime = totalTime + quest.duration_question;
      console.log("durée de la question en cours :", quest.duration_question)
    });
    console.log("temps total des questions générées : ", totalTime);
  }


  analyseReponses() {

    // création d'un objet résultat qu'on devra poster dans la BDD --> un pour chaque ANSWER !!
    for (var i = 0; i < this.candidatResponses[0].reply.length; i++) {
      console.log("REPONSES", this.candidatResponses[0].reply[i]);
      let result = new Results();
      result.id_quiz = 1;

      if (this.questions[0].typeQuestion.type == "QCM") {
        // on met à zero les colonnes relatives aux questions ouvertes
        result.correctionOpenQuestion = false;
        result.openAnswerCandidate = "";
        result.pointOpenQuestion = 0;
      } else {
        // osef
      }

      // on set les infos questions fermés
      result.closedAnswerCandidate = this.candidatResponses[0].reply[i].checked; // réponse qu'à donnée le candidat pour cette answer

      if (result.closedAnswerCandidate == this.questions[0].answers[i].validity) {
        console.log("ok le candidat a vrai pour cette réponse");
        result.pointClosedQuestion = true; // true si cette réponses était bonne
      } else {
        console.log("ok le candidat a faux pour cette réponse");
        result.pointClosedQuestion = false;
      }

      console.log("Resultat finale pour l'answer considérée", result);
    }
  }
}
