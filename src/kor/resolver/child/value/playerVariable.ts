import { IPlayerVariable } from '../../../interface'

export const playerVariable = (value: IPlayerVariable) => {
	return `Player Variable(${value['player']}, ${value['variable']})`
}