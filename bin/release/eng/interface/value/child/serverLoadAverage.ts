/**
 * Provides a percentage representing the average
 * cpu load of the current game instance over
 * the last two seconds. as this number approaches
 * or exceeds 100, It becomes increasingly
 * likely that the instance will be shut down
 * because it is consuming too many resources.
 */
export interface IServerLoadAverage {}