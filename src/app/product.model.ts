// interface del modelo de product

export interface Product {
    codigo?: string;
    producto?: string;
    sabores?: SaboresHelado[];
    image?: string;
    bebida?: string;
    backerie?: string;
    snack?: string;
    descripcion_corta?: string;
    description_larga?: string;
    stock?: number;
    unidadMedida?: string;
    precioCompra?: number;
    precioVenta?: number;
}

// Sabores de helado
export type SaboresHelado = 'Mora'|'Mango'|'Guanabana'|'Maracuya'|'Zanahoria y Naranja'|'Limón y Hierva Buena'
                            |'Chocolate'|'Vainilla'|'Chicle y Sandía'|'Rosas y Cerezas'|'Cafe y Almendras'|'Coco y Coco Rallado Pasas';
