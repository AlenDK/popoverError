import { Component, OnInit, Input,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover-modal',
  templateUrl: './popover-modal.component.html',
  styleUrls: ['./popover-modal.component.scss'],
})
export class PopoverModalComponent implements OnInit {
  @Input() options: onboardingModalOptions;

  constructor(private modalController: ModalController, public popoverCtrl: PopoverController) { }

  dismiss() {
    this.popoverCtrl.dismiss();  
  }

  ngOnInit() {}

}

export interface onboardingModalOptions {
  title: string;
  message: string;
  icon: string;
}
