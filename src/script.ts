/**
 * @description 오버워치 워크샵의 함수 유형입니다.
 */
import {
    RuleEvent, Value, Action,
    Type, Level, Server,
    Match, Util, Classes
} from '../bin/kor'

/**
 * @description 오버워치 워크샵의 클래스입니다.
 * @example 클래스 사용 예시는 아래와 같습니다.
 * 
 * let player = new Player()
 * player.health()
 */
const { Rule, Player, Event, Entity, Team, Vector } = Classes

// 여기에 코드를 작성합니다.
new Rule({
    event: RuleEvent.onGoingGlobal(),

    condition: [
        //
    ],
    
    action: [
        //
    ]
})