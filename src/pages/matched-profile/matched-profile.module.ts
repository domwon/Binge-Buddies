import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchedProfilePage } from './matched-profile';

@NgModule({
  declarations: [
    MatchedProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchedProfilePage),
  ],
})
export class MatchedProfilePageModule {}
