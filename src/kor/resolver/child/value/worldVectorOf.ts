/**
 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
 */
export const worldVectorOf = (
	/**
	 * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	localVector: string,
	/**
	 * 결과 벡터와 연관될 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relativePlayer: string,
	/**
	 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
	 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
	 * - `Transformation.` 또는 `Type.Transformation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	transformation: string
) => {

	return `World Vector Of(${localVector}, ${relativePlayer}, ${transformation})`
}