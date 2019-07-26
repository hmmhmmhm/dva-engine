/**
 * 이 액션의 조건이 TRUE일 때,
 * 액션 목록에 있는 지정된
 * 수만큼의 액션을 건너뜁니다.
 * 이 외의 경우 다음 액션으로 진행합니다.
 */
export const skipIf = (
	/**
	 * 건너뛰기가 일어나는지
	 * 여부를 지정합니다.
	 * - `Type.Bool.`
	 */
	condition: string | number | any[],
	/**
	 * 건너뛸 액션의 수입니다.
	 * 이 액션은 제외한 개수입니다.
	 * - `Type.Number.`
	 */
	numberOfActions: string | number | any[]
) => {

	return `Skip If(${condition}, ${numberOfActions})`
}