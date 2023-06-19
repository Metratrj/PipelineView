import { AfterViewInit, Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { exampleProducts } from '@metratrj/products';

@Component({
  selector: 'metratrj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'pp';
  loading = false;
  initalLoadingComplete = false;

  products = exampleProducts;
  navigationProperies: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngAfterViewInit(): void {
    this.initalLoadingComplete = true;
  }
}
