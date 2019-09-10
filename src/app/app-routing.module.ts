import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'bt-status', loadChildren: './pages/bt-status/bt-status.module#BtStatusPageModule' },
  { path: 'pin-code', loadChildren: './pages/pin-code/pin-code.module#PinCodePageModule' },
  { path: 'wifi-scan', loadChildren: './pages/wifi-scan/wifi-scan.module#WifiScanPageModule' },
  { path: 'wifi-input', loadChildren: './pages/wifi-input/wifi-input.module#WifiInputPageModule' },
  { path: 'wifi-status', loadChildren: './pages/wifi-status/wifi-status.module#WifiStatusPageModule' },
  { path: 'name-input', loadChildren: './pages/name-input/name-input.module#NameInputPageModule' },
  { path: 'name-complete', loadChildren: './pages/name-complete/name-complete.module#NameCompletePageModule' },
  { path: 'setup-complete', loadChildren: './pages/setup-complete/setup-complete.module#SetupCompletePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
