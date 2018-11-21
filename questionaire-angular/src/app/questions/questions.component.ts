import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionMock: Question = {
    id: 1,
    title: 'questino title',
    answers: ['13','24'],
  };
  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    
  }

}
