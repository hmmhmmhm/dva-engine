import { ValueBoolType } from '../../../type'

/**
 * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
 * 그 외에 경우 다음 액션을 진행합니다.
 */
export interface IAbortIf {
    /**
     * 실행 중지 여부를 지정합니다.
     */
    condition: ValueBoolType
}