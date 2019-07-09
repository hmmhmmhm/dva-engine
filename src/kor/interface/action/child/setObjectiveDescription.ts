import { ValuePlayerType, ValueStringType, ValueObjectiveDescriptionReevaluationType } from '../../../type'

/**
 * 일반적으로 지정된 플레이어에게
 * 목표를 알려주기 위해,
 * 화면 중앙 상단에 텍스트가
 * 표시되도록 설정합니다.
 */
export interface ISetObjectiveDescription {
    /**
     * 해당 메시지를
     * 보게 될 플레이어입니다.
     */
    visibleTo: ValuePlayerType
    /**
     * 표시할 메시지입니다.
     */
    header: ValueStringType
    /**
     * 이 액션의 입력 정보 중
     * 어떤 항목을 지속적으로
     * 재확인할 것인지 지정합니다.
     * 해당 메시지는 입력 정보의
     * 새로운 값을 계속 묻게 되며,
     * 재확인한 값을 사용합니다.
     */
    reevaluation: ValueObjectiveDescriptionReevaluationType
}