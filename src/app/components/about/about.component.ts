import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [NgIf]
})
export class AboutComponent {
  showText = true;
}
