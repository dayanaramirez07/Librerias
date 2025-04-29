import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Pipe, Input, Component, EventEmitter, Output, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i2 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

class CapitalizarPipe {
    transform(value) {
        if (!value)
            return '';
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, isStandalone: true, name: "capitalizar" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'capitalizar',
                    standalone: true
                }]
        }] });

class AccionesComponent {
    constructor() {
        /**
         * Listado de accciones con la estructura: { nombre: valor, icono: valor, metodo: valor, color: valor }
         */
        this.dato = {};
        this.acciones = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AccionesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AccionesComponent, isStandalone: true, selector: "app-acciones", inputs: { dato: "dato", acciones: "acciones" }, ngImport: i0, template: "<div class=\"gap-2 d-md-flex justify-content-md-center\">\r\n\r\n    <ng-container *ngFor=\"let accion of acciones\">\r\n        <button \r\n            *ngIf=\"!accion.habilitada || accion.habilitada(dato)\"\r\n            type=\"button\"\r\n            class=\"btn btn-sm\"\r\n            [ngClass]=\"accion.color\"\r\n            (click)=\"accion.metodo(dato)\"\r\n            (mouseenter)=\"tooltip.open()\"\r\n            (mouseleave)=\"tooltip.close()\"\r\n            [ngbTooltip]=\"accion.nombre | capitalizar\"\r\n            #tooltip=\"ngbTooltip\"\r\n            triggers=\"manual\"\r\n            placement=\"bottom\">\r\n            <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n        </button>\r\n    </ng-container>\r\n\r\n</div>", styles: [""], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: CapitalizarPipe, name: "capitalizar" }, { kind: "ngmodule", type: NgbTooltipModule }, { kind: "directive", type: i2.NgbTooltip, selector: "[ngbTooltip]", inputs: ["animation", "autoClose", "placement", "popperOptions", "triggers", "positionTarget", "container", "disableTooltip", "tooltipClass", "tooltipContext", "openDelay", "closeDelay", "ngbTooltip"], outputs: ["shown", "hidden"], exportAs: ["ngbTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AccionesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-acciones', standalone: true, imports: [
                        RouterModule,
                        CommonModule,
                        CapitalizarPipe,
                        NgbTooltipModule
                    ], template: "<div class=\"gap-2 d-md-flex justify-content-md-center\">\r\n\r\n    <ng-container *ngFor=\"let accion of acciones\">\r\n        <button \r\n            *ngIf=\"!accion.habilitada || accion.habilitada(dato)\"\r\n            type=\"button\"\r\n            class=\"btn btn-sm\"\r\n            [ngClass]=\"accion.color\"\r\n            (click)=\"accion.metodo(dato)\"\r\n            (mouseenter)=\"tooltip.open()\"\r\n            (mouseleave)=\"tooltip.close()\"\r\n            [ngbTooltip]=\"accion.nombre | capitalizar\"\r\n            #tooltip=\"ngbTooltip\"\r\n            triggers=\"manual\"\r\n            placement=\"bottom\">\r\n            <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n        </button>\r\n    </ng-container>\r\n\r\n</div>" }]
        }], propDecorators: { dato: [{
                type: Input
            }], acciones: [{
                type: Input
            }] } });

class TablaComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.anchoEncabezados = [];
        this.datos = [];
        this.filtro = '';
        this.accion = true;
        this.altoTabla = '';
        this.acciones = [];
        this.columnas = [];
        this.enModal = false;
        this.datoSeleccionado = new EventEmitter();
        this.labels = {
            acciones: 'Acciones'
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.onResize();
        }, 1);
    }
    ngAfterContentChecked() {
        this.prepararDatosParaTabla();
        this.onResize();
    }
    onResize() {
        if (this.encabezados && this.encabezados.length > 0) {
            const anchosColumnas = this.encabezados.toArray()
                .map(encabezado => encabezado.nativeElement.offsetWidth);
            this.anchoEncabezados = anchosColumnas.map(ancho => `${ancho}px`);
            this.cdr.detectChanges();
        }
    }
    prepararDatosParaTabla() {
        this.datos.forEach(dato => {
            if (dato.dv && !dato.numeroDocumento.includes(`-${dato.dv}`)) {
                dato.numeroDocumento = dato.numeroDocumento + '-' + dato.dv;
            }
            if (dato.nombres && dato.apellidos) {
                dato.nombreCompleto = dato.nombres + ' ' + dato.apellidos;
            }
            Object.keys(dato).forEach(key => {
                if (typeof dato[key] === 'boolean') {
                    dato[key] = dato[key] ? 'Sí' : 'No';
                }
            });
        });
    }
    onDatoSeleccionado(dato) {
        this.datoSeleccionado.emit(dato);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TablaComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TablaComponent, isStandalone: true, selector: "lib-tabla", inputs: { datos: "datos", filtro: "filtro", accion: "accion", altoTabla: "altoTabla", acciones: "acciones", columnas: "columnas", enModal: "enModal" }, outputs: { datoSeleccionado: "datoSeleccionado" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "encabezados", predicate: ["encabezados"], descendants: true }], ngImport: i0, template: "<div #divTabla class=\"d-flex flex-column border border-1 border-secondary-subtle\"\r\n    [ngStyle]=\"{'height': altoTabla}\">\r\n    <div class=\"div-encabezado\">\r\n        <table class=\"table table-bordered mb-0 border-secondary-subtle\">\r\n            <thead class=\"align-middle position-sticky top-0 shadow-sm text-center\">\r\n                <tr>\r\n                    <th \r\n                        #encabezados \r\n                        *ngFor=\"let columna of columnas\"\r\n                        [style.width.%]=\"columna.ancho\">\r\n                        {{ columna.nombre }}\r\n                    </th>\r\n                    <th \r\n                        *ngIf=\"accion && !enModal\"\r\n                        [style.width]=\"acciones.length > 3 ? '25%' : '15%'\">\r\n                        {{labels.acciones}}\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n    </div>\r\n    <div class=\"div-cuerpo-tabla overflow-y-auto\">\r\n        <table class=\"table table-bordered mb-0\">\r\n            <tbody class=\"align-middle\">\r\n                <tr \r\n                    *ngFor=\"let dato of datos\" \r\n                    (click)=\"enModal ? onDatoSeleccionado(dato) : ''\"\r\n                    [style.cursor]=\"enModal ? 'pointer' : ''\">\r\n                    <td \r\n                        *ngFor=\"let columna of columnas; let i = index\" \r\n                        [style.width]=\"anchoEncabezados[i]\"\r\n                        [ngClass]=\"columna.alineacion\">\r\n                        {{ dato[columna.campoDB] }}\r\n                    </td>\r\n                    <td *ngIf=\"accion && !enModal\">\r\n                        <app-acciones \r\n                            *ngIf=\"acciones.length > 0\"\r\n                            [dato]=\"dato\"\r\n                            [acciones]=\"acciones\">\r\n                        </app-acciones>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>", styles: [".table>:not(caption)>*>*{background-color:transparent}thead tr{background-color:var(--light)}.div-cuerpo-tabla{scrollbar-width:thin;scrollbar-color:var(--light-hover)}.div-cuerpo-tabla::-webkit-scrollbar{width:8px}.div-cuerpo-tabla::-webkit-scrollbar-thumb{background:var(--light-hover)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: AccionesComponent, selector: "app-acciones", inputs: ["dato", "acciones"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TablaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tabla', standalone: true, imports: [
                        FormsModule,
                        CommonModule,
                        AccionesComponent
                    ], host: {
                        '(window:resize)': 'onResize($event)'
                    }, template: "<div #divTabla class=\"d-flex flex-column border border-1 border-secondary-subtle\"\r\n    [ngStyle]=\"{'height': altoTabla}\">\r\n    <div class=\"div-encabezado\">\r\n        <table class=\"table table-bordered mb-0 border-secondary-subtle\">\r\n            <thead class=\"align-middle position-sticky top-0 shadow-sm text-center\">\r\n                <tr>\r\n                    <th \r\n                        #encabezados \r\n                        *ngFor=\"let columna of columnas\"\r\n                        [style.width.%]=\"columna.ancho\">\r\n                        {{ columna.nombre }}\r\n                    </th>\r\n                    <th \r\n                        *ngIf=\"accion && !enModal\"\r\n                        [style.width]=\"acciones.length > 3 ? '25%' : '15%'\">\r\n                        {{labels.acciones}}\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n    </div>\r\n    <div class=\"div-cuerpo-tabla overflow-y-auto\">\r\n        <table class=\"table table-bordered mb-0\">\r\n            <tbody class=\"align-middle\">\r\n                <tr \r\n                    *ngFor=\"let dato of datos\" \r\n                    (click)=\"enModal ? onDatoSeleccionado(dato) : ''\"\r\n                    [style.cursor]=\"enModal ? 'pointer' : ''\">\r\n                    <td \r\n                        *ngFor=\"let columna of columnas; let i = index\" \r\n                        [style.width]=\"anchoEncabezados[i]\"\r\n                        [ngClass]=\"columna.alineacion\">\r\n                        {{ dato[columna.campoDB] }}\r\n                    </td>\r\n                    <td *ngIf=\"accion && !enModal\">\r\n                        <app-acciones \r\n                            *ngIf=\"acciones.length > 0\"\r\n                            [dato]=\"dato\"\r\n                            [acciones]=\"acciones\">\r\n                        </app-acciones>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>", styles: [".table>:not(caption)>*>*{background-color:transparent}thead tr{background-color:var(--light)}.div-cuerpo-tabla{scrollbar-width:thin;scrollbar-color:var(--light-hover)}.div-cuerpo-tabla::-webkit-scrollbar{width:8px}.div-cuerpo-tabla::-webkit-scrollbar-thumb{background:var(--light-hover)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { datos: [{
                type: Input
            }], filtro: [{
                type: Input
            }], accion: [{
                type: Input
            }], altoTabla: [{
                type: Input
            }], acciones: [{
                type: Input
            }], columnas: [{
                type: Input
            }], enModal: [{
                type: Input
            }], encabezados: [{
                type: ViewChildren,
                args: ['encabezados']
            }], datoSeleccionado: [{
                type: Output
            }] } });

/*
 * Public API Surface of tabla
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccionesComponent, TablaComponent };
//# sourceMappingURL=tabla.mjs.map
