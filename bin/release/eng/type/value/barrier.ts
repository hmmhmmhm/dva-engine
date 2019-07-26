/**
 * `BARRIERS DO NOT BLOCK LOS`
 * No barrier interferes with the view.
 * `ENEMY BARRIERS BLOCK LOS`
 * Syah is covered by the walls of the enemy
 * team.
 * `ALL BARRIERS BLOCK LOS`
 * Syah is covered by all the barriers.
 */
export type ValueBarrierType
    = 'Barriers Do Not Block Los'
    | 'Enemy Barriers Block Los'
    | 'All Barriers Block Los'