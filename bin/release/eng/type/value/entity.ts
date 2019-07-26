import {
    ValuePlayerType
} from '.'

import {
    IGlobalVariable,
    IPlayerVariable,
    ILastCreatedEntity
} from '../../interface/value'

/**
 * Player, icon object, or effect object.
 */
export type ValueEntityType
    = ValuePlayerType
    | ILastCreatedEntity
    | IGlobalVariable
    | IPlayerVariable