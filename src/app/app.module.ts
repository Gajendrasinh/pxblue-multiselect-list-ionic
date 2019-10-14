import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgModule, } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './components/empty-state.component';

@NgModule({
  declarations: [AppComponent, EmptyStateComponent],
  entryComponents: [],
  imports: [
    // BrowserModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
