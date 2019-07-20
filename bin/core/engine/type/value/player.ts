import {
    IGlobalVariable,
    IPlayerVariable,
    IClosestPlayerTo,
    IEventPlayer,
    IFarthestPlayerFrom,
    IPlayerCarryingFlag,
    IPlayerClosestToReticle,
    IVictim,
    IAttacker,
} from '../../interface/value/child'

export type ValuePlayerType
    = IEventPlayer
    | IVictim
    | IAttacker

    | IClosestPlayerTo

    | IGlobalVariable
    | IPlayerVariable
    | IFarthestPlayerFrom
    | IPlayerCarryingFlag
    | IPlayerClosestToReticle