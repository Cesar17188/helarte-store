import { FRUTA } from './fruta.model';
import { SABOR } from './sabor.model';

export interface SHAKE {
    codigo?: string;
    producto?: string;
    leche?: boolean;
    sabor?: SABOR[];
    fruta?: FRUTA[];
}
