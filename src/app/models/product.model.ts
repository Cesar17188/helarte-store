// interface del modelo de product

import { Observable } from 'rxjs';

export interface Product {
    codigo?: string;
    producto?: string;
    sabores?: Product[];
    image?: string;
    img?: Observable<string | null>;
    bebida?: string;
    backerie?: string;
    snack?: string;
    descripcion_corta?: string;
    descripcion_larga?: string;
    stock?: number;
    unidadMedida?: string;
    precioCompra?: number;
    precioVenta?: number;
}

