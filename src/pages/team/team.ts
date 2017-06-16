import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TeamCreatePage } from './create/create';
import { TeamDetailPage } from './detail/detail';

import { FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-team-list',
  templateUrl: 'team.html'
})
export class TeamPage {
  
    itemList: FirebaseListObservable<any[]>;
    newItem = '';

 constructor(public navCtrl: NavController,  public modalCtrl: ModalController, public firebaseService: FirebaseServiceProvider) {
    this.load();
 }


  load(){
    this.itemList = this.firebaseService.getItemList();
  }

  /**
   * 
   */
  openItem(member) {
    this.navCtrl.push(TeamDetailPage, {
      item: member
    });
  }


  /**
   * 
   * 
   */
  addItem() {
    let addModal = this.modalCtrl.create(TeamCreatePage);


    addModal.onDidDismiss(item => {
      if (item) {
        this.firebaseService.addItem(item);
      }
    })
    addModal.present();

  }



 // removeItem(id){

 //  this.firebaseService.removeItem(id);
 // }

}