import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { SearchComponent } from './pages/search/search.component';
import { RunSignUpComponent } from './pages/run-sign-up/run-sign-up.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { DistanceComponent } from './pages/distance/distance.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'tilmelding', component: RunSignUpComponent },
  { path: 'tilmelding/tak', component: ThankyouComponent },
  { path: 'deltagerliste', component: SearchComponent },
  { path: 'distancer', component: DistanceComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
