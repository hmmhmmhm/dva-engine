import {
    IVector,
    ILocalVectorOf,
    IWorldVectorOf,
    IVectorTowards,
    IGlobalVariable,
    IPlayerVariable
} from '../../interface/value/child'

export type ValueVectorType
    = IVector
    | ILocalVectorOf
    | IWorldVectorOf
    | IVectorTowards
    | IGlobalVariable
    | IPlayerVariable