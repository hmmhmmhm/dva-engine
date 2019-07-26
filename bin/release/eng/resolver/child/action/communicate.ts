/**
 * Causes one or more players to use an emote,
 * voice line, or other equipped communication.
 */
export const communicate = (
	/**
	 * Player - The player or players to perform
	 * the communication. Can use most Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Type - The type of communication. Can use
	 * any equipped emote, equipped voice line,
	 * or any other communication effect.
	 * - `Type.Communication.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string | number | any[]
) => {

	return `Communicate(${player}, ${type})`
}