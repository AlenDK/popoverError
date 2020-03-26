import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverSrviceService } from '../popover-srvice.service';
import {PopoverModalComponent} from '../popover-modal/popover-modal.component'
import { PopoverDirectiveDirective} from '../popover-directive.directive';



@NgModule({
  declarations: [PopoverModalComponent, PopoverDirectiveDirective],
  entryComponents: [PopoverModalComponent],
  imports: [
    
  ], 
  providers: [
     PopoverSrviceService
  ],
  exports: [
   [PopoverModalComponent, PopoverDirectiveDirective]
  ]
})
export class PopoverModuleModule { }
