/**
 * 플레이어를 지정된
 * 방향을 향해 회전시킵니다.
 */
export const startFacing = (
	/**
	 * 회전시킬 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어가 궁극적으로
	 * 바라보게 되는 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string,
	/**
	 * 초당 회전율(도)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	turnRate: string,
	/**
	 * 방향이 플레이어의
	 * 월드 좌표 또는 로컬 좌표 중
	 * 어느 쪽에 대해 상대적인지
	 * 여부를 지정합니다.
	 * - `Type.Relative.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relative: string,
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.FacingReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string
) => {

	return `Start Facing(${player}, ${direction}, ${turnRate}, ${relative}, ${reevaluation})`
}