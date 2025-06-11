import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class EducationComponent {
  educationList = [
    { degree: 'B.Sc. in Computer Science', university: 'Stanford University', years: '2010–2014' },
    { degree: 'M.Sc. in Software Engineering', university: 'MIT', years: '2015–2017' }
  ];
}
