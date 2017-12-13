import { HorarioPage } from './../../pages/horario/horario';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';
import { NavParams } from 'ionic-angular/navigation/nav-params';

/*
  Generated class for the ProviderHorarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderHorarioProvider {
  public clase: number ;
  public list: string[] = []
  public completo: string[] = []
  public nombre: string[] = []
  public hora: any[] = []
  public dia: any[] = []
  public horario: Array<Array<string>> =
  [[ "Horario","08:05-09:05", "09:10-10:00", "10:05-10:55", "11:25-12:20", "12:25-13:15", "13:20-14:10"],
  ["Lunes", "", "", "", "", "", ""],
  ["Martes", "", "", "", "", "", ""],
  ["Miercoles", "", "", "", "", "", ""],
  ["Jueves", "", "", "", "", "", ""],
  ["Viernes", "", "", "", "", "", ""]];
  public horarioArray: Array<string> = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
    , "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  constructor(public http: HttpClient, public sqlite: SQLite, private platform: Platform) {
  }
  setClase(clas: any) {
    this.list = []
    this.completo = []
    this.nombre= []
    this.hora = []
    this.dia= []
    this.horario = [[ "Horario","08:05-09:05", "09:10-10:00", "10:05-10:55", "11:25-12:20", "12:25-13:15", "13:20-14:10"],
    ["Lunes", "", "", "", "", "", ""],
    ["Martes", "", "", "", "", "", ""],
    ["Miercoles", "", "", "", "", "", ""],
    ["Jueves", "", "", "", "", "", ""],
    ["Viernes", "", "", "", "", "", ""]];
    this.horarioArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
      , "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    this.clase = clas;
  }

  public openDDBB(): Promise<void> {
    //create vale para crear una BBDD o para abrir una ya creada
   return new Promise((resolve, reject) =>{ this.sqlite.create(
      //Esta es la operacion que va a abrir el objeto

      {
        name: 'Horario16.db',
        location: 'default',
        createFromLocation: 1
      }
    ).then(
      //dentro del then de create
      //una fat arrow
      (db: SQLiteObject) => {
        //La consulta del execute DEBE O SEA DEBE, EN SERIO, probarse antes en SQLiteStudio
        db.executeSql("SELECT materia.nombre,materia.completo,diaClase.idDiaSemana, materiahoraclase.idHoraClase " +
          " from materia, materiahoraclase, horaClase,diaClase,grupo, estudios " +
          " where  materia.idMateria = materiahoraclase.idMateria AND " +
          " materiahoraclase.idHoraClase = horaClase.idHoraClase AND " +
          " horaClase.idDiaClase = diaClase.idDiaClase AND " +
          " diaClase.idGrupo = grupo.idGrupo AND " +
          " grupo.idEstudios= estudios.idEstudios AND " +
          " grupo.idGrupo=?  " +
          " ORDER BY diaClase.idDiaClase, horaClase.idHoraClase ASC ", [this.clase])
          .then(
          //dentro del then del executeSQL
          //El resultado se recoge en el fatarrow
          (data) => {
            for (let i = 0; i < data.rows.length; i++) {
              this.completo.push(data.rows.item(i).completo);
              this.nombre.push(this.quitaEspacios(data.rows.item(i).nombre));
              this.hora.push(data.rows.item(i).idHoraClase);
              this.dia.push(data.rows.item(i).idDiaSemana);
            }
            this.ponBloque();
            console.log("Execute successful")
          resolve();

          }
          ).catch(
          (e) => {
            console.log("error en execute");
          }
          );
      }
      ).catch(
      (e) => {
        console.log("error en open ddbb");
      }
      );})
  }

  public quitaEspacios(s : string) : string{
    return s.replace(/ /g, '');
  }
 

  public ponBloque() {
    var y = 1;
    var index = 0;
    for (let i = 1; i < this.horario.length; i++) {
      y = 1;
      this.dia = ["", "", "", "", "", "", ""];
      for (index; index < this.hora.length && y < 7; index++) {

        if (this.hora[index] == this.hora[index + 1]) {

          this.dia[y] = this.dia[y] + " " + this.nombre[index]
        } else {
          this.dia[y] = this.dia[y] + " " + this.nombre[index]
          y++;
          this.horario[i][y - 1] = this.dia[y - 1]
        }
      }
    }
  }
}
