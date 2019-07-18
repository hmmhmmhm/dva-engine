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

## AST Work

For productive coding, some types defined in the existing workshop need to be objectified to data within the existing type script through AST parser. The information required for these operations is organized below.

## AST Controller

> Categorized dependent methods that cannot be used unless the instance is referenced

### Array

#### Independent

	1. EmptyArray (`new Array()`, `[]`)

#### Dependent

1. appendToArray (`append()`)
2. arrayContains (`includes()`)
3. arraySlice (`slice()`)
4. countOf (`length`)
5. currentArrayElement (`element`) <LIMITED filter: filteredArray, sort: sortArray>
7. filteredArray (`filter`)
8. firstOf (`[0]`)
9. indexOfArrayValue (`indexOf`)
10. lastOf (`[length]`)
10. removeFromArray (` remove`)
11. sortedArray (`sort`)
12. valueInArray (`[index]`)

### Util(Number)

#### Independent

1. max
2. min
3. normalizedHealth
4. randomInteger (`random`)
5. randomReal
6. randomValueInArray
7. randomizedArray
8. roundToInteger (`Math.round`, `Math.ceil`, `Math.floor`)
9. squareRoot (`Math.sqrt`)

### Player

#### Dependent

1. altitudeOf
2. closestPlayerTo
3. eyePosition
4. facingDirectionOf
5. farthestPlayerFrom
6. hasStatus
7. health
8. heroOf
9. horizontalAngleFromDirection
10. horizontalFacingAngleOf
11. horizontalSpeedOf
12. isAlive
13. isButtonHeld
14. isCommunicating
15. isCommunicatingAny
16. isCommunicatingAnyEmote
17. isCommunicatingVoiceLine
18. isCrouching
19. isDead
20. isFiringPrimary
21. isFiringSecondary
22. isInAir
23. isInSpawnRoom
24. isMoving
25. isOnGround
26. isOnObjective
27. isOnWall
28. isPortraitOnFire
29. isStanding
30. isUsingAbility1
31. isUsingAbility2
32. isUsingUltimate
33. maxHealth
34. numberOfDeaths
35. numberOfEliminations
36. numberOfFinalBlows
37. playerClosestToReticle
38. playersInViewAngle
39. positionOf
40. scoreOf
41. speedOf
42. speedOfInDirection
43. teamOf
44. throttleOf
45. ultimateChargePercent
46. velocityOf
47. verticalAngleTowards
48. verticalFacingAngleOf
49. verticalSpeedOf

### Vector

#### Independent

1. Vector (`new Vector(x, y, z)`)

#### Dependent

1. angleBetweenVectors
2. localVectorOf
3. worldVectorOf
4. angleDifference
5. acrossineInDegrees
6. arccosineInRadians
7. arcsineInDegrees
8. arcsineInRadians
9. arctangentInDegrees
10. arctangentInRadians
11. cosineFromDegrees
12. cosineFromRadians
13. crossProduct
14. directionFromAngles
15. directionTowards
16. distanceBetween
17. dotProduct
18. down
19. forward
20. horizontalAngleTowards
21. isInLineOfSight
22. isInViewAngle
23. left
24. nearestWalkablePostion
25. normalize
26. playersWithinRadius
27. right
28. sineFromDegrees
29. sineFromRadians
30. slotOf
31. tangentFromDegrees
32. tangentFromRadians
33. up
34. verticalAngleFromDirection
35. xComponentOf (`x()`)
36. yComponentOf (`y()`)
37. zComponentOf (`z()`)

### Team

#### Independent

1. Team (`new Team(type)`)
2. controlModeScoringTeam

#### Dependent

1. controlModeScoringPercentage
3. isHeroBeingPlayed
4. isTeamOnDefense
5. isTeamOnOffense
6. numberOfDeadPlayers
7. numberOfHeroes
8. numberOfLivingPlayers
9. numberOfPlayers
10. numberOfPlayersOnObjective
11. oppositeTeamOf
12. playersInSlot
13. playersOnHero
13. teamScore

### Event

#### Independent

1. eventDamage
2. eventPlayer
3. eventWasCriticalHit

### Entity

#### Dependent

1. entityExists
2. hasSpawned

### String

#### Independent

1. String (`new String(type)`)

#### Dependent

1. heroIconString

### Match

#### Independent

1. flagPosition
2. isAssemblingHeroes
3. isBetwwenRounds
4. isControlModePointLocked
5. isCTFModeInSuddenDeath
6. isFlagAtBase
7. isFlagBeingCarried
8. isGameInProgress
9. isInSetup
10. isMatchComplete
11. isObjectiveComplete
12. isWaitingForPlayers
13. matchRound
14. matchTime
15. objectiveIndex
16. objectivePosition
17. payloadProgressPercentage
18. playerCarryingFlag
19. payloadPosition
20. pointCapturePercentage
21. totalTimeElapsed

### Level

#### Independent

1. lastCreatedEntity
2. lastDamageModificationId
3. lastDamageOverTimeId
4. lastHealOverTimeId
5. lastTextId
6. rayCastHitNormal
7. rayCastHitPlayer
8. rayCastHitPosition

### Action

#### Independent

> **All of the 126's item**

## AST Type

### Number

1. absoluteValue
2. number

### Array

1. allDeadPlayers
2. allHeroes
3. allLivingPlayers
4. allPlayers
   1. allPlayersNotOnObjective
   2. allPlayersOnObjective
5. allowedHeroes

### Constant

2. attacker
2. victim
3. hero
4. null

### Operator

1. `&&` and (Boolean)
2. `||` or (Boolean)
3. `!` not (Boolean)
4. `==` compare (Boolean)
5. `+` add (Number/Vector)
6. `-` subtract (Number/Vector)
7. `/` divide (Number/Vector)
8. `*` multiply (Number/Vector)
9. `%` modulo (Number)
10. `**` raiseToPower (Number)

### Variable

1. globalVariable
2. playerVariable

### Boolean

1. false
2. true

### Util

1. isTrueForAll
2. isTrueForAny

# Additional NOTE

Necessity of unofficial launcher

- Music Resources
- Save Workshop Settings

Official Resource Support (* Translation Data)

- EN Corp 
  - https://us.forums.blizzard.com/en/overwatch/t/wiki-workshop-syntax-script-database/335011
  - https://playoverwatch.com/en-gb/news/22938941/introducing-the-overwatch-workshop#moltenfloor