import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정한 최대값 이하, 최소값 이상
 * 범위 내에서 무작위 정수값입니다.
 */
export const randomInteger = (
	/**
	 * 허용된 최소 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 */
	min: ValueNumberType,
	/**
	 * 허용된 최대 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 */
	max: ValueNumberType
) => {

	return `Random Integer(${min}, ${max})`
}