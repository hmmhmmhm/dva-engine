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
    IDivideNumber,
    IEventDamage,
    IEyePosition,
    IHealth,
    IHorizontalAngleFromDirection,
    IHorizontalAngleTowards,
    IHorizontalFacingAngleOf,
    IHorizontalSpeedOf,
    IIndexOfArrayValue,
    ILastDamageModificationId,
    ILastDamageOverTimeId,
    ILastHealOverTimeId,
    ILastTextId,
    IMatchRound,
    IMax,
    IMaxHealth,
    IMin,
    IModulo,
    INormalizedHealth,
    INumberOfDeadPlayers,
    INumberOfDeaths,
    INumberOfEliminations,
    INumberOfFinalBlows,
    INumberOfHeroes,
    INumberOfLivingPlayers,
    INumberOfPlayers,
    INumberOfPlayersOnObjective,
    IObjectiveIndex,

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

    | IDivideNumber
    | IEventDamage
    | IEyePosition
    | IHealth

    | IHorizontalAngleFromDirection
    | IHorizontalAngleTowards
    | IHorizontalFacingAngleOf
    | IHorizontalSpeedOf

    | IIndexOfArrayValue
    | ILastDamageModificationId
    | ILastDamageOverTimeId
    | ILastHealOverTimeId
    | ILastTextId
    | IMatchRound
    | IMax
    | IMaxHealth
    | IMin
    | IModulo
    | INormalizedHealth

    | INumberOfDeadPlayers
    | INumberOfDeaths
    | INumberOfEliminations
    | INumberOfFinalBlows
    | INumberOfHeroes
    | INumberOfLivingPlayers
    | INumberOfPlayers
    | INumberOfPlayersOnObjective
    | IObjectiveIndex