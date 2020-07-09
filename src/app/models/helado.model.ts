import { Observable } from 'rxjs';
import { SABOR } from './sabor.model';
import { SYRUP } from './syrup.model';

export interface HELADO {
    codigo?: string;
    producto?: string;
    sabores?: SABOR[];
    syrups?: SYRUP[];
    image?: string;
    img?: Observable<string | null>;
    descripcion_corta?: string;
    descripcion_larga?: string;
    precioVenta?: number;
}
