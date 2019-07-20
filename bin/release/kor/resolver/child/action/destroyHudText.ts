/**
 * CREATE HUD TEXT 액션에 의해
 * 생성된 HUD 텍스트를 제거합니다.
 */
export const destroyHudText = (
	/**
	 * 제거할 HUD 텍스트를 지정합니다.
	 * 여기에 사용되는 ID는
	 * LAST TEXT ID 또는 예전에
	 * LAST TEXT ID가 담긴 변수입니다.
	 * - `Type.Text.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	textId: string | number | any[]
) => {

	return `Destroy Hud Text(${textId})`
}