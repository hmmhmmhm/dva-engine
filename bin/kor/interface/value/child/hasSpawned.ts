import {
    ValueEntityType
} from '../../../type'

/**
 * 월드에 개체가 생성되었는지 여부입니다.
 * 플레이어가 영웅을 선택하지 않은 경우
 * 결과값은 FALSE 입니다.
 */
export interface IHasSpawned {
    entity: ValueEntityType
}