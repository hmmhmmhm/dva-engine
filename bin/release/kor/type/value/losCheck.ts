/**
 * 결과 배열에 포함되기 위해
 * 플레이어가 시야 확인을
 * 통과해야 하는지 여부 및
 * 방법을 지정합니다.
 */
export type ValueLosCheckType
    = 'Off'
    | 'Surfaces'
    | 'Surfaces And Enemy Barriers'
    | 'Surfaces And All Barriers'