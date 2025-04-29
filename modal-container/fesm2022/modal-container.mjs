import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { ViewContainerRef, ViewChild, Component } from '@angular/core';

class ModalContainerComponent {
    constructor(injector) {
        this.injector = injector;
        this.modalActivo = false;
    }
    openModal(componentType, inputs = {}, outputs = {}) {
        if (this.modalActivo) {
            return;
        }
        this.modalActivo = true;
        const componentRef = this.modalContainer.createComponent(componentType, {
            injector: this.injector
        });
        // Establecer inputs
        for (const input in inputs) {
            if (inputs.hasOwnProperty(input)) {
                componentRef.instance[input] = inputs[input];
            }
        }
        // Manejar outputs (eventos)
        for (const output in outputs) {
            if (outputs.hasOwnProperty(output)) {
                componentRef.instance[output].subscribe(outputs[output]);
            }
        }
    }
    closeModal() {
        this.modalActivo = false;
        this.modalContainer.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalContainerComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ModalContainerComponent, isStandalone: true, selector: "lib-modal-container", viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: `
      <div [ngClass]="modalActivo ? 'modal is-active' : 'modal'">
      <div class="modal-background" (click)="closeModal()"></div>
      <div class="modal-content">
        <div class="box">
          <ng-template #modalContainer></ng-template>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".modal-content{width:90%;height:85%;overflow:hidden}.box{height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal-container', standalone: true, imports: [
                        CommonModule
                    ], template: `
      <div [ngClass]="modalActivo ? 'modal is-active' : 'modal'">
      <div class="modal-background" (click)="closeModal()"></div>
      <div class="modal-content">
        <div class="box">
          <ng-template #modalContainer></ng-template>
        </div>
      </div>
    </div>
  `, styles: [".modal-content{width:90%;height:85%;overflow:hidden}.box{height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }], propDecorators: { modalContainer: [{
                type: ViewChild,
                args: ['modalContainer', { read: ViewContainerRef }]
            }] } });

/*
 * Public API Surface of modal-container
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ModalContainerComponent };
//# sourceMappingURL=modal-container.mjs.map
