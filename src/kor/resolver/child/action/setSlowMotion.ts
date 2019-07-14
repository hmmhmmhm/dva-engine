/**
 * 모든 플레이어, 투사체,
 * 효과, 게임 모드 로직 등
 * 게임 전체를 대상으로 하여
 * 시뮬레이션 비율을 설정합니다.
 */
export const setSlowMotion = (
	/**
	 * 정상 속도 대비
	 * 시뮬레이션 비율입니다.
	 * 최대 100%까지 설정 가능합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	speedPercent: string
) => {

	return `Set Slow Motion(${speedPercent})`
}