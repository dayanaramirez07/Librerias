import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, HostListener, Output, Component } from '@angular/core';

class CarruselComponent {
    constructor() {
        this.carrusel = [];
        this.nextSliding = false;
        this.prevSliding = false;
        this.animating = false;
        this.screen = false;
        this.carruselOculto = new EventEmitter();
        this.labels = {
            coleccion: 'Productos destacados'
        };
    }
    ngOnInit() {
        this.intervalo = setInterval(() => {
            this.nextSlide();
        }, 5000);
        if (window.innerWidth > 450) {
            this.screen = true;
        }
        else {
            this.screen = false;
        }
        if (this.carrusel.length === 0) {
            this.hideComponent();
        }
    }
    ngOnDestroy() {
        clearInterval(this.intervalo);
    }
    onResize(event) {
        if (window.innerWidth > 450) {
            this.screen = true;
        }
        else {
            this.screen = false;
        }
    }
    nextSlide() {
        if (!this.animating) {
            this.animating = true;
            clearInterval(this.intervalo);
            this.nextSliding = true;
            setTimeout(() => {
                this.nextSliding = false;
                this.carrusel.push(this.carrusel.shift());
                this.intervalo = setInterval(() => {
                    this.nextSlide();
                }, 5000);
                this.animating = false;
            }, 1000);
        }
    }
    prevSlide() {
        if (!this.animating) {
            this.animating = true;
            clearInterval(this.intervalo);
            this.prevSliding = true;
            this.carrusel.unshift(this.carrusel.pop());
            setTimeout(() => {
                this.prevSliding = false;
                this.intervalo = setInterval(() => {
                    this.nextSlide();
                }, 5000);
                this.animating = false;
            }, 1000);
        }
    }
    swipeleft(event) {
        this.nextSlide();
    }
    swiperight(event) {
        this.prevSlide();
    }
    hideComponent() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.style.display = 'none';
            this.carruselOculto.emit(true);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CarruselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CarruselComponent, isStandalone: true, selector: "app-carrusel", outputs: { carruselOculto: "carruselOculto" }, host: { listeners: { "window:resize": "onResize($event)" } }, ngImport: i0, template: "<div class=\"carousel-container coleccion\">\r\n\r\n    <div class=\"carousel-controls-top\">\r\n        <button class=\"carousel-control-prev\" type=\"button\" (click)=\"prevSlide()\" [disabled]=\"animating\">\r\n            <span class=\"icon\">\r\n                <i class=\"fas fa-chevron-left\"></i>\r\n            </span>\r\n        </button>\r\n        <h1>{{labels.coleccion}}</h1>\r\n        <button class=\"carousel-control-next\" type=\"button\" (click)=\"nextSlide()\" [disabled]=\"animating\">\r\n            <span class=\"icon\">\r\n                <i class=\"fas fa-chevron-right\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"carousel-inner\" (swipeleft)=\"swipeleft($event)\" (swiperight)=\"swiperight($event)\">\r\n        <div class=\"columns mayor\" *ngIf=\"screen\">\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\"\r\n                *ngFor=\"let slide of carrusel\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + slide.rutaImagen\">\r\n                    <p class=\"texto\">{{slide.detalle}}<br>${{slide.precio}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"columns menor\" *ngIf=\"!screen\">\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[0].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[0].detalle}}<br>${{carrusel[0].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[1].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[1].detalle}}<br>${{carrusel[1].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[2].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[2].detalle}}<br>${{carrusel[2].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\"\r\n                *ngIf=\"nextSliding || prevSliding\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[3].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[3].detalle}}<br>${{carrusel[3].precio}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<br>", styles: [".coleccion{background-color:var(--neutroOscuridad);padding-top:30px;padding-bottom:15px}.carousel-control-prev,.carousel-control-next{height:40px;position:relative}span.icon i{color:var(--principal)}.carousel-inner{display:flex;justify-content:center}div.columns{display:flex;justify-content:center;overflow:hidden;width:81%;z-index:5}.column img{min-height:290px;min-width:290px;transition:opacity .5s ease-out}.column .overlay{position:relative}.column .texto{position:absolute;bottom:0;left:0;margin:auto;width:100%;padding:5px 10px;background-color:#000000b3;color:#fff;text-align:center}p{color:var(--neutroLuz);text-align:justify}h1{text-align:center;z-index:5}hr{margin-top:35px}button{margin:auto}.carousel-control-prev{left:15%}.carousel-control-next{right:15%}.carousel-controls-top{display:flex;margin-bottom:20px}.carousel-controls-top .icon{font-size:30px}.animate-next{animation:nextAnimation 1s ease-out}@keyframes nextAnimation{0%{transform:translate(0)}to{transform:translate(-100%)}}.animate-prev{animation:prevAnimation 1s ease-out}@keyframes prevAnimation{0%{transform:translate(-100%)}to{transform:translate(0)}}@media screen and (max-width: 1280px){.carousel-control-prev,.carousel-control-next{height:30px}.carousel-controls-top .icon{font-size:25px}.carousel-control-prev{left:10%}.carousel-control-next{right:10%}}@media only screen and (max-width: 830px){.column img{min-height:240px;min-width:240px}}@media screen and (max-width: 768px){.carousel-control-prev,.carousel-control-next{height:20px}.carousel-controls-top .icon{font-size:20px}.carousel-control-prev{left:5%}.carousel-control-next{right:5%}}@media only screen and (max-width: 450px){div.columns{display:flex;justify-content:center;overflow:hidden;width:81%}@keyframes nextAnimation{0%{transform:translate(50%)}to{transform:translate(-50%)}}@keyframes prevAnimation{0%{transform:translate(-50%)}to{transform:translate(50%)}}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CarruselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-carrusel', standalone: true, imports: [
                        CommonModule
                    ], template: "<div class=\"carousel-container coleccion\">\r\n\r\n    <div class=\"carousel-controls-top\">\r\n        <button class=\"carousel-control-prev\" type=\"button\" (click)=\"prevSlide()\" [disabled]=\"animating\">\r\n            <span class=\"icon\">\r\n                <i class=\"fas fa-chevron-left\"></i>\r\n            </span>\r\n        </button>\r\n        <h1>{{labels.coleccion}}</h1>\r\n        <button class=\"carousel-control-next\" type=\"button\" (click)=\"nextSlide()\" [disabled]=\"animating\">\r\n            <span class=\"icon\">\r\n                <i class=\"fas fa-chevron-right\"></i>\r\n            </span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"carousel-inner\" (swipeleft)=\"swipeleft($event)\" (swiperight)=\"swiperight($event)\">\r\n        <div class=\"columns mayor\" *ngIf=\"screen\">\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\"\r\n                *ngFor=\"let slide of carrusel\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + slide.rutaImagen\">\r\n                    <p class=\"texto\">{{slide.detalle}}<br>${{slide.precio}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"columns menor\" *ngIf=\"!screen\">\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[0].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[0].detalle}}<br>${{carrusel[0].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[1].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[1].detalle}}<br>${{carrusel[1].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[2].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[2].detalle}}<br>${{carrusel[2].precio}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" [ngClass]=\"{'animate-next': nextSliding, 'animate-prev': prevSliding}\"\r\n                *ngIf=\"nextSliding || prevSliding\">\r\n                <div class=\"overlay\">\r\n                    <img [src]=\"'https://' + carrusel[3].rutaImagen\">\r\n                    <p class=\"texto\">{{carrusel[3].detalle}}<br>${{carrusel[3].precio}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<br>", styles: [".coleccion{background-color:var(--neutroOscuridad);padding-top:30px;padding-bottom:15px}.carousel-control-prev,.carousel-control-next{height:40px;position:relative}span.icon i{color:var(--principal)}.carousel-inner{display:flex;justify-content:center}div.columns{display:flex;justify-content:center;overflow:hidden;width:81%;z-index:5}.column img{min-height:290px;min-width:290px;transition:opacity .5s ease-out}.column .overlay{position:relative}.column .texto{position:absolute;bottom:0;left:0;margin:auto;width:100%;padding:5px 10px;background-color:#000000b3;color:#fff;text-align:center}p{color:var(--neutroLuz);text-align:justify}h1{text-align:center;z-index:5}hr{margin-top:35px}button{margin:auto}.carousel-control-prev{left:15%}.carousel-control-next{right:15%}.carousel-controls-top{display:flex;margin-bottom:20px}.carousel-controls-top .icon{font-size:30px}.animate-next{animation:nextAnimation 1s ease-out}@keyframes nextAnimation{0%{transform:translate(0)}to{transform:translate(-100%)}}.animate-prev{animation:prevAnimation 1s ease-out}@keyframes prevAnimation{0%{transform:translate(-100%)}to{transform:translate(0)}}@media screen and (max-width: 1280px){.carousel-control-prev,.carousel-control-next{height:30px}.carousel-controls-top .icon{font-size:25px}.carousel-control-prev{left:10%}.carousel-control-next{right:10%}}@media only screen and (max-width: 830px){.column img{min-height:240px;min-width:240px}}@media screen and (max-width: 768px){.carousel-control-prev,.carousel-control-next{height:20px}.carousel-controls-top .icon{font-size:20px}.carousel-control-prev{left:5%}.carousel-control-next{right:5%}}@media only screen and (max-width: 450px){div.columns{display:flex;justify-content:center;overflow:hidden;width:81%}@keyframes nextAnimation{0%{transform:translate(50%)}to{transform:translate(-50%)}}@keyframes prevAnimation{0%{transform:translate(-50%)}to{transform:translate(50%)}}}\n"] }]
        }], ctorParameters: () => [], propDecorators: { carruselOculto: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

/*
 * Public API Surface of carrusel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CarruselComponent };
//# sourceMappingURL=carrusel.mjs.map
