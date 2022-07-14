import { locationType } from '../../enum/locationType.enum';

export interface baseRegularMemory {
    "description": string,
    "location": string,
    "locationType": locationType,
}