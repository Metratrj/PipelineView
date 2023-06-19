import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule],
  declarations: [BannerComponent, NavigationComponent],
  exports: [BannerComponent, NavigationComponent],
})
export class CommonUiModule {}
