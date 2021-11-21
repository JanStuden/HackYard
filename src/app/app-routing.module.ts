import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'welcome', 
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-plant',
    loadChildren: () => import('./add-plant/add-plant.module').then( m => m.AddPlantPageModule)
  },
  {
    path: 'plant-view/:name',
    loadChildren: () => import('./plant-view/plant-view.module').then( m => m.PlantViewPageModule)
  },
  {
    path: 'eco-guide',
    loadChildren: () => import('./eco-guide/eco-guide.module').then( m => m.EcoGuidePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-view/:id',
    loadChildren: () => import('./event-view/event-view.module').then( m => m.EventViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }