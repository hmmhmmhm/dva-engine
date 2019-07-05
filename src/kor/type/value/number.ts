import {
    INumber,
    IAddNumber,

    IAngleDifference,
    IAngleBetweenVectors,

    IAltitudeOf,
    ICountOf,

    IAcrossineInDegrees,
    IArccosineInRadians,
    IArcsineInDegrees,
    IArcsineInRadians,
    IArctangentInDegrees,
    IArctangentInRadians,
    ICosineFromDegrees,
    ICosineFromRadians,

    IControlModeScoringPercentage,
    IDistanceBetween,

} from "../../interface/value/child"

import {
    IGlobalVariable,
    IPlayerVariable
} from '../../interface/value/child'

export type ValueNumberType
    = INumber
    | IAddNumber

    | IAngleDifference
    | IAngleBetweenVectors

    | IAltitudeOf
    | ICountOf

    | IAcrossineInDegrees
    | IArccosineInRadians
    | IArcsineInDegrees
    | IArcsineInRadians
    | IArctangentInDegrees
    | IArctangentInRadians
    | ICosineFromDegrees
    | ICosineFromRadians

    | IControlModeScoringPercentage

    | IGlobalVariable
    | IPlayerVariable
    | IDistanceBetween