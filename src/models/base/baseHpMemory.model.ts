import { collectionMethod } from './../../enum/collectionMethod.enum';
import { locationType } from './../../enum/locationType.enum';

export interface baseHpMemory {
    "description": string,
    "location": locationType,
    "method": collectionMethod,
    "extraInfo"?: string
}
