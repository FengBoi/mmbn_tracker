import { bn6cities } from '../../enum/cities/bn6cities.enum';
import { collectionMethod } from '../../enum/collectionMethod.enum';
import { locationType } from '../../enum/locationType.enum';
import { bn6HpMemory } from '../../models/games/bn6Models';

const detailedBn6HpMemoryData: bn6HpMemory[] = [
    {
        description: "Central Area 2 - NetDealer 1000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Central
    },
    {
        description: "Central Area 2 - NetDealer 2000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Central
    },
    {
        description: "Central Area 2 - NetDealer 4000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Central
    },
    {
        description: "Central Area 2 - NetDealer 8000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Central
    },
    {
        description: "Class1-2 Comp - Blue Mystery Data",
        location: locationType.Misc,
        method: collectionMethod.Pickup,
        city: bn6cities.Central
    },
    {
        description: "RobCtrlComp1 - Blue Mystery Data",
        location: locationType.Dungeon,
        method: collectionMethod.Pickup,
        city: bn6cities.Central
    },
    {
        description: "Expo Pavilion Operator Navi Selection Test - Round 1",
        location: locationType.Internet,
        method: collectionMethod.Reward,
        city: bn6cities.Central
    },
    {
        description: "Expo Pavilion Operator Navi Selection Test - Round 3",
        location: locationType.Internet,
        method: collectionMethod.Reward,
        city: bn6cities.Central
    },
    {
        description: "PrcplOfcComp - Blue Mystery Data",
        location: locationType.Misc,
        method: collectionMethod.Pickup,
        city: bn6cities.Central
    },
    {
        description: "PavilionComp3 - Blue Mystery Data",
        location: locationType.Dungeon,
        method: collectionMethod.Pickup,
        city: bn6cities.Central
    },
    {
        description: "Seaside Area 1 - BMD",
        location: locationType.Internet,
        method: collectionMethod.Pickup,
        city: bn6cities.Seaside
    },
    {
        description: "Seaside Area 3 - NetDealer 2500z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Seaside
    },
    {
        description: "Seaside Area 3 - NetDealer 5000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Seaside
    },
    {
        description: "Seaside Area 3 - NetDealer 7500z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Seaside
    },
    {
        description: "Seaside Area 3 - NetDealer 10000z",
        location: locationType.Internet,
        method: collectionMethod.Store,
        city: bn6cities.Seaside
    },
]

export default detailedBn6HpMemoryData