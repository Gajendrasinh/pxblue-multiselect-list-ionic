import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any[] = [];
  enableFooter = false;
  selectedItems = [];
  Colors: Object = Colors;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }
  }

  createItem(index, randomStatus) {
    return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status: randomStatus };
  }
  createRandomItem() {
    const int = parseInt((Math.random() * 100) + '', 10);
    const randomStatus = Math.random() >= 0.3 ? "normal" : "alarm";
    return this.createItem(int, randomStatus);
  }

  onSelected(item: any) {
    if (this.selectedItems.indexOf(item) === -1) {
      this.selectedItems.push(item);
    }
    else {
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    }
  }
  isSelected(item: any) {
    return this.selectedItems.indexOf(item) !== -1;
  }

  deleteItems() {
    this.selectedItems.forEach((item) => {
      let index = this.data.indexOf(item);
      this.data.splice(index, 1);
    });
    this.selectedItems = [];
  }

  cancelItems() {
    this.selectedItems = [];
  }

}
