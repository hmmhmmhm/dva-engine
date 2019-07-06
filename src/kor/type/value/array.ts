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
    IFilteredArray
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