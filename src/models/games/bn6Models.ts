import { baseRegularMemory } from './../base/baseRegMemory.model';
import { baseOtherMemory } from './../base/baseNavicust.model';
import { baseHpMemory } from '../base/baseHpMemory.model';
import { bn6cities } from '../../enum/cities/bn6cities.enum';

export interface bn6HpMemory extends baseHpMemory {
    city: bn6cities,
}

export interface bn6Navicust extends baseOtherMemory {
    city: bn6cities
}

export interface bn6RegMemory extends baseRegularMemory {
    city: bn6cities
}