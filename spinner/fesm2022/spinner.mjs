import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class SpinnerService {
    constructor() {
        this.isLoading$ = new BehaviorSubject(false);
    }
    get isLoading() {
        return this.isLoading$.asObservable();
    }
    mostrar() {
        this.isLoading$.next(true);
        if (this.temporizador) {
            clearTimeout(this.temporizador);
        }
        this.temporizador = setTimeout(() => {
            this.ocultar();
        }, 60000);
    }
    ocultar() {
        this.isLoading$.next(false);
        if (this.temporizador) {
            clearTimeout(this.temporizador);
            this.temporizador = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class SpinnerComponent {
    constructor(_spinnerService) {
        this._spinnerService = _spinnerService;
        this.isLoading = true;
        this._spinnerService.isLoading$.subscribe(spinner => {
            this.isLoading = spinner;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerComponent, deps: [{ token: SpinnerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SpinnerComponent, isStandalone: true, selector: "lib-spinner", ngImport: i0, template: `
    <div
      *ngIf="isLoading"
      class="d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100 z-3 bg-white">
      <div 
        class="position-fixed top-50 spinner-border text-primary"
        role="status">
      </div>
      <p class="position-fixed mt-5 top-50">Cargando...</p>
    </div>
  `, isInline: true, styles: [".spinner-border{height:40px;width:40px;border-width:5px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-spinner', standalone: true, imports: [
                        CommonModule
                    ], template: `
    <div
      *ngIf="isLoading"
      class="d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100 z-3 bg-white">
      <div 
        class="position-fixed top-50 spinner-border text-primary"
        role="status">
      </div>
      <p class="position-fixed mt-5 top-50">Cargando...</p>
    </div>
  `, styles: [".spinner-border{height:40px;width:40px;border-width:5px}\n"] }]
        }], ctorParameters: () => [{ type: SpinnerService }] });

/*
 * Public API Surface of spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SpinnerComponent, SpinnerService };
//# sourceMappingURL=spinner.mjs.map
