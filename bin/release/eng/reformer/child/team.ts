import { Type, Value } from '../../resolver'

class Team {
	public team: string

	/**
	 * @param team `Type.Team.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(team: string){
		this.team = team
	}

	/**
	 * The score percentage for the specified team
	 * in the control mode.
	 */
	controlModeScoringPercentage(){
		return Value.controlModeScoringPercentage(this.team)
	}

	/**
	 * Whether a specific hero is being played
	 * (either on a team or in the match).
	 */
	isHeroBeingPlayed(
		/**
		 * Hero - The hero to check for play. Can use
		 * most Hero based Value Syntax to provide this value.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.isHeroBeingPlayed(hero, this.team)
	}

	/**
	 * Whether the specified team is currently
	 * on defense in a standard match.
	 */
	isTeamOnDefense(){
		return Value.isTeamOnDefense(this.team)
	}

	/**
	 * Whether the specified team is currently
	 * on offense in a standard match.
	 */
	isTeamOnOffense(){
		return Value.isTeamOnOffense(this.team)
	}

	/**
	 * The number of dead players on a team or in the match.
	 */
	numberOfDeadPlayers(){
		return Value.numberOfDeadPlayers(this.team)
	}

	/**
	 * The number of players playing a specific
	 * hero on a team or in the match.
	 */
	numberOfHeroes(
		/**
		 * Hero - The hero to check for play. Can use
		 * most Hero based Value Syntax to provide this value.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.numberOfHeroes(hero, this.team)
	}

	/**
	 * The number of living players on a team or in the match.
	 */
	numberOfLivingPlayers(){
		return Value.numberOfLivingPlayers(this.team)
	}

	/**
	 * The number of players on a team or in the match.
	 */
	numberOfPlayers(){
		return Value.numberOfPlayers(this.team)
	}

	/**
	 * The number of players occupying a payload
	 * or a control point (either on a team or in the match).
	 */
	numberOfPlayersOnObjective(){
		return Value.numberOfPlayersOnObjective(this.team)
	}

	/**
	 * The team opposite the specified team.
	 */
	oppositeTeamOf(){
		return Value.oppositeTeamOf(this.team)
	}

	/**
	 * The player or array of players who occupy
	 * a specific slot in the game.
	 */
	playersInSlot(
		/**
		 * Slot - The slot number from each to acquire
		 * a player or players. In team games, each
		 * team has slots 0 through 5. In free-for-all
		 * games, slots are numbered 0 through 11.
		 * Can use most Number based Value Syntax to
		 * provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		slot: string
	){
		return Value.playersInSlot(slot, this.team)
	}

	/**
	 * The array of players playing a specific
	 * hero on a team or in the match.
	 */
	playersOnHero(
		/**
		 * Hero - The hero to check for play. Can use
		 * most Hero based Value Syntax to provide this value.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.playersOnHero(hero, this.team)
	}

	/**
	 * The current score for the specified team.
	 * Results in a 0 in free-for-all game modes.
	 */
	teamScore(){
		return Value.teamScore(this.team)
	}

	/**
	 * The team that is currently accumulating
	 * score percentage in control mode Results
	 * in all if neither team is accumulating score.
	 */
	static ControlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}

	/**
	 * The team that is currently accumulating
	 * score percentage in control mode Results
	 * in all if neither team is accumulating score.
	 */
	controlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}

	/**
	 * The team that is currently accumulating
	 * score percentage in control mode Results
	 * in all if neither team is accumulating score.
	 */
	static ControlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}

	/**
	 * The team that is currently accumulating
	 * score percentage in control mode Results
	 * in all if neither team is accumulating score.
	 */
	controlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}
}

export default Team