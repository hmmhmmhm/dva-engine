import {
    IAllDeadPlayers,
    IAllHeroes,
    IAllLivingPlayers,
    IAllPlayers,
    IAllPlayersNotOnObjective,
    IAllPlayersOnObjective,
    IAllowedHeroes,
    IArraySlice,
    IEmptyArray,
    IFilteredArray,
    IPlayersInSlot,
    IPlayersInViewAngle,
    IPlayersOnHero,
    IPlayersWithinRadius,
    IRandomizedArray,
    IRemoveFromArray,
    ISortedArray,
    IGlobalVariable,
    IPlayerVariable,
} from '../../interface/value/child'

export type ValueArrayType
    = IAllDeadPlayers
    | IAllHeroes
    | IAllLivingPlayers
    | IAllPlayers
    | IAllPlayersNotOnObjective
    | IAllPlayersOnObjective
    | IAllowedHeroes
    | IArraySlice
    | IEmptyArray
    | IFilteredArray
    | IPlayersInSlot
    | IPlayersInViewAngle
    | IPlayersOnHero
    | IPlayersWithinRadius
    | IRandomizedArray
    | IRemoveFromArray
    | ISortedArray

    | IGlobalVariable
    | IPlayerVariable