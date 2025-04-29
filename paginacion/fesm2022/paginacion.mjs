import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, HostListener, Output, Input, Component } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class PaginacionComponent {
    constructor() {
        this.paginas = [];
        this.cantidadVisible = 25;
        this.cantidadElementos = 0;
        this.cantidadTotalElementos = 0;
        this.nombreElementos = '';
        this.cantidadSeleccionada = new EventEmitter();
        this.paginaSeleccionada = new EventEmitter();
        /**
         * Propiedades de visualización de botones,
         * inicio y fin son las posiciones (NO los items)
         */
        this.inicioVisible = 0;
        this.paginaActual = 1;
        this.finVisible = 2;
        this.labels = {
            todosElementos: 'Todos',
            paginaActual: '',
            elementosVisibles: ''
        };
    }
    ngOnInit() {
        this.establecerBotonesVisibles();
    }
    onResize(event) {
        this.establecerBotonesVisibles();
        this.actualizarLabels();
    }
    iniciarPaginacion(cantidadTotal, cantidadActual, cantidadPaginas) {
        this.cantidadTotalElementos = cantidadTotal;
        this.cantidadElementos = cantidadActual;
        this.paginas = [];
        this.cantidadVisible = this.cantidadTotalElementos >= this.cantidadVisible
            ? this.cantidadVisible
            : 0;
        for (let index = 0; index < cantidadPaginas; index++) {
            this.paginas.push(index + 1);
        }
        this.actualizarLabels();
    }
    actualizarLabels() {
        const esPantallaMediana = window.innerWidth <= 800;
        if (this.paginas.length > 0) {
            let cantidadInicial = (this.cantidadElementos * (this.paginaActual - 1)) + 1;
            let cantidadFinal = this.cantidadElementos * this.paginaActual;
            this.labels.paginaActual = `${cantidadInicial} - ${cantidadFinal} de ${this.cantidadTotalElementos}`;
        }
        else {
            this.labels.paginaActual = '';
        }
        this.labels.elementosVisibles = esPantallaMediana ? `${this.nombreElementos}` : `${this.nombreElementos} por página`;
    }
    seleccionarPagina(pagina) {
        this.paginaActual = pagina;
        const posicionActual = this.paginaActual - 1;
        this.onPaginaSeleccionada();
        const esPantallaGrande = window.innerWidth >= 720;
        const esPantallaMediana = window.innerWidth >= 620 && window.innerWidth < 720;
        const primeraPagina = this.paginaActual === 1;
        const ultimaPagina = this.paginaActual === this.obtenerUltimaPagina();
        if (primeraPagina) {
            this.inicioVisible = 0;
            this.finVisible = Math.min(this.paginas.length - 1, esPantallaGrande ? 2 : esPantallaMediana ? 1 : 0);
        }
        else if (ultimaPagina) {
            this.finVisible = posicionActual;
            this.inicioVisible = Math.max(0, esPantallaGrande ? posicionActual - 2 : esPantallaMediana ? posicionActual - 1 : posicionActual);
        }
        else {
            this.inicioVisible = esPantallaGrande ? posicionActual - 1 : posicionActual;
            this.finVisible = this.inicioVisible + (esPantallaGrande ? 2 : esPantallaMediana ? 1 : 0);
        }
    }
    moverPagina(derecha) {
        let posicion = this.paginaActual - 1;
        if (derecha) {
            posicion += 1;
        }
        else {
            posicion -= 1;
        }
        this.seleccionarPagina(this.paginas[posicion]);
    }
    obtenerUltimaPagina() {
        return this.paginas[(this.paginas.length - 1)];
    }
    onCantidadSeleccionada() {
        this.paginaActual = 1;
        this.inicioVisible = 0;
        this.establecerBotonesVisibles();
        this.cantidadSeleccionada.emit(this.cantidadVisible);
        this.onPaginaSeleccionada();
    }
    onPaginaSeleccionada() {
        this.paginaSeleccionada.emit(this.paginaActual);
    }
    establecerBotonesVisibles() {
        if (window.innerWidth >= 720) {
            this.finVisible = 2;
        }
        else if (window.innerWidth >= 620) {
            this.finVisible = 1;
        }
        else {
            this.finVisible = 0;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PaginacionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: PaginacionComponent, isStandalone: true, selector: "app-paginacion", inputs: { nombreElementos: "nombreElementos" }, outputs: { cantidadSeleccionada: "cantidadSeleccionada", paginaSeleccionada: "paginaSeleccionada" }, host: { listeners: { "window:resize": "onResize($event)" } }, ngImport: i0, template: "<div id=\"paginacion\" class=\"columns is-mobile\">\r\n\r\n    <div class=\"column is-4 is-align-self-center elementos-visibles\">\r\n        <div class=\"field has-addons\">\r\n            <div class=\"control select is-small mr-1 is-align-self-center\">\r\n                <select name=\"cantidad\" [(ngModel)]=\"cantidadVisible\" (change)=\"onCantidadSeleccionada()\">\r\n                    <option *ngIf=\"cantidadTotalElementos >= 25\" [ngValue]=\"25\">25</option>\r\n                    <option *ngIf=\"cantidadTotalElementos >= 50\" [ngValue]=\"50\">50</option>\r\n                    <option *ngIf=\"cantidadTotalElementos >= 100\" [ngValue]=\"100\">100</option>\r\n                    <option [ngValue]=\"0\">{{labels.todosElementos}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"control is-align-self-center\" [ngClass]=\"cantidadVisible == 0 ? 'is-hidden' : ''\">\r\n                <label class=\"is-size-7-mobile\" [innerHTML]=\"labels.elementosVisibles\"></label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"column is-align-self-center column-buttons\"\r\n        [ngStyle]=\"{'visibility': paginas.length <= 1 ? 'hidden' : 'visible', 'margin-top': paginas.length <= 1 ? '-3rem' : '0'}\">\r\n\r\n        <div class=\"buttons has-addons is-centered\">\r\n\r\n            <button class=\"button is-small\" [disabled]=\"paginaActual == 1\" (click)=\"seleccionarPagina(1)\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-angle-double-left\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <button class=\"button is-small\" (click)=\"moverPagina(false)\" [disabled]=\"paginaActual == 1\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-chevron-left\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <div class=\"control\" *ngFor=\"let item of paginas; let i = index\">\r\n                <button *ngIf=\"i >= inicioVisible && i <= finVisible\" class=\"button is-small\"\r\n                    [ngClass]=\"paginaActual == item ? 'is-primary' : ''\" (click)=\"seleccionarPagina(item)\">\r\n                    {{item.toString()}}\r\n                </button>\r\n            </div>\r\n\r\n            <button class=\"button is-small\" (click)=\"moverPagina(true)\"\r\n                [disabled]=\"paginaActual == obtenerUltimaPagina()\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-chevron-right\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <button class=\"button is-small\" [disabled]=\"paginaActual == paginas[paginas.length - 1]\"\r\n                (click)=\"seleccionarPagina(obtenerUltimaPagina())\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-angle-double-right\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"column is-4 pagina-actual is-align-self-center\">\r\n        <p class=\"has-text-right is-size-7-mobile\" [innerHTML]=\"labels.paginaActual\"></p>\r\n    </div>\r\n\r\n</div>", styles: [".columns{-webkit-box-shadow:-2px -4px 3px -2px rgba(217,217,217,1);-moz-box-shadow:-2px -4px 3px -2px rgba(217,217,217,1);box-shadow:-2px -4px 3px -2px #d9d9d9;background-color:var(--neutroLuz);margin:0 0 1px}.pagination-link.is-current{background-color:var(--principal);border-color:var(--principal)!important;color:#fff}.pagination-ellipsis{color:gray}.pagina-actual{display:flex;vertical-align:middle;justify-content:flex-end;align-content:flex-end;border-style:solid;border-color:var(--neutroLuz)}.pagina-actual>p{border-style:solid;border-color:var(--neutroLuz)}@media only screen and (max-width: 524px){.elementos-visibles>.field{flex-direction:column}.is-4{width:25%!important}}@media only screen and (max-width: 400px){.elementos-visibles{display:flex;align-items:flex-start}.column-buttons{display:flex;justify-content:flex-end}.pagina-actual{display:none}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PaginacionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-paginacion', standalone: true, imports: [
                        CommonModule,
                        FormsModule
                    ], template: "<div id=\"paginacion\" class=\"columns is-mobile\">\r\n\r\n    <div class=\"column is-4 is-align-self-center elementos-visibles\">\r\n        <div class=\"field has-addons\">\r\n            <div class=\"control select is-small mr-1 is-align-self-center\">\r\n                <select name=\"cantidad\" [(ngModel)]=\"cantidadVisible\" (change)=\"onCantidadSeleccionada()\">\r\n                    <option *ngIf=\"cantidadTotalElementos >= 25\" [ngValue]=\"25\">25</option>\r\n                    <option *ngIf=\"cantidadTotalElementos >= 50\" [ngValue]=\"50\">50</option>\r\n                    <option *ngIf=\"cantidadTotalElementos >= 100\" [ngValue]=\"100\">100</option>\r\n                    <option [ngValue]=\"0\">{{labels.todosElementos}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"control is-align-self-center\" [ngClass]=\"cantidadVisible == 0 ? 'is-hidden' : ''\">\r\n                <label class=\"is-size-7-mobile\" [innerHTML]=\"labels.elementosVisibles\"></label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"column is-align-self-center column-buttons\"\r\n        [ngStyle]=\"{'visibility': paginas.length <= 1 ? 'hidden' : 'visible', 'margin-top': paginas.length <= 1 ? '-3rem' : '0'}\">\r\n\r\n        <div class=\"buttons has-addons is-centered\">\r\n\r\n            <button class=\"button is-small\" [disabled]=\"paginaActual == 1\" (click)=\"seleccionarPagina(1)\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-angle-double-left\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <button class=\"button is-small\" (click)=\"moverPagina(false)\" [disabled]=\"paginaActual == 1\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-chevron-left\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <div class=\"control\" *ngFor=\"let item of paginas; let i = index\">\r\n                <button *ngIf=\"i >= inicioVisible && i <= finVisible\" class=\"button is-small\"\r\n                    [ngClass]=\"paginaActual == item ? 'is-primary' : ''\" (click)=\"seleccionarPagina(item)\">\r\n                    {{item.toString()}}\r\n                </button>\r\n            </div>\r\n\r\n            <button class=\"button is-small\" (click)=\"moverPagina(true)\"\r\n                [disabled]=\"paginaActual == obtenerUltimaPagina()\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-chevron-right\"></i>\r\n                </span>\r\n            </button>\r\n\r\n            <button class=\"button is-small\" [disabled]=\"paginaActual == paginas[paginas.length - 1]\"\r\n                (click)=\"seleccionarPagina(obtenerUltimaPagina())\">\r\n                <span class=\"icon\">\r\n                    <i class=\"fas fa-angle-double-right\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"column is-4 pagina-actual is-align-self-center\">\r\n        <p class=\"has-text-right is-size-7-mobile\" [innerHTML]=\"labels.paginaActual\"></p>\r\n    </div>\r\n\r\n</div>", styles: [".columns{-webkit-box-shadow:-2px -4px 3px -2px rgba(217,217,217,1);-moz-box-shadow:-2px -4px 3px -2px rgba(217,217,217,1);box-shadow:-2px -4px 3px -2px #d9d9d9;background-color:var(--neutroLuz);margin:0 0 1px}.pagination-link.is-current{background-color:var(--principal);border-color:var(--principal)!important;color:#fff}.pagination-ellipsis{color:gray}.pagina-actual{display:flex;vertical-align:middle;justify-content:flex-end;align-content:flex-end;border-style:solid;border-color:var(--neutroLuz)}.pagina-actual>p{border-style:solid;border-color:var(--neutroLuz)}@media only screen and (max-width: 524px){.elementos-visibles>.field{flex-direction:column}.is-4{width:25%!important}}@media only screen and (max-width: 400px){.elementos-visibles{display:flex;align-items:flex-start}.column-buttons{display:flex;justify-content:flex-end}.pagina-actual{display:none}}\n"] }]
        }], ctorParameters: () => [], propDecorators: { nombreElementos: [{
                type: Input
            }], cantidadSeleccionada: [{
                type: Output
            }], paginaSeleccionada: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

/*
 * Public API Surface of paginacion
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PaginacionComponent };
//# sourceMappingURL=paginacion.mjs.map
