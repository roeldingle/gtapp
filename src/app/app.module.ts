import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { GooglePlus } from '@ionic-native/google-plus';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider} from '../providers/firebase-service/firebase-service';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/*team*/
import { TeamPage } from '../pages/team/team';
import { TeamDetailPage } from '../pages/team/detail/detail';
import { TeamCreatePage } from '../pages/team/create/create';


export const firebaseConfig = {
    apiKey: "AIzaSyAYmwTBYbt2ihC_bNoOif_qNI1yo3vY97A",
    authDomain: "gtapp-a8dd2.firebaseapp.com",
    databaseURL: "https://gtapp-a8dd2.firebaseio.com",
    projectId: "gtapp-a8dd2",
    storageBucket: "gtapp-a8dd2.appspot.com",
    messagingSenderId: "233277990493"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    /*team*/
    TeamPage,
    TeamDetailPage,
    TeamCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    /*team*/
    TeamPage,
    TeamDetailPage,
    TeamCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    GooglePlus
  ]
})
export class AppModule {}
