/**
 * 플레이어를 지정된 방향으로
 * 가속하기 시작합니다.
 */
export const startAccelerating = (
	/**
	 * 가속하기 시작할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 가속을 적용할 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[],
	/**
	 * 가속 비율(제곱초당 미터)입니다.
	 * 중력이나 표면 마찰력을 이겨내려면
	 * 이 값이 매우 높아야 할 수 있습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	rate: string | number | any[],
	/**
	 * 플레이어의 가속이 중지되는 속력입니다.
	 * 중력 및 표면 마찰력 때문에
	 * 이 속도에 도달하기는 불가능할 수 있습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxSpeed: string | number | any[],
	/**
	 * 방향이 플레이어의 월드 좌표
	 * 또는 로컬 좌표 중 어느 쪽에 대해
	 * 상대적인지 여부를 지정합니다.
	 * - `Type.Relative.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relative: string | number | any[],
	/**
	 * 이 액션의 입력 정보 중
	 * 어떤 항목을 지속적으로
	 * 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의
	 * 새로운 값을 계속 묻게 되며,
	 * 재확인한 값을 사용합니다.
	 * - `Type.StartAcceleratingReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Start Accelerating(${player}, ${direction}, ${rate}, ${maxSpeed}, ${relative}, ${reevaluation})`
}