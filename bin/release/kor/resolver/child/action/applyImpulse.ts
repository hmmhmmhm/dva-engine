/**
 * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
 */
export const applyImpulse = (
	/**
	 * 속도를 변경할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 충격량을 적용할 단위 방항입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[],
	/**
	 * 플레이어에 대한 속도 변경의 크기입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	speed: string | number | any[],
	/**
	 * 방향이 플레이어의 월드 좌표 또는
	 * 로컬 좌표 중 어느 쪽에 대해
	 * 상대적인지 여부를 지정합니다.
	 * - `Type.Relative.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relative: string | number | any[],
	/**
	 * 충격량을 적용하기 전에 DIRECTION과
	 * 반대 방향인 기존의 속도를
	 * 상쇄할지 여부를 지정합니다.
	 * - `Type.Motion.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	motion: string | number | any[]
) => {

	return `Apply Impulse(${player}, ${direction}, ${speed}, ${relative}, ${motion})`
}