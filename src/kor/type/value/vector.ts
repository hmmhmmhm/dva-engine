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
    IDivide,
    IFacingDirectionOf,
    IFlagPosition,
    IForward,
    ILeft,
    INearestWalkablePostion,
    INormalize,
    IObjectivePosition,
    IPayloadPosition,
    IPositionOf,
    IRayCastHitNormal,
    IRayCastHitPlayer,
    IRayCastHitPosition,
    IRight,
    ISubstract,
    IThrottleOf,
    ITotalTimeElapsed,
    IUp,
    IVelocityOf,
    IXComponentOf,
    IYComponentOf,
    IZComponentOf,
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
    | IDivide
    | IDotProduct
    | IDown
    | IFacingDirectionOf
    | IFlagPosition
    | IForward
    | ILeft
    | INearestWalkablePostion
    | INormalize
    | IObjectivePosition
    | IPayloadPosition
    | IPositionOf
    | IRayCastHitNormal
    | IRayCastHitPlayer
    | IRayCastHitPosition
    | IRight
    | ISubstract
    | IThrottleOf
    | ITotalTimeElapsed
    | IUp
    | IVelocityOf
    | IXComponentOf
    | IYComponentOf
    | IZComponentOf