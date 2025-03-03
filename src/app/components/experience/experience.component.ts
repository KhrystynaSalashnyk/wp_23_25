import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  imports: [NgIf, NgFor]
})
export class ExperienceComponent {
  experienceList = [
    {
      position: 'Web Designer',
      company: 'Company Name',
      years: '2018–Present'
    },
    {
      position: 'Graphic Designer',
      company: 'Company Name',
      years: '2015–2018'
    },
    {
      position: 'Marketing Manager',
      company: 'Company Name',
      years: '2012–2015'
    }
  ];

  showList = true;
}
