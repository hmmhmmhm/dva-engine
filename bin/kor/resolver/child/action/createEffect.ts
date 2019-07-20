/**
 * 월드 내에 효과 개체를 생성합니다.
 * 이 효과 개체는 제거하기 전까지 지속됩니다.
 * 이 효과를 참조하려면
 * LAST CREATED ENTITY 값을 사용하면 됩니다.
 * 개체가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
export const createEffect = (
	/**
	 * 해당 효과를 보게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * 생성할 효과의 형태입니다.
	 * - `Type.Effect.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string | number | any[],
	/**
	 * 생성될 효과의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * 효과음에는 적용되지 않습니다.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	color: string | number | any[],
	/**
	 * 효과의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어를 따라다니고,
	 * 그 이외에 경우 이 값은
	 * 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[],
	/**
	 * 효과 반경(미터)입니다.
	 * 효과음은 음량이 대신 영향을 받습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string | number | any[],
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.EffectReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Effect(${visibleTo}, ${type}, ${color}, ${position}, ${radius}, ${reevaluation})`
}