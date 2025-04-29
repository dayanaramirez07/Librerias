import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CarruselComponent implements OnInit, OnDestroy {
    carrusel: any[];
    nextSliding: boolean;
    prevSliding: boolean;
    intervalo: any;
    animating: boolean;
    screen: boolean;
    protected carruselOculto: EventEmitter<boolean>;
    labels: {
        coleccion: string;
    };
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    onResize(event: any): void;
    nextSlide(): void;
    prevSlide(): void;
    swipeleft(event: any): void;
    swiperight(event: any): void;
    hideComponent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarruselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarruselComponent, "app-carrusel", never, {}, { "carruselOculto": "carruselOculto"; }, never, never, true, never>;
}
