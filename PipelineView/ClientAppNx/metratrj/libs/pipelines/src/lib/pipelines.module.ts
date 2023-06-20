import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineListComponent } from './pipeline-list/pipeline-list.component';
import { PipelineDetailComponent } from './pipeline-detail/pipeline-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PipelineListComponent, PipelineDetailComponent],
  exports: [PipelineListComponent, PipelineDetailComponent],
})
export class PipelinesModule {}
