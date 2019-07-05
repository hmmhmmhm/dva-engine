import {
    IGlobalVariable,
    IPlayerVariable,
    IClosestPlayerTo
} from '../../interface/value/child'

export type ValuePlayerType
    = 'Event Player'
    | 'Victim'
    | 'Attacker'

    | IClosestPlayerTo

    | IGlobalVariable
    | IPlayerVariable
    