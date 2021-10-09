import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{ path: '', component: LayoutComponent }];

export const ApplicationRoutes = RouterModule.forChild(routes);
