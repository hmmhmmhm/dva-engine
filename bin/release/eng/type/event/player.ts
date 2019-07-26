/**
 * - `All' Event applies to all players.
 * - `Slot1' ~ `Slot11`
 *  Event only applies to players in specific slots.
 *  In a team competition, two players can
 * occupy one slot (one for each team).
 */
export type EventPlayerType
    = 'All'
    | 'Slot0'
    | 'Slot1'
    | 'Slot2'
    | 'Slot3'
    | 'Slot4'
    | 'Slot5'
    | 'Slot6'
    | 'Slot7'
    | 'Slot8'
    | 'Slot9'
    | 'Slot10'
    | 'Slot11'