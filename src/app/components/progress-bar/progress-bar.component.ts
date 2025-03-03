import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: number = 0;

  animatedProgress: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['progress']) {
      this.animateProgress();
    }
  }

  animateProgress() {
    const step = () => {
      if (this.animatedProgress < this.progress) {
        this.animatedProgress += 0.6; // можна налаштувати швидкість анімації
        requestAnimationFrame(step);
      } else {
        this.animatedProgress = this.progress; // коригуємо до кінця
      }
    };
    step();
  }
}
