import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
  imports: [NgIf, NgFor]
})
export class HobbiesComponent {
  hobbiesList = ['Writing', 'Reading Books', 'Playing Football', 'Photography', 'Traveling'];
  showList = true;
}
