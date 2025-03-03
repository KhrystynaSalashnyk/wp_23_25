import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [NgFor] // додаємо NgFor!
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Master of Creative Arts',
      university: 'University Name',
      years: '2018–Present'
    },
    {
      degree: 'Bachelor of Arts',
      university: 'University Name',
      years: '2014–2018'
    }
  ];
}
