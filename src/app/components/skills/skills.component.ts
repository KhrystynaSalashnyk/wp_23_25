import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent], // ← додано сюди
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Microsoft Word', percent: 90 },
    { name: 'Web Designing', percent: 80 },
    { name: 'Graphic Designing', percent: 75 },
    { name: 'Microsoft PowerPoint', percent: 95 }
  ];
}
