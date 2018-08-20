import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Mark {
  value: string;
  viewValue: string;
}

export interface Langlevel {
  value: string;
  viewValue: string;
}

export interface CommentaireRecrutement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-criteres-personnalite',
  templateUrl: './criteres-personnalite.component.html',
  styleUrls: ['./criteres-personnalite.component.css']
})
export class CriteresPersonnaliteComponent implements OnInit {
  disableSelect = new FormControl(false);
  constructor() { }

  marks: string[] = [
    '+', '++', '+++'
  ];

  langlevels: string[] = [
    'Aucune connaissance', 'Notions / Débutant', 'Vocabulaire technique', 'Courant', 'Bilingue'
  ];

  commentaireRecrutements: string[] = [
    'Positionnement sur un autre poste', 'Défavorable', 'Favorable', 'Très favorable'
  ];

  ngOnInit() {
  }

}
