import { Component } from '@angular/core';
import { exampleProducts } from '@metratrj/products';

@Component({
  selector: 'metratrj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pp';
  products = exampleProducts;
  navigationProperies: any;
}
