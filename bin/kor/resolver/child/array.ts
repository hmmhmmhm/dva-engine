/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allDeadPlayers = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `All Dead Players(${team})`
}

/**
 * 오버워치의 모든 영웅 배열입니다.
 */
export const allHeroes = (
): any[] => {

	// @ts-ignore
	return `All Heroes`
}

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allLivingPlayers = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `All Living Players(${team})`
}

/**
 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
 */
export const allowedHeroes = (
	/**
	 * 이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
): any[] => {

	// @ts-ignore
	return `Allowed Heroes(${player})`
}

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allPlayers = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `All Players(${team})`
}

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allPlayersNotOnObjective = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `All Players Not On Objective(${team})`
}

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allPlayersOnObjective = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `All Players On Objective(${team})`
}

/**
 * 지정된 범위 인덱스의 값만을
 * 포함하고 있는 지정된 배열의 복사본입니다.
 */
export const arraySlice = (
	/**
	 * 복사본을 만들 배열입니다.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 첫번째 범위의 인덱스입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string,
	/**
	 * 결과 배열의 요소 개수입니다.
	 * 설정 영역이 배열 범위를 벗어나는 경우
	 * 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	count: string
): any[] => {

	// @ts-ignore
	return `Array Slice(${array}, ${index}, ${count})`
}

/**
 * 요소가 없는 배열입니다.
 */
export const emptyArray = (
): any[] => {

	// @ts-ignore
	return `Empty Array`
}

/**
 * 제거된 지정 조건에 해당하지 않는 값을 가진
 * 지정된 배열의 복사본입니다.
 */
export const filteredArray = (
	/**
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string
): any[] => {

	// @ts-ignore
	return `Filtered Array(${array}, ${condition})`
}

export const globalVariable = (
): any[] => {

	// @ts-ignore
	return `Global Variable`
}

/**
 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
 */
export const playersInSlot = (
	/**
	 * 플레이어 정보를 가져올 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	slot: string,
	/**
	 * 플레이어 정보를 가져올 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `Players In Slot(${slot}, ${team})`
}

/**
 * 지정된 플레이어의 조준선을 기준으로
 * 시야각 안에 있는 플레이어입니다.
 * 팀 단위로 제한할 수 있습니다.
 */
export const playersInViewAngle = (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어를 고려할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string,
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	viewAngle: string
): any[] => {

	// @ts-ignore
	return `Players In View Angle(${player}, ${team}, ${viewAngle})`
}

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어가 있는 배열입니다.
 */
export const playersOnHero = (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string,
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
): any[] => {

	// @ts-ignore
	return `Players On Hero(${hero}, ${team})`
}

/**
 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
 * 팀 또는 시야 범위로 제한할 수 있습니다.
 */
export const playersWithinRadius = (
	/**
	 * 거리 측정이 시작되는 중간 위치입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	center: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 반경(미터)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 시야 확인을
	 * 통과해야 하는지 여부 및
	 * 방법을 지정합니다.
	 * - `Type.LosCheck.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	losCheck: string
): any[] => {

	// @ts-ignore
	return `Players Within Radius(${center}, ${radius}, ${team}, ${losCheck})`
}

export const playerVariable = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string
): any[] => {

	// @ts-ignore
	return `Player Variable(${player}, ${variable})`
}

/**
 * 지정된 배열의 값을
 * 무작위 순서로 나열한 복사본입니다.
 */
export const randomizedArray = (
	/**
	 * 무작위 복사본을 만들 배열입니다.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string
): any[] => {

	// @ts-ignore
	return `Randomized Array(${array})`
}

/**
 * 하나 이상의 값(있는 경우)이
 * 제거된 배열의 복사본입니다.
 */
export const removeFromArray = (
	/**
	 * 값을 제거할 배열입니다.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 배열에서 제거할 값(있는 경우)입니다.
	 * 이 값 자체가 배열인 경우
	 * 일치하는 각 요소가 제거됩니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string
): any[] => {

	// @ts-ignore
	return `Remove From Array(${array}, ${value})`
}

/**
 * 지정된 배열의 각 요소를
 * VALUE RANK에 따라 평가하고
 * 정렬해서 만든 새 배열 복사본입니다.
 */
export const sortedArray = (
	/**
	 * 복사본을 정렬할 배열입니다.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 복사할 배열의 각 요소마다 평가할 값입니다.
	 * 이 값의 순서에 따라 오름차순으로 복사본이 정렬됩니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	valueRank: string
): any[] => {

	// @ts-ignore
	return `Sorted Array(${array}, ${valueRank})`
}

