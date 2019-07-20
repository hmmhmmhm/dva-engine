/**
 * `BARRIERS DO NOT BLOCK LOS`
 * 어떤 방벽도 시야를 방해하지 않습니다.
 * 
 * `ENEMY BARRIERS BLOCK LOS`
 * 시야가 적팀의 방벽으로 인해 가려집니다.
 * 
 * `ALL BARRIERS BLOCK LOS`
 * 시야가 모든 방벽으로 인해 가려집니다.
 */
export type ValueBarrierType
    = 'Barriers Do Not Block Los'
    | 'Enemy Barriers Block Los'
    | 'All Barriers Block Los'