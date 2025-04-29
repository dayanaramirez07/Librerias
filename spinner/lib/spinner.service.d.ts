import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SpinnerService {
    isLoading$: BehaviorSubject<boolean>;
    private temporizador;
    get isLoading(): Observable<boolean>;
    mostrar(): void;
    ocultar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SpinnerService>;
}
