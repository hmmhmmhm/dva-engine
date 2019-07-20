/**
 * 지정된 플레이어 화면의 지정된 위치에
 * 표시할 HUD 텍스트를 생성합니다.
 * 이 텍스트는 제거하기 전까지 지속됩니다.
 * 이 텍스트를 참조하려면
 * LAST TEXT ID 값을 사용하면 됩니다.
 * 텍스트 요소가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
export const createHudText = (
	/**
	 * 해당 HUD 텍스트를 보게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * 표시할 텍스트입니다. (비워두기 가능)
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[],
	/**
	 * 표시할 부제목입니다. (비워두기 가능)
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	subHeader: string | number | any[],
	/**
	 * 표시할 본문입니다. (비워두기 가능)
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	text: string | number | any[],
	/**
	 * 텍스트를 표시할 화면 상의 위치입니다.
	 * - `Type.Location.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	location: string | number | any[],
	/**
	 * 동일한 위치에 있는 다른
	 * 텍스트와의 정렬 순서입니다.
	 * 정렬 순서 상 우선순위가 높은
	 * 텍스트는 낮은 우선순위의
	 * 텍스트 다음에 위치하게 됩니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	sortOrder: string | number | any[],
	/**
	 * 생성될 HEADER 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	headerColor: string | number | any[],
	/**
	 * 생성될 SUBHEADER 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	subHeaderColor: string | number | any[],
	/**
	 * 생성될 텍스트의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게 적인지
	 * 여부에 따라 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	textColor: string | number | any[],
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.HudTextReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Hud Text(${visibleTo}, ${header}, ${subHeader}, ${text}, ${location}, ${sortOrder}, ${headerColor}, ${subHeaderColor}, ${textColor}, ${reevaluation})`
}