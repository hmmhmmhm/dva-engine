/**
 * 일반적으로 지정된 플레이어에게
 * 목표를 알려주기 위해,
 * 화면 중앙 상단에 텍스트가
 * 표시되도록 설정합니다.
 */
export const setObjectiveDescription = (
	/**
	 * 해당 메시지를
	 * 보게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * 표시할 메시지입니다.
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[],
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 메시지는 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.ObjectiveDescriptionReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Set Objective Description(${visibleTo}, ${header}, ${reevaluation})`
}