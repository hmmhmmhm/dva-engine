/**
 * Stops all forced camera positions started
 * by the start camera or one or more players.
 */
export const stopCamera = (
	/**
	 * Player - The player or players whose forced
	 * camera positions will stop. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop Camera(${player})`
}