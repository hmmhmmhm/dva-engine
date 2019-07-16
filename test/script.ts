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

// Value Compare
let checkCompareValue1 = Value.attacker() == Value.attacker()
let checkCompareValue2 = ((checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)))

// Value And
let checkAndValue1 = Value.attacker() && Value.attacker()

// Value Or
let checkOrValue1 = Value.attacker() || Value.attacker()

// Value Not
let checkNotValue1 = !Value.attacker()
let checkNotValue2 = (!Value.attacker())
let checkNotValue3 = ((!Value.attacker()))
let checkNotValue4 = !(checkNotValue1 && checkAndValue1)

/***
 * @TODO
 * IF COMPARE NOT SHOW FIRST THROW ERROR
 */

new Rule({
    event:
        RuleEvent.onGoingGlobal(),

    condition: [

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
        checkCompareValue1 != checkCompareValue1,

        // Complex Compare
        (checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)) != checkCompareValue1,

        // Complex Compare (Multiple Parenthesized)
        ((checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)) != checkCompareValue1 ),
        (((checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)) != checkCompareValue1 )),
        (
            (
                (
                    checkCompareValue1
                    >=
                    (
                        checkCompareValue1
                        <
                        checkCompareValue1
                    )
                )
                !=
                checkCompareValue1
            )
        ),

        // Complex Nested Compare
        checkCompareValue2 === checkCompareValue2,

        // Unary Compare
        checkCompareValue1,
        
        // Complex Nested Unary Compare
        checkCompareValue2,
    ],
    
    action: [
        Action.kill(
            Type.Player.attacker(),
            Type.AssisterParam.Null()
        )
    ]
})