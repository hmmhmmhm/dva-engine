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
	 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
	 */
	controlModeScoringPercentage(){
		return Value.controlModeScoringPercentage(this.team)
	}

	/**
	 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
	 */
	isHeroBeingPlayed(
		/**
		 * 플레이 현황을 확인할 영웅입니다.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.isHeroBeingPlayed(hero, this.team)
	}

	/**
	 * 지정된 팀이 현재 수비 중인지 여부입니다.
	 * 게임 모드가 점령, 호위,
	 * 또는 점령/호위가 아닌 경우
	 * 결과값은 FALSE입니다.
	 */
	isTeamOnDefense(){
		return Value.isTeamOnDefense(this.team)
	}

	/**
	 * 지정된 팀이 현재 공격 중인지 여부입니다.
	 * 게임 모드가 점령, 호위,
	 * 또는 점령/호위가 아닌 경우
	 * 결과값은 FALSE입니다.
	 */
	isTeamOnOffense(){
		return Value.isTeamOnOffense(this.team)
	}

	/**
	 * 팀 또는 경기 내 사망 플레이어 수입니다.
	 */
	numberOfDeadPlayers(){
		return Value.numberOfDeadPlayers(this.team)
	}

	/**
	 * 팀 또는 경기 내에서 지정된 영웅을
	 * 플레이하는 플레이어의 수입니다.
	 */
	numberOfHeroes(
		/**
		 * 플레이 현황을 확인할 영웅입니다.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.numberOfHeroes(hero, this.team)
	}

	/**
	 * 팀 또는 경기에서 생존한 플레이어의 수입니다.
	 */
	numberOfLivingPlayers(){
		return Value.numberOfLivingPlayers(this.team)
	}

	/**
	 * 팀 또는 경기 내 존재하는 플레이어 수입니다.
	 */
	numberOfPlayers(){
		return Value.numberOfPlayers(this.team)
	}

	/**
	 * 팀 또는 경기 내에서 화물 또는
	 * 거점을 확보하려는 플레이어 수입니다.
	 */
	numberOfPlayersOnObjective(){
		return Value.numberOfPlayersOnObjective(this.team)
	}

	/**
	 * 지정된 팀의 상대 팀입니다.
	 */
	oppositeTeamOf(){
		return Value.oppositeTeamOf(this.team)
	}

	/**
	 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
	 */
	playersInSlot(
		/**
		 * 플레이어 정보를 가져올 슬롯 번호입니다.
		 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
		 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		slot: string
	){
		return Value.playersInSlot(slot, this.team)
	}

	/**
	 * 팀 또는 경기 내에서 지정된 영웅을
	 * 플레이하는 플레이어가 있는 배열입니다.
	 */
	playersOnHero(
		/**
		 * 플레이 현황을 확인할 영웅입니다.
		 * - `Type.Hero.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		hero: string
	){
		return Value.playersOnHero(hero, this.team)
	}

	/**
	 * 지정된 팀의 현재 점수입니다.
	 * 개별 전투 모드에서는 결과값이 0입니다.
	 */
	teamScore(){
		return Value.teamScore(this.team)
	}

	/**
	 * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
	 * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
	 */
	static ControlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}

	/**
	 * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
	 * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
	 */
	controlModeScoringTeam(){
		return Value.controlModeScoringTeam()
	}
}

export default Team