import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent,
    LanguagesComponent,
    ContactComponent,
    NgFor,
    NgIf,
    NgOptimizedImage
  ]
})
export class AppComponent {
  title = 'wp_23';
}
