import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

class DropdownComponent {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
        this.isDisabled = false;
        this.isTouched = false;
        this.indiceActivo = 0;
        this.listadoActivo = false;
        this.listadoFiltrado = [];
        this.busquedaRealizada = false;
        this.label = '';
        this.listado = [];
        this.placeholder = '';
        this.agregarItem = false;
        /**
         * Propiedad de los objetos del listado que se va a usar para filtrar
         */
        this.propiedades = [];
        this.blurEvent = new EventEmitter();
        this.itemSeleccionado = new EventEmitter();
        this.accionSeleccionada = new EventEmitter();
        this.mensajes = {
            noExiste: 'No existe'
        };
    }
    ngOnInit() {
        this.writeValue(this.value);
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.writeValue(changes['value'].currentValue);
        }
    }
    writeValue(value) {
        this.value = value;
        if (typeof this.value === 'object') {
            if (this.value && this.propiedades.length > 0) {
                this.value = this.propiedades
                    .map(prop => this.value[prop])
                    .filter(val => val)
                    .join(' - ');
            }
            else {
                this.value = '';
            }
        }
        this.listadoFiltrado = [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    forzarReporteCambios(itemSeleccionado) {
        if (this.agregarItem && !itemSeleccionado) {
            this.value = this.value;
        }
        else {
            this.value = itemSeleccionado || '';
        }
        const objetoOriginal = this.listado.find(item => this.propiedades.map(prop => item[prop]).join(' - ') === this.value);
        this.onChange(this.value);
        if (!this.value) {
            this.itemSeleccionado.emit('');
            return;
        }
        this.itemSeleccionado.emit(objetoOriginal || this.value);
        this.listadoActivo = false;
        this.busquedaRealizada = false;
    }
    buscar(event) {
        this.listadoActivo = false;
        this.busquedaRealizada = true;
        const value = this.value.toLowerCase();
        if (value === '') {
            this.forzarReporteCambios(value);
            this.busquedaRealizada = false;
            return;
        }
        this.listadoFiltrado = this.listado
            .map(item => {
            const texto = this.propiedades.map(prop => item[prop]).join(' - ');
            return { item, texto };
        })
            .filter(({ texto }) => texto.toLowerCase().includes(value))
            .map(({ texto }) => texto);
        if (this.listadoFiltrado.length > 0) {
            this.listadoActivo = true;
        }
        this.establecerItemActivo(event.code);
    }
    establecerItemActivo(codigoTecla) {
        if (this.listadoFiltrado.length === 0) {
            if (this.agregarItem) {
                this.forzarReporteCambios(this.value);
            }
            return;
        }
        if (codigoTecla === 'ArrowDown') {
            this.indiceActivo = (this.indiceActivo + 1) % this.listadoFiltrado.length;
        }
        else if (codigoTecla === 'ArrowUp') {
            this.indiceActivo = (this.indiceActivo - 1 + this.listadoFiltrado.length) % this.listadoFiltrado.length;
        }
        else if (codigoTecla === 'Enter' && this.indiceActivo >= 0) {
            const itemSeleccionado = this.listadoFiltrado[this.indiceActivo];
            this.forzarReporteCambios(itemSeleccionado);
        }
        setTimeout(() => {
            const element = document.querySelector('.dropdown-item.is-active');
            if (element) {
                element.scrollIntoView({ block: 'nearest' });
            }
        }, 0);
    }
    onInputBlur() {
        this.busquedaRealizada = false;
        if (this.label) {
            this.isTouched = true;
        }
        if ((this.isEmpty(this.value) || !this.valorEsValido(this.value))) {
            this.forzarReporteCambios('');
        }
        this.onTouched();
        this.blurEvent.emit();
    }
    isEmpty(value) {
        return !value || value.trim() === '';
    }
    valorEsValido(value) {
        if (!value)
            return false;
        return this.listado.some(item => {
            const texto = this.propiedades.map(prop => item[prop]).join(' - ');
            return texto === value;
        });
    }
    onAccionSeleccionada(event) {
        this.accionSeleccionada.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DropdownComponent, isStandalone: true, selector: "app-dropdown", inputs: { value: "value", label: "label", listado: "listado", placeholder: "placeholder", agregarItem: "agregarItem", propiedades: "propiedades", accion: "accion" }, outputs: { blurEvent: "blurEvent", itemSeleccionado: "itemSeleccionado", accionSeleccionada: "accionSeleccionada" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: DropdownComponent,
                multi: true
            }], usesOnChanges: true, ngImport: i0, template: "<div class=\"row\" [ngClass]=\"label ? 'mb-3' : ''\">\r\n\r\n    <label *ngIf=\"label\" class=\"col-sm-4 col-form-label\">{{ label }}</label>\r\n\r\n    <div class=\"col-sm-8 dropdown position-relative\">\r\n\r\n        <div class=\"input-group\">\r\n\r\n            <input \r\n                type=\"text\" \r\n                name=\"value\" \r\n                [(ngModel)]=\"value\" \r\n                class=\"form-control dropdown-toggle\"\r\n                [ngClass]=\"{'is-invalid': isTouched && isEmpty(value)}\"\r\n                (click)=\"onTouched()\"\r\n                (keyup)=\"buscar($event)\"\r\n                (blur)=\"onInputBlur()\"\r\n                [disabled]=\"isDisabled\" \r\n                [placeholder]=\"placeholder\"\r\n                data-bs-toggle=\"dropdown\"\r\n                autocomplete=\"off\">\r\n            \r\n            <ul class=\"dropdown-menu overflow-auto rounded-0 position-absolute\"\r\n                [ngStyle]=\"{ 'display': busquedaRealizada ? 'block' : 'none' }\">\r\n                <ng-container *ngIf=\"listadoFiltrado.length > 0; else noExiste\">\r\n                    <li\r\n                        class=\"dropdown-item\"\r\n                        *ngFor=\"let i = index; let item of listadoFiltrado\" \r\n                        [class.is-active]=\"indiceActivo === i\"\r\n                        (mousedown)=\"forzarReporteCambios(item)\">\r\n                        {{item}}\r\n                    </li>\r\n                </ng-container>\r\n                <ng-template #noExiste>\r\n                    <li class=\"dropdown-item disabled\">{{ mensajes.noExiste }}</li>\r\n                </ng-template>\r\n            </ul>\r\n\r\n            <button *ngIf=\"accion\" class=\"btn btn-light ms-2\" (click)=\"onAccionSeleccionada(accion)\">\r\n                <span class=\"icon is-small\">\r\n                    <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>", styles: ["ul.dropdown-menu.show{position:fixed!important}.dropdown-menu{position:fixed!important;max-height:140px;margin-top:2.5rem;scrollbar-width:thin;scrollbar-color:var(--light-hover);--bs-dropdown-link-active-bg: var(--principal)}.dropdown-menu::-webkit-scrollbar{width:8px}.dropdown-menu::-webkit-scrollbar-thumb{background:var(--light-hover)}.dropdown-menu .dropdown-item.is-active{background-color:var(--principal);color:#fff}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:none}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown', standalone: true, imports: [
                        FormsModule,
                        CommonModule
                    ], providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: DropdownComponent,
                            multi: true
                        }], template: "<div class=\"row\" [ngClass]=\"label ? 'mb-3' : ''\">\r\n\r\n    <label *ngIf=\"label\" class=\"col-sm-4 col-form-label\">{{ label }}</label>\r\n\r\n    <div class=\"col-sm-8 dropdown position-relative\">\r\n\r\n        <div class=\"input-group\">\r\n\r\n            <input \r\n                type=\"text\" \r\n                name=\"value\" \r\n                [(ngModel)]=\"value\" \r\n                class=\"form-control dropdown-toggle\"\r\n                [ngClass]=\"{'is-invalid': isTouched && isEmpty(value)}\"\r\n                (click)=\"onTouched()\"\r\n                (keyup)=\"buscar($event)\"\r\n                (blur)=\"onInputBlur()\"\r\n                [disabled]=\"isDisabled\" \r\n                [placeholder]=\"placeholder\"\r\n                data-bs-toggle=\"dropdown\"\r\n                autocomplete=\"off\">\r\n            \r\n            <ul class=\"dropdown-menu overflow-auto rounded-0 position-absolute\"\r\n                [ngStyle]=\"{ 'display': busquedaRealizada ? 'block' : 'none' }\">\r\n                <ng-container *ngIf=\"listadoFiltrado.length > 0; else noExiste\">\r\n                    <li\r\n                        class=\"dropdown-item\"\r\n                        *ngFor=\"let i = index; let item of listadoFiltrado\" \r\n                        [class.is-active]=\"indiceActivo === i\"\r\n                        (mousedown)=\"forzarReporteCambios(item)\">\r\n                        {{item}}\r\n                    </li>\r\n                </ng-container>\r\n                <ng-template #noExiste>\r\n                    <li class=\"dropdown-item disabled\">{{ mensajes.noExiste }}</li>\r\n                </ng-template>\r\n            </ul>\r\n\r\n            <button *ngIf=\"accion\" class=\"btn btn-light ms-2\" (click)=\"onAccionSeleccionada(accion)\">\r\n                <span class=\"icon is-small\">\r\n                    <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>", styles: ["ul.dropdown-menu.show{position:fixed!important}.dropdown-menu{position:fixed!important;max-height:140px;margin-top:2.5rem;scrollbar-width:thin;scrollbar-color:var(--light-hover);--bs-dropdown-link-active-bg: var(--principal)}.dropdown-menu::-webkit-scrollbar{width:8px}.dropdown-menu::-webkit-scrollbar-thumb{background:var(--light-hover)}.dropdown-menu .dropdown-item.is-active{background-color:var(--principal);color:#fff}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], label: [{
                type: Input
            }], listado: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], agregarItem: [{
                type: Input
            }], propiedades: [{
                type: Input
            }], blurEvent: [{
                type: Output
            }], itemSeleccionado: [{
                type: Output
            }], accion: [{
                type: Input
            }], accionSeleccionada: [{
                type: Output
            }] } });

/*
 * Public API Surface of dropdown
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownComponent };
//# sourceMappingURL=dropdown.mjs.map
