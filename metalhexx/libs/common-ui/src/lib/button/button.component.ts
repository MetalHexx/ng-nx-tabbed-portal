import { Component, Input } from '@angular/core';

@Component({
  selector: 'metalhexx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() url?: string;
  @Input() text?: string;
}
