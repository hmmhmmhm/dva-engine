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

// Check Compare
let checkCompareValue1 = Value.attacker() == Value.attacker()
let checkCompareValue2 = ((checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)))

// Check And
let checkAndValue1 = Value.attacker() && Value.attacker()

// Check Or
let checkOrValue1 = Value.attacker() || Value.attacker()

// Check Not
let checkNotValue1 = !Value.attacker()
let checkNotValue2 = (!Value.attacker())
let checkNotValue3 = ((!Value.attacker()))
let checkNotValue4 = !(checkNotValue1 && checkAndValue1)

// Check Operator
let a = Value.number(1)
let b = Value.number(2)
let c = Value.number(3)
let d = Value.number(4)
let e = Value.number(4)
let f = Value.number(4)
let g = Value.number(4)
let h = Value.number(4)
let i = Value.number(4)
let j = Value.number(4)
let k = Value.number(4)
let l = Value.number(4)
let m = Value.number(4)
let n = Value.number(4)
let o = Value.number(4)

// @ts-ignore
let checkOperator1 = ((a*b)/c+d) % e + (f+g+h+i) - (j-(k*l/m) - n * o)


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