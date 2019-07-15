/**
 * @description 오버워치 워크샵의 함수 유형입니다.
 */
import { Type, Value, Action, RuleEvent, Level, Match, Util, Classes } from '../bin/kor'

/**
 * @description 오버워치 워크샵의 클래스입니다.
 * @example 클래스 사용 예시는 아래와 같습니다.
 * 
 * let player = new Player()
 * player.health()
 */
const { Rule, Player, Event, Entity, Team, Vector } = Classes

let checkValue = Value.attacker() == Value.attacker()

// 아래에서부터 개인코드 작성을 작성합니다.

new Rule({
    event:
        RuleEvent.onGoingGlobal(),

    condition: [
        /***
         * @TODO
         * IF COMPARE NOT SHOW FIRST THROW ERROR
         */

        // Compare
        Value.attacker() == Event.EventPlayer(),
        Value.attacker() === Event.EventPlayer(),
        Value.attacker() != Event.EventPlayer(),
        Value.attacker() !== Event.EventPlayer(),
        Value.attacker() >= Event.EventPlayer(),
        Value.attacker() <= Event.EventPlayer(),
        Value.attacker() > Event.EventPlayer(),
        Value.attacker() < Event.EventPlayer(),

        // Nested Compare
        checkValue != checkValue,

        // Complex Compare
        (checkValue >= (checkValue < checkValue)) != checkValue,
        ((checkValue >= (checkValue < checkValue)) != checkValue),

        // Unary Compare
        checkValue,

        // And
        // Or
    ],
    
    action: [
        Action.kill(
            Type.Player.attacker(),
            Type.AssisterParam.Null()
        )
    ]
})

/**
 * @todo
 * 1. TTSC Operator Overload
 *   1. Condition
 *   2. Array
 */