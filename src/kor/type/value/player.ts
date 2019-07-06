import {
    IGlobalVariable,
    IPlayerVariable,
    IClosestPlayerTo,
    IEventPlayer,
    IFarthestPlayerFrom
} from '../../interface/value/child'

export type ValuePlayerType
    //= 'Event Player'
    = IEventPlayer

    | 'Victim'
    | 'Attacker'

    | IClosestPlayerTo

    | IGlobalVariable
    | IPlayerVariable
    | IFarthestPlayerFrom