/**
 * 플레이어의 최대 및
 * 최소 이동 수치를 정의합니다.
 * 강제 이동되거나 이동이
 * 제한될 수 있습니다.
 */
export const startForcingThrottle = (
	/**
	 * 강제 이동되거나 이동이
	 * 제한될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 전방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 전방 이동합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minForward: string | number | any[],
	/**
	 * 전방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 전방 이동이 가능합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxForward: string | number | any[],
	/**
	 * 후방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 후방 이동합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minBackward: string | number | any[],
	/**
	 * 후방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 후방 이동이 가능합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxBackward: string | number | any[],
	/**
	 * 측방 달리기의 최소값을 설정합니다.
	 * 0이면 플레이어가 정지할 수 있지만,
	 * 1일 경우 최대 속도로 강제 좌우 측방 이동합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minSideways: string | number | any[],
	/**
	 * 측방 달리기의 최대값을 설정합니다.
	 * 0이면 플레이어가 움직일 수 없지만,
	 * 1일 경우 원하는 대로 좌우 측방 이동이 가능합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxSideways: string | number | any[]
) => {

	return `Start Forcing Throttle(${player}, ${minForward}, ${maxForward}, ${minBackward}, ${maxBackward}, ${minSideways}, ${maxSideways})`
}