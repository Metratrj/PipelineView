import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, NavigationComponent],
  exports: [BannerComponent, NavigationComponent],
})
export class CommonUiModule {}
