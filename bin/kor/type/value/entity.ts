import {
    ValuePlayerType
} from '.'

import {
    IGlobalVariable,
    IPlayerVariable,
    ILastCreatedEntity
} from '../../interface/value'

/**
 * 플레이어, 아이콘 개체 또는 효과 개체입니다.
 */
export type ValueEntityType
    = ValuePlayerType
    | ILastCreatedEntity
    | IGlobalVariable
    | IPlayerVariable