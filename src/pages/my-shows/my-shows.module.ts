import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShowsPage } from './my-shows';

@NgModule({
  declarations: [
    MyShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyShowsPage),
  ],
})
export class MyShowsPageModule {}
