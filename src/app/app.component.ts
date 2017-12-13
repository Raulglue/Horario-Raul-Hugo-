import { ProviderHorarioProvider } from './../providers/provider-horario/provider-horario';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Nav } from 'ionic-angular/components/nav/nav';
import { HorarioPage } from '../pages/horario/horario';
import { MenuPage } from '../pages/menu/menu';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public horariopr: ProviderHorarioProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goHome() {
    this.nav.setRoot(HomePage)
  }
  abrirMenuPagina(curso : string){
    this.nav.setRoot(MenuPage, { clas: curso})
  }
 
}
