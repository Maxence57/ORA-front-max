import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  choice: string;
  options: string[] = ['Créer un profil', 'Proposer une quesiton', 'Valider les questions proposées', 'Proposer une', 'Test'];

  constructor() { }

  ngOnInit() {
  }

}
