import { HomePage } from './../home/home';
import { MiModalPage } from './../mi-modal/mi-modal';
import { ProviderHorarioProvider } from './../../providers/provider-horario/provider-horario';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  clase: string;
  public completo: any[] = []
  public nombre: any[] = []
  public claseColores:Array<string>= [];
  public colores : Array<string>= ["rgba(127, 74, 0, 0.5)","rgba(255, 193, 107, 0.5)","rgba(255, 148, 0, 0.5)",
  "rgba(127, 104,72, 0.5)","rgba(204, 146, 57, 0.5)","rgba(255, 224, 178, 0.5)",
  "rgba(204, 164, 136, 0.5)","rgba(255, 174, 117, 0.5)","rgba(255, 213, 170, 0.5)",
  "rgba(255, 205, 170, 0.5)","rgba(127, 103, 85, 0.5)","rgba(204, 191, 178, 0.5)"]
  public horario: Array<Array<string>> =
    [[ "Horario","08:05-09:05", "09:10-10:00", "10:05-10:55", "11:25-12:20", "12:25-13:15", "13:20-14:10"],
    ["Lunes", "", "", "", "", "", ""],
    ["Martes", "", "", "", "", "", ""],
    ["Miercoles", "", "", "", "", "", ""],
    ["Jueves", "", "", "", "", "", ""],
    ["Viernes", "", "", "", "", "", ""]];
  public horarioCopia: Array<Array<string>> =
    [["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]];
  public horarioArray: Array<string> = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
    , "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  public claseCompleta: Array<string> = ["", "", ""]

  constructor(public horarioProv: ProviderHorarioProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.horario = this.horarioProv.horario;
    this.horarioArray = this.horarioProv.horarioArray;
    this.completo = this.horarioProv.completo;
    this.nombre = this.horarioProv.nombre;
    this.organizaArray();

  }
  muestraNombre(clases: string) {
    this.claseCompleta = clases.trim().split(" ", 4);
    for (let index = 0; index < this.claseCompleta.length; index++) {
      this.claseCompleta[index] = this.claseCompleta[index] + " = " + this.completo[this.nombre.indexOf(this.claseCompleta[index])]
    }
    this.showModal()


  }

  showModal() {
    let profileModal = this.modalCtrl.create(MiModalPage, { clases: this.claseCompleta });
    profileModal.present();
  }

  organizaArray() {
    for (let x = 0; x < this.horario.length; x++) {
      for (let y = 0; y < this.horarioCopia.length; y++) {
        this.horarioCopia[y][x] = this.horario[x][y]

      }
    }
    this.horario = this.horarioCopia;
  }
  goHome() {
    this.navCtrl.setRoot(HomePage)
  }
  limpiar() {
    this.completo = []
    this.nombre = []

    this.horario =
      [["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""]];
    this.horarioCopia =
      [["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]];
    this.horarioArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
      , "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

    this.claseCompleta = ["", "", ""]
  }
  dameClase(s : string){
    let estilo : Array <string> = s.trim().split(" ", 4);
    if (this.nombre.indexOf(estilo[0])>=0) {
      return "rgba(104, 12, 232, 0.5)"
    }else{
      return "rgba(255, 224, 112, 0.5)"
    }
  }
 
}
