/**
 * 카메라가 지정된 방향을
 * 바라보도록 하여 배치합니다.
 */
export const startCamera = (
	/**
	 * 카메라를 해당 위치에
	 * 배치할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 카메라 위치입니다.
	 * 지속적으로 확인됩니다.
	 * - `Type.Vector.`
	 */
	eyePosition: string | number | any[],
	/**
	 * 카메라가 바라보는 방향입니다.
	 * 지속적으로 확인됩니다.
	 * - `Type.Vector.`
	 */
	lookAtPosition: string | number | any[],
	/**
	 * 위치 변경 시 카메라 이동의
	 * 블렌딩 속도를 설정합니다.
	 * 0인 경우 블렌딩하지 않고
	 * 위치만 즉시 변경한다는 뜻입니다.
	 * - `Type.Number.`
	 */
	blendSpeed: string | number | any[]
) => {

	return `Start Camera(${player}, ${eyePosition}, ${lookAtPosition}, ${blendSpeed})`
}