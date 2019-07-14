/**
 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
 * 플레이어가 표면에 있으면 0입니다.
 */
export const altitudeOf = (
	/**
	 * 고도 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Altitude Of(${player})`
}