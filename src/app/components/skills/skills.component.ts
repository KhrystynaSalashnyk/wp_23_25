import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [NgFor, NgIf, ProgressBarComponent]
})
export class SkillsComponent {
  showSkills = true;

  skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'Angular', level: 65 }
  ];

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }
}

