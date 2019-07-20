/**
 * - `All` Event가 모든 플레이어에게 적용됩니다.
 * - `Slot1` ~ `Slot11`
 *   Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
 *   팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
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