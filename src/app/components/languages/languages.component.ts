import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  imports: [NgFor, NgIf, ProgressBarComponent]
})
export class LanguagesComponent {
  showLanguages = true;

  languages = [
    { name: 'English', level: 70 },
    { name: 'French', level: 70 },
    { name: 'Japanese', level: 70 },
    { name: 'Spanish', level: 70 },
    { name: 'German', level: 60 },
    { name: 'Portuguese', level: 80 }
  ];

  toggleLanguages() {
    this.showLanguages = !this.showLanguages;
  }
}
