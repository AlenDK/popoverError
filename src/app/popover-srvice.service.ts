import { Injectable } from '@angular/core';
import { PopoverController, IonApp } from '@ionic/angular';




import { ModalController } from '@ionic/angular';

import { PopoverModalComponent, onboardingModalOptions } from './popover-modal/popover-modal.component';
import { delay } from 'rxjs/operators';
//Maybe remove IonApp and delay
@Injectable()
export class PopoverSrviceService {

    constructor(private modalController: ModalController,
        private popoverController: PopoverController) {
    }

    public async createPopover(options: onboardingModalOptions, ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverModalComponent,
            translucent: true,
            event: ev,
            showBackdrop: true,
            cssClass: 'onboarding_popover',
            animated: true,
            componentProps: {
                options: options
            },
        });
        return await popover.present();
    }
}