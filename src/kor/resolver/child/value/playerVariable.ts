import { 
	ValuePlayerType,
	VariableType,
 } from '../../../interface'

export const playerVariable = (
	player: ValuePlayerType,
	variable: VariableType
) => {

	return `Player Variable(${player}, ${variable})`
}