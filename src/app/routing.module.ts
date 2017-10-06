import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
