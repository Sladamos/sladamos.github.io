import { Routes } from '@angular/router';
import { DefaultViewComponent } from './views/default-view/default-view.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';

export const routes: Routes = [
    {path: '', component: DefaultViewComponent},
    {path: 'details', component: DetailsViewComponent}
];
