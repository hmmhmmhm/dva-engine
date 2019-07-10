import { IAngleDifference } from '../../../interface'

/**
 * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
 * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
 * 이외의 경우 0이나 음수가 될 수 있습니다.
 */
export const angleDifference = (value: IAngleDifference) => {
	return `Angle Difference(${value['angle1']}, ${value['angle2']})`
}