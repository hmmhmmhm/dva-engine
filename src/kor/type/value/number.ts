import {
    INumber,
    IAddNumber,

    IAngleDifference,
    IAngleBetweenVectors,

    IAltitudeOf,

    IAcrossineInDegrees,
    IArccosineInRadians,
    IArcsineInDegrees,
    IArcsineInRadians,
    IArctangentInDegrees,
    IArctangentInRadians,

} from "../../interface/value/child"

import {
    IGlobalVariable,
    IPlayerVariable
} from '../../interface/value/child'

export type ValueNumberType
    = INumber

    | IAngleDifference
    | IAltitudeOf
    | IAngleBetweenVectors
    | IAddNumber

    | IAcrossineInDegrees
    | IArccosineInRadians
    | IArcsineInDegrees
    | IArcsineInRadians
    | IArctangentInDegrees
    | IArctangentInRadians

    | IGlobalVariable
    | IPlayerVariable