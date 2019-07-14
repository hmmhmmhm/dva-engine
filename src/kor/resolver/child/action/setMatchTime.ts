/**
 * (화면 상단에 표시되는)
 * 현재 경기 시간을 설정합니다.
 * 이를 통해 경기 지속시간을
 * 조정하거나 영웅 선택 또는
 * 준비 시간을 변경할 수 있습니다.
 */
export const setMatchTime = (
	/**
	 * 경기 시간(초)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	time: string
) => {

	return `Set Match Time(${time})`
}