/**
 * The absolute value is a measure of how far
 * the number is from zero. If you think of
 * a number line, with zero in the center,
 * all you’re really doing is asking how far
 * away you are from this zero point. For example
 * the Absolute Value of 4 is 4 and the absolute
 * value of -6 is 6.
 */
export const absoluteValue = (
	/**
	 * Value - You can specify any Value Syntax
	 * to define the Absolute Value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Absolute Value(${value})`
}