import { ValueBoolType } from '../../../type'

/**
 * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
 */
export interface INot {
    /**
     * 이 입력 정보가 FALSE
     * (또는 그에 상응하는 경우)라면
     * NOT 값은 TRUE입니다.
     * 그 이외의 경우,
     * NOT 값은 FALSE입니다.
     */
    value: ValueBoolType
}