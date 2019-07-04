import {
    IGlobalVariable,
    IPlayerVariable
} from '../../interface/value/child'

export type ValuePlayerType
    = 'Event Player'
    | 'Victim'
    | 'Attacker'
    | IGlobalVariable
    | IPlayerVariable