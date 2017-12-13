import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiModalPage } from './mi-modal';

@NgModule({
  declarations: [
    MiModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MiModalPage),
  ],
})
export class MiModalPageModule {}
