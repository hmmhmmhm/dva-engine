import {
    ValuePlayerType,
    ValueNumberType,
    ValueStringType,
    ValueVectorType,
    ValueInWorldTextReevaluationType,
    ValueClippingType,
} from '../../../type'

/**
 * 월드의 지정된 위치에서 지정된 플레이어에게
 * 표시할 월드 내 텍스트를 생성합니다.
 * 이 텍스트는 제거하기 전까지 지속됩니다.
 * 이 텍스트를 참조하려면
 * LAST TEXT ID 값을 사용하면 됩니다.
 * 텍스트 요소가 너무 많이 생성된 경우 이 액션은 실패할 수 있습니다.
 */
export interface ICreateInWorldText {
    /**
     * 월드 내 텍스트를 보게 될 플레이어입니다.
     */
    visibleTo: ValuePlayerType
    /**
     * 표시할 텍스트입니다.
     */
    header: ValueStringType
    /**
     * 텍스트의 위치입니다.
     * 이 값이 플레이어인 경우
     * 해당 텍스트는 지정된
     * 플레이어 머리 위에 표시되고,
     * 그 이외의 경우 이 값은
     * 월드 내의 위치로 해석됩니다.
     */
    position: ValueVectorType
    /**
     * 텍스트의 배율입니다.
     */
    scale: ValueNumberType
    /**
     * 해당 텍스트가 벽을 뚫고 보일지, 아니면 가려질지 지정합니다.
     */
    clipping: ValueClippingType
    /**
     * 이 액션의 입력 정보 중 어떤 항목을
     * 지속적으로 재확인할 것인지 지정합니다.
     * 해당 텍스트는 입력 정보의 새로운 값을
     * 계속 묻게 되며, 재확인한 값을 사용합니다.
     */
    reevaluation: ValueInWorldTextReevaluationType
}