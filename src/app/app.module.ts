import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverSrviceService } from './popover-srvice.service';
import {PopoverModalComponent} from './popover-modal/popover-modal.component'
import { PopoverDirectiveDirective} from './popover-directive.directive';

@NgModule({
  declarations: [AppComponent, PopoverModalComponent, PopoverDirectiveDirective],
  entryComponents: [PopoverModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    PopoverSrviceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [PopoverModalComponent, PopoverDirectiveDirective]
})
export class AppModule {}
