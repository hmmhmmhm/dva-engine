import {
    INumber,
    IAdd,

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
    IDivide,
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
    IPayloadProgressPercentage,
    IPointCapturePercentage,
    IRaiseToPower,
    IRandomInteger,
    IRandomReal,
    IRoundToInteger,
    IScoreOf,
    ISineFromDegrees,
    ISineFromRadians,
    ISlotOf,
    ISpeedOf,
    ISpeedOfInDirection,
    ISquareRoot,
    ISubtract,
    ITangentFromDegrees,
    ITangentFromRadians,
    ITeamScore,
    IUltimateChargePercent,
    IVerticalAngleFromDirection,
    IVerticalAngleTowards,
    IVerticalFacingAngleOf,
    IVerticalSpeedOf,
    IServerLoad,
    IServerLoadAverage,
    IServerLoadPeak,

} from '../../interface/value/child'

import {
    IGlobalVariable,
    IPlayerVariable
} from '../../interface/value/child'

export type ValueNumberType
    = INumber
    | IAdd

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

    | IDivide
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
    | IPayloadProgressPercentage
    | IPointCapturePercentage
    | IRaiseToPower
    | IRandomInteger
    | IRandomReal
    | IRoundToInteger
    | IScoreOf
    | ISineFromDegrees
    | ISineFromRadians
    | ISlotOf
    | ISpeedOf
    | ISpeedOfInDirection
    | ISquareRoot
    | ISubtract
    | ITangentFromDegrees
    | ITangentFromRadians
    | ITeamScore
    | IUltimateChargePercent
    | IVerticalAngleFromDirection
    | IVerticalAngleTowards
    | IVerticalFacingAngleOf
    | IVerticalSpeedOf
    | IServerLoad
    | IServerLoadAverage
    | IServerLoadPeak