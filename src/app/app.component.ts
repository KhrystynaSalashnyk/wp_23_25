import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component'; // <-- ОЦЕ важливо

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'variant24';
}
