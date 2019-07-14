import {
    ValuePlayersParamType,
    ValuePlayerType,
    ValueArrayType,
    ValueNumberType,
    ValueDamageModificationReevaluationType
} from '../../../type'

/**
 * DAMAGER가 RECEIVER에게
 * 주는 피해를 수정하기 시작합니다.
 * 이 DAMAGE MODIFICATION을 참조하려면
 * LAST DAMAGE MODIFICATION ID 값을 사용하십시오.
 * DAMAGE MODIFICATION이 너무 많은 경우
 * 이 액션은 실패할 수 있습니다.
 */
export interface IStartDamageModification {
    /**
     * (DAMAGER의 공격을 받는 경우)
     * 받는 피해를 수정할 플레이어입니다.
     */
    receivers: ValuePlayersParamType
    /**
     * (RECEIVER를 공격하는 경우)
     * 주는 피해를 변경할 플레이어입니다.
     */
    damagers: ValuePlayersParamType
    /**
     * DAMAGER의 공격을 받는 경우
     * RECEIVER에게 적용할 피해 비율입니다.
     */
    damagePercent: ValueNumberType
    /**
     * 이 액션의 입력 정보 중
     * 어떤 항목을 지속적으로
     * 재확인할 것인지 지정합니다.
     * 해당 액션은 입력 정보의
     * 새로운 값을 계속 묻게 되며,
     * 재확인한 값을 사용합니다.
     */
    reevaluation: ValueDamageModificationReevaluationType
}