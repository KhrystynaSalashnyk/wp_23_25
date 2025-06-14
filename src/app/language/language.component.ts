import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressBarComponent} from '../progress-bar/progress-bar.component';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent]
})
export class LanguageComponent {
  showLanguage = true;

  languages = [
    { name: 'English', level: 90 },
    { name: 'French', level: 75 },
    { name: 'Japanese', level: 60 },
    { name: 'Spanish', level: 70 },
    { name: 'German', level: 65 }
  ];

  toggleLanguages() {
    this.showLanguage = !this.showLanguage;
  }
}
