import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() title = '';
}
