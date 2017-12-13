import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProviderHorarioProvider } from '../../providers/provider-horario/provider-horario';
import { HorarioPage } from '../horario/horario';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  curso: string;
  titulo: string;
  bach: Array<Array<string>> = [["A", "B"], ["A", "B"]]
  eso: Array<Array<string>> = [["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"], ["A", "B", "C"]]
  fp: Array<Array<string>> = [["1º", "2º"], ["1º", "2º"]]
  idFp: Array<number> = [11, 18, 9, 17]
  idEso: Array<number> = [12, 13, 14, 19, 20, 21, 23, 24, 26 , 28, 29, 31]
  idBach: Array<number> = [3, 5, 6, 7]
  idSeleccionada : Array<number>
  cursoBotones: Array<Array<string>>
  nombreCursos: Array<string> = ["Primero", "Segundo", "Tercero", "Cuarto"]
  fpNombres: Array<string> = ["Informatica", "Administracion"]
  constructor(public navCtrl: NavController, public navParams: NavParams, private horariopr : ProviderHorarioProvider) {
    this.curso = this.navParams.get('clas')
    if (this.curso == 'eso') {
      this.titulo = 'ESO'
      this.cursoBotones = this.eso
      this.idSeleccionada = this.idEso
    }
    if (this.curso == 'bach') {
      this.titulo = 'BACHILLERATO'
      this.cursoBotones = this.bach
      this.idSeleccionada = this.idBach
    }
    if (this.curso == 'fp') {
      this.titulo = 'FP'
      this.cursoBotones = this.fp
      this.nombreCursos = this.fpNombres;
      this.idSeleccionada = this.idFp
    }
  }

  goHome() {
    this.navCtrl.setRoot(HomePage)
  }
  async abrirHorario(clase: number) {
    this.horariopr.setClase(clase)
    await this.horariopr.openDDBB();
    
    this.navCtrl.push(HorarioPage)
  }
  damePosicion(i : number, y : number): number{
if (i==0) {
  return (i*2)+y;
}else if (i==2) {
  return ((i*2)+2)+y;
}

{
  return ((i*2)+1)+y;
}

  }
}
