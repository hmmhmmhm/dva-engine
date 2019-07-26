/**
 * Stops an instance of heal over time that
 * was started by the start heal over time action
 */
export const stopHealOverTime = (
	/**
	 * Heal Over Time ID - Specifies which heal
	 * over time instance to stop, this ID may
	 * be the last heal over time ID or a variable
	 * into which last heal over time ID was earlier
	 * stored. Can use most Number based Value Syntax.
	 * - `Type.HealOverTimeId.`
	 */
	healOverTimeId: string | number | any[]
) => {

	return `Stop Heal Over Time(${healOverTimeId})`
}