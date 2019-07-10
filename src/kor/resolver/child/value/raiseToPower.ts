import { IRaiseToPower } from '../../../interface'

/**
 * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
 * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
 */
export const raiseToPower = (value: IRaiseToPower) => {
	return `Raise To Power(${value['value1']}, ${value['value2']})`
}