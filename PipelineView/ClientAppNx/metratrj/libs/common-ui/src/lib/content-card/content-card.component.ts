import { Component, Input } from '@angular/core';

@Component({
  selector: 'metratrj-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() title = "";
}
