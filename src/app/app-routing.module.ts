import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './Pages/crew/crew.component';
import { DestinationComponent } from './Pages/destination/destination.component';
import { HomeComponent } from './Pages/home/home.component';
import { TechnologyComponent } from './Pages/technology/technology.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Crew', component: CrewComponent},
  {path: 'Destination', component: DestinationComponent},
  {path: 'Technology', component:TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
