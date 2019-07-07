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
    IDotProduct,
    IDown,
    IDivideVector,
    IFacingDirectionOf,
    IFlagPosition,
    IForward,
    ILeft,
    INearestWalkablePostion,
    INormalize,
    IObjectivePosition,
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
    | IDivideVector
    | IDotProduct
    | IDown
    | IFacingDirectionOf
    | IFlagPosition
    | IForward
    | ILeft
    | INearestWalkablePostion
    | INormalize
    | IObjectivePosition