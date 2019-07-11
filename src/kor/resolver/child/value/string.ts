import { 
	ValueTextType,
	IHeroIconString,
	IString,
	INull,
 } from '../../../interface'

/**
 * 지정된 값의 제곱근입니다.
 */
export const string = (
	/**
	 * 결과로 표시되는 텍스트입니다.
	 * 중괄호 안의 숫자는 대응값으로 교체됩니다.
	 */
	string: ValueTextType,
	/**
	 * 텍스트로 전환되어 {0}을 대체할 값입니다.
	 */
	_0: IHeroIconString | IString | INull,
	/**
	 * 텍스트로 전환되어 {1}을 대체할 값입니다.
	 */
	_1: IHeroIconString | IString | INull,
	/**
	 * 텍스트로 전환되어 {2}를 대체할 값입니다.
	 */
	_2: IHeroIconString | IString | INull
) => {

	return `String(${string}, ${_0}, ${_1}, ${_2})`
}