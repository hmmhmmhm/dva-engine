# NOTE.md

> Organize development information for compilering of projects.

## How do i distribution it?

1. Provide a codesandbox link to users.
2. Provide a web app that uses monaco editor and rete.js.

## Ruleset

The order in which create Ruleset is as follows:

1. After selecting an event,
2. Add Condition.
3. You can add Action.

Adding a Condition is optional and does not need to be added if conditions are not required.

## AST

For productive coding, some types defined in the existing workshop need to be objectified to data within the existing type script through AST parser. The information required for these operations is organized below.

### Number Type

1. Absolute Value(0)

### Custom Array Type

1. AllDeadPlayers
2. AllHeroes
3. AllLivingPlayers
4. AllPlayers
   1. AllPlayersNotOnObjective
   2. AllPlayersOnObjective
5. AllowedHeroes

### Method Type

1. AltitudeOf
2. AngleBetwwenVectors
3. Vector
4. LocalVectorOf

### Operator Type

1. And
2. Add
   1. Add(Number, Number)
   2. Add(Vector, Vector)

### Variable Type

1. GlobalVariable
2. PlayerVariable

