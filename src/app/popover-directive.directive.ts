import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { PopoverSrviceService } from './popover-srvice.service';


import { onboardingModalOptions } from './popover-modal/popover-modal.component';


@Directive({
  selector: '[first-time-onboarding]'
})
export class PopoverDirectiveDirective implements OnInit {
  @Input('first-time-onboarding') inputPopover: onboardingInput;

  constructor(private el: ElementRef,
    private popover: PopoverSrviceService,
  ) { }

  ngOnInit() {

    this.showPopover();

  }

  showPopover() {
    this.popover.createPopover({
      title: this.inputPopover.modalOptions.title,
      message: this.inputPopover.modalOptions.message,
      icon: this.inputPopover.modalOptions.icon,
    },
      this.eventGetCoordinates
    );
  }

  eventGetCoordinates = {
    target: {
      getBoundingClientRect: () => {
        const rect = this.el.nativeElement.getBoundingClientRect();
        return {
          top: (rect.y + rect.height),
          left: (rect.x + (rect.width / 2))
        };
      }
    }
  };
}

export interface onboardingInput {
  modalOptions: onboardingModalOptions,
  persistField: boolean
}

