import { Component, Input } from '@angular/core';

@Component({
  selector: 'metalhexx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title?: string;
}
