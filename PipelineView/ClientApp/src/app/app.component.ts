import { Component } from '@angular/core';
import { exampleProducts } from '@app/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  products = exampleProducts;
}
