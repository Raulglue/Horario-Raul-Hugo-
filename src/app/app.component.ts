import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Nav } from 'ionic-angular/components/nav/nav';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  eso: boolean = false;
  bach: boolean = false;
  fp: boolean = false;
  color: string = "primary";
  esoprimero: boolean = false;
  esosegundo: boolean = false;
  esotercero: boolean = false;
  bachprimero: boolean = false;
  bachsegundo: boolean = false;
  fpadmin: boolean = false;
  fpdam: boolean = false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirEso() {
    this.eso = !this.eso;
  }
  abrirBach() {
    this.bach = !this.bach;
  }
  abrirFp() {
    this.fp = !this.fp;
  }
  abrirHome() {

  }
  reset() {
    this.eso = false;
    this.bach = false;
    this.fp = false;
    this.esoprimero = false;
    this.esosegundo = false;
    this.esotercero = false;
    this.bachprimero = false;
    this.bachsegundo = false;
    this.fpadmin = false;
    this.fpdam = false;
  }
  abrirEsoPrimero() {
    this.esoprimero = !this.esoprimero;
  }
  abrirEsoSegundo() {
    this.esosegundo = !this.esosegundo;
  }
  abrirEsoTercero() {
    this.esotercero = !this.esotercero;
  }
  abrirBachPrimero() {
    this.bachprimero = !this.bachprimero;
  }
  abrirBachSegundo() {
    this.bachsegundo = !this.bachsegundo;
  }
  abrirFpAdmin() {
    this.fpadmin = !this.fpadmin;
  }
  abrirFpDam() {
    this.fpdam = !this.fpdam;
  }
}

