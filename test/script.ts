// Categorized function collection.
import { RuleEvent, Value, Action, Level, Server, Match, Util, Type, Classes } from '../bin/release/kor'

// Classified data type.
const { Array, Bool, Number, String } = Type

// Reprocessed function class.
const { Rule, Player, Event, Entity, Team, Vector } = Classes

/**
 * @description
 * Write the workshop code from below.
 */

// Check condition
let checkCompareValue1 = Value.attacker() == Value.attacker()
let checkCompareValue2 = ((checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)))

// Check and
let checkAndValue1 = Value.attacker() && Value.attacker()

// Check or
let checkOrValue1 = Value.attacker() || Value.attacker()

// Check not
let checkNotValue1 = !Value.attacker()
let checkNotValue2 = (!Value.attacker())
let checkNotValue3 = ((!Value.attacker()))
let checkNotValue4 = !(checkNotValue1 && checkAndValue1)

// Check operator overload
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

let checkOperator1 = ((a*b)/c+d) % e + (f+g+h+i) - (j-(k*l/m) - n * o)

// Check array
/*
let checkArray1 = Type.Array.allDeadPlayers(Type.Team.team(Type.TeamConstant.Default('All')))

checkArray1.length
checkArray1.pop()
checkArray1.shift()
checkArray1.slice(0, 1)
checkArray1.reverse()
checkArray1.push(Value.number(1))
checkArray1.sort((a, b)=> a * b)
checkArray1.reduce((previousValue, currentValue, currentIndex)=>{
    //
})
checkArray1.reduceRight((previousValue, currentValue, currentIndex)=>{
    //
})
checkArray1.some((value, index, array)=>{
    //
})
checkArray1.splice(1, 1, [])
checkArray1.map((value, index, array)=> {
    //
})
checkArray1.unshift()
checkArray1.values()
checkArray1.concat()
checkArray1.copyWithin(1, 1, 1)
checkArray1.entries()
checkArray1.every((value, index, array)=>{
    //
})
checkArray1.fill(1, 2, 3)
checkArray1.find((value, index,obj)=>{
    //
}, 1)
checkArray1.findIndex((value, index,obj)=>{
    //
}, 1)
checkArray1.forEach((value, index, array)=>{
    //
})
*/

// Check empty array overload
let checkEmptyArray = []

new Rule({
    description: '1',
    event:
        RuleEvent.onGoingGlobal(),

    condition: [

        // Check condition
        Value.attacker() == Event.EventPlayer(),
        Value.attacker() === Event.EventPlayer(),
        Value.attacker() != Event.EventPlayer(),
        Value.attacker() !== Event.EventPlayer(),
        Value.attacker() >= Event.EventPlayer(),
        Value.attacker() <= Event.EventPlayer(),
        Value.attacker() > Event.EventPlayer(),
        Value.attacker() < Event.EventPlayer(),

        // Check nested condition
        checkCompareValue1 != checkCompareValue1,

        // Check complex condition
        (checkCompareValue1 >= (checkCompareValue1 < checkCompareValue1)) != checkCompareValue1,

        // Check complex condition (multiple parenthesized)
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

        // Check complex nested condition
        checkCompareValue2 === checkCompareValue2,

        // Check unary condition
        checkCompareValue1,
        
        // Check complex nested usnary compare
        checkCompareValue2,
    ],

    action: [
        Action.kill(
            Type.Player.attacker(),
            Type.AssisterParam.Null()
        )
    ]
})

new Rule({
    description: '2',

    // Set the event type
    event: RuleEvent.onGoingGlobal(),
    condition: [
        // Write the rule condition.
    ],
    action: [
        // Write the rule action.
    ]
})
new Rule({
    description: '3',

    // Set the event type
    event: RuleEvent.onGoingGlobal(),
    condition: [
        // Write the rule condition.
    ],
    action: [
        // Write the rule action.
    ]
})