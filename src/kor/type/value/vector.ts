import {
    IVector,
    ILocalVectorOf,
    IWorldVectorOf,
    IVectorTowards,
    IGlobalVariable,
    IPlayerVariable,
    IBackward,
    ICrossProduct,
    IDirectionFromAngles,
    IDirectionTowards,
} from '../../interface/value/child'

export type ValueVectorType
    = IVector
    | ILocalVectorOf
    | IWorldVectorOf
    | IVectorTowards
    | IGlobalVariable
    | IPlayerVariable
    | IBackward
    | ICrossProduct
    | IDirectionFromAngles
    | IDirectionTowards