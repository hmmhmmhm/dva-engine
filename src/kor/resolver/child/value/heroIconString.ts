import { 
	IHero,
 } from '../../../interface'

/**
 * HERO 매개변수를 아이콘으로 표시할 문자열로 변환합니다.
 */
export const heroIconString = (
	value: IHero
) => {

	return `Hero Icon String(${value})`
}