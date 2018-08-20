import { ValidationService } from './valider-proposition/valider-proposition.service';
import { PropositionService } from './proposer-quest/proposer-quest.service';
import { FilterService } from './filter-questions/filter-questions.service';
import { QuestionnaireService } from './questionnaire/questionnaire.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinymceModule } from 'angular2-tinymce';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';







import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';
import { FilterQuestionsComponent } from './filter-questions/filter-questions.component';
import { HomeComponent } from './home/home.component';
import { ProposerQuestComponent } from './proposer-quest/proposer-quest.component';
import { ProposerQcmComponent, NoSanitizePipe } from './proposer-qcm/proposer-qcm.component';
import { ValiderPropositionComponent } from './valider-proposition/valider-proposition.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { CreerProfilComponent } from './creer-profil/creer-profil.component';
import { CorrigerQuestionsComponent } from './corriger-questions/corriger-questions.component';
import { TestComponent } from './test/test.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CriteresPersonnaliteComponent } from './criteres-personnalite/criteres-personnalite.component';
import { FinQuestionnaireComponent } from './fin-questionnaire/fin-questionnaire.component';
import { ProposerVraiFauxComponent } from './proposer-vrai-faux/proposer-vrai-faux.component';
import { ProposerOuiNonComponent } from './proposer-oui-non/proposer-oui-non.component';
import { ProposerQuestionOuverteComponent } from './proposer-question-ouverte/proposer-question-ouverte.component';
import { ChoixQuestionnaireComponent } from './choix-questionnaire/choix-questionnaire.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'filterquestions', component: FilterQuestionsComponent },
  { path: 'proposerquestion', component: ProposerQuestComponent },
  { path: 'proposerQcm', component: ProposerQcmComponent },
  { path: 'validerQuestion', component: ValiderPropositionComponent },
  { path: 'creerProfil', component: CreerProfilComponent },
  { path: 'test', component: TestComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'criteresPersonnalite', component: CriteresPersonnaliteComponent },
  { path: 'finQuestionnaire', component: FinQuestionnaireComponent },
  { path: 'proposerOuiNon', component: ProposerOuiNonComponent },
  { path: 'proposerVraiFaux', component: ProposerVraiFauxComponent },
  { path: 'proposerQuestionOuverte', component: ProposerQuestionOuverteComponent },
  { path: 'choixQuestionnaire', component: ChoixQuestionnaireComponent },



];


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    FilterQuestionsComponent,
    LoginComponent,
    HomeComponent,
    ProposerQuestComponent,
    ProposerQcmComponent,
    ValiderPropositionComponent,
    TinyEditorComponent,
    NoSanitizePipe,
    CreerProfilComponent,
    CorrigerQuestionsComponent,
    TestComponent,
    AuthentificationComponent,
    CriteresPersonnaliteComponent,
    FinQuestionnaireComponent,
    ProposerVraiFauxComponent,
    ProposerOuiNonComponent,
    ProposerQuestionOuverteComponent,
    ChoixQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    EditorModule,
    TinymceModule.withConfig({
      branding: false,
      plugins: "lists",
      theme: 'modern',
      menubar: false
    })
  ],
  providers: [QuestionnaireService, FilterService, PropositionService, ValidationService,NoSanitizePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
