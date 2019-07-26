/**
 * LOS Check - Specifies whether and how a
 * player must pass a line-of-sight check to
 * be included in the resulting array. You
 * can choose from Off, Surfaces, Surfaces
 * and Enemy Barriers, and Surfaces and All
 * Barriers. Off will result in the line of
 * sight is never blocked, allowing results
 * through walls. Surfaces will result in line
 * of sight is blocked by ceilings, walls,
 * floors, platforms, and any fixed object
 * that blocks projectiles. Surfaces and Enemy
 * Barriers will result in line of sight is
 * blocked by ceilings, walls, floors, platforms,
 * any fixed object that blocks projectiles,
 * and barriers created by the enemy team.
 * Surfaces and All Barriers will result in
 * line of sight is blocked by ceilings, walls,
 * floors, platforms, any fixed object that
 * blocks projectiles, and all barriers.
 */
export type ValueLosCheckType
    = 'Off'
    | 'Surfaces'
    | 'Surfaces And Enemy Barriers'
    | 'Surfaces And All Barriers'