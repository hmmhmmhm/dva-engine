/**
 * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
 */
export const playerVariable = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * - `Type.Variable.`
	 */
	variable: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Player Variable(${player}, ${variable})`
}

