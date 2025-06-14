import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() percentage!: number;
}
