import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  hobbies = [
    { icon: '✏️', name: 'Writing' },
    { icon: '📖', name: 'Reading Books' },
    { icon: '⚽', name: 'Playing Football' },
    { icon: '📸', name: 'Photography' },
    { icon: '✈️', name: 'Traveling' }
  ];
}
