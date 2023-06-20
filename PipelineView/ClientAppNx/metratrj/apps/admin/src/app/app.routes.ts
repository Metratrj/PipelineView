import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipelineDetailComponent, PipelineListComponent } from '@metratrj/pipelines'

export const appRoutes: Route[] = [
  {path: 'dashboard', component: DashboardComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'pipelines',
    component: PipelineListComponent,
    children: [
      { path: 'childpath', component: PipelineDetailComponent }
    ]
  },
];
