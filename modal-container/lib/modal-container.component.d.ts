import { Injector, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalContainerComponent {
    private injector;
    modalActivo: boolean;
    modalContainer: ViewContainerRef;
    constructor(injector: Injector);
    openModal(componentType: any, inputs?: any, outputs?: any): void;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalContainerComponent, "lib-modal-container", never, {}, {}, never, never, true, never>;
}
