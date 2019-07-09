import { ValueHealOverTimeIdType } from '../../../type'

/**
 * START HEAL OVER TIME
 * 액션에 의해 시작된
 * HEAL OVER TIME
 * 인스턴스를 중지합니다.
 */
export interface IStopHealOverTime {
    /**
     * 중지할 HEAL OVER TIME 인스턴스를 지정합니다.
     * 여기에 사용되는 ID는 LAST HEAL OVER TIME ID 또는
     * 예전에 LAST HEAL OVER TIME ID가 담긴 변수입니다.
     */
    healOverTimeId: ValueHealOverTimeIdType
}