import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  showList = true;

  experienceList = [
    { position: 'Frontend Developer', company: 'Google', years: '2018–2020' },
    { position: 'Senior Developer', company: 'Microsoft', years: '2020–2023' }
  ];
}
