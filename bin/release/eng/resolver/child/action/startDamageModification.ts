/**
 * Starts modifying how much damage one or
 * more receivers will receive from one or
 * more damagers. A reference to this damage
 * modification can be obtained from the last
 * damage modification ID value. This action
 * will fail if too many damage modifications
 * have been started.
 */
export const startDamageModification = (
	/**
	 * Damagers - The player or players whose outgoing
	 * damage will be modified (when attacking
	 * the receivers). Can use most Player based Value Syntax.
	 * - `Type.PlayersParam.`
	 */
	receivers: string | number | any[],
	/**
	 * Damage Percent - The percentage of damage
	 * that will apply to receivers when attacked
	 * by damagers. Can use most Number based Value
	 * Syntax to specify.
	 * - `Type.PlayersParam.`
	 */
	damagers: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated.
	 * This action will keep asking for and using
	 * new values from reevaluated inputs. Can
	 * choose from “Receivers, Damagers, and Damage
	 * Percent”, “Receivers and Damagers”, or “None”.
	 * - `Type.Number.`
	 */
	damagePercent: string | number | any[],
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.DamageModificationReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Start Damage Modification(${receivers}, ${damagers}, ${damagePercent}, ${reevaluation})`
}