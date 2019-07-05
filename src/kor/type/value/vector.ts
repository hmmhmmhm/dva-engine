import {
    IVector,
    ILocalVectorOf,
    IWorldVectorOf,
    IVectorTowards,
    IGlobalVariable,
    IPlayerVariable,
    IBackward
} from '../../interface/value/child'

export type ValueVectorType
    = IVector
    | ILocalVectorOf
    | IWorldVectorOf
    | IVectorTowards
    | IGlobalVariable
    | IPlayerVariable
    | IBackward