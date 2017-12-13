import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mi-modal',
  templateUrl: 'mi-modal.html',
})
export class MiModalPage {
  clases: Array<string>;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.clases = this.viewCtrl.getNavParams().get('clases');
  }
    dismiss() {
    this.viewCtrl.dismiss();
  }

}