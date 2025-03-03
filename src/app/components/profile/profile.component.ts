import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {}
