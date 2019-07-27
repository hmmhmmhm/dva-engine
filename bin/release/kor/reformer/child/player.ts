import { Type, Value } from '../../resolver'

class Player {
	public player: string

	/**
	 * @param player `Type.Player.`
	 */
	constructor(player: string = Type.Player.eventPlayer()){
		this.player = player
	}

	/**
	 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
	 * 플레이어가 표면에 있으면 0입니다.
	 */
	altitudeOf(){
		return Value.altitudeOf(this.player)
	}

	/**
	 * 한 위치에서 가장 가까운 플레이어입니다.
	 * 팀으로 제한할 수 있습니다.
	 */
	closestPlayerTo(
		/**
		 * 거리를 측정할 위치입니다.
		 * - `Type.Vector.`
		 */
		center: string,
		/**
		 * 가장 가까이 있는 플레이어가 소속된 팀입니다.
		 * - `Type.Team.`
		 */
		team: string
	){
		return Value.closestPlayerTo(center, team)
	}

	/**
	 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
	 */
	eyePosition(){
		return Value.eyePosition(this.player)
	}

	/**
	 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	 * 방향의 상대적인 단위 길이 방향 벡터입니다.
	 * 이 값에는 종 및 횡 방향이 있습니다.
	 */
	facingDirectionOf(){
		return Value.facingDirectionOf(this.player)
	}

	/**
	 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
	 * 팀의 제한을 받을 수 있습니다.
	 */
	farthestPlayerFrom(
		/**
		 * 거리 측정을 위한 위치입니다.
		 * - `Type.Vector.`
		 */
		center: string,
		/**
		 * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
		 * - `Type.Player.`
		 */
		team: string
	){
		return Value.farthestPlayerFrom(center, team)
	}

	/**
	 * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
	 * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
	 */
	hasStatus(
		/**
		 * 확인할 상태입니다.
		 * - `Type.Status.`
		 */
		status: string
	){
		return Value.hasStatus(this.player, status)
	}

	/**
	 * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
	 */
	health(){
		return Value.health(this.player)
	}

	/**
	 * 플레이어가 현재 사용하는 영웅입니다.
	 */
	heroOf(){
		return Value.heroOf(this.player)
	}

	/**
	 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
	 */
	horizontalAngleFromDirection(
		/**
		 * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
		 * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
		 * - `Type.Vector.`
		 */
		direction: string
	){
		return Value.horizontalAngleFromDirection(direction)
	}

	/**
	 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
	 * 방향의 상대적인 횡축각(단위: 도)입니다.
	 * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
	 * (+/- 180도 범위)
	 */
	horizontalFacingAngleOf(){
		return Value.horizontalFacingAngleOf(this.player)
	}

	/**
	 * 플레이어의 현재 횡축 속도(초당 미터)입니다.
	 * 여기에는 모든 종축 움직임이 배제됩니다.
	 */
	horizontalSpeedOf(){
		return Value.horizontalSpeedOf(this.player)
	}

	/**
	 * 플레이어의 생존 여부 입니다.
	 */
	isAlive(){
		return Value.isAlive(this.player)
	}

	/**
	 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
	 */
	isButtonHeld(
		/**
		 * 확인할 버튼입니다.
		 * - `Type.Button.`
		 */
		button: string
	){
		return Value.isButtonHeld(this.player, button)
	}

	/**
	 * 플레이어가 지정된 의사소통 유형
	 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	 */
	isCommunicating(
		/**
		 * 고려할 의사소통 유형입니다.
		 * 
		 * 감정 표현의 지속 시간은 정확하게 적용되며,
		 * 음성 대사의 지속 시간은 4초로 간주합니다.
		 * 
		 * 그 이외의 지속 시간은 2초로 간주합니다.
		 * - `Type.Communication.`
		 */
		type: string
	){
		return Value.isCommunicating(this.player, type)
	}

	/**
	 * 플레이어가 아무 것이든 의사소통 유형
	 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
	 */
	isCommunicatingAny(){
		return Value.isCommunicatingAny(this.player)
	}

	/**
	 * 플레이어가 감정 표현을 사용하는지 여부입니다.
	 */
	isCommunicatingAnyEmote(){
		return Value.isCommunicatingAnyEmote(this.player)
	}

	/**
	 * 플레이어가 음성 대사를 사용하는지 여부입니다.
	 * (음성 대사의 지속 시간은 4초로 추정)
	 */
	isCommunicatingAnyVoiceLine(){
		return Value.isCommunicatingAnyVoiceLine(this.player)
	}

	/**
	 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
	 */
	isCrouching(){
		return Value.isCrouching(this.player)
	}

	/**
	 * 플레이어의 사망 여부입니다.
	 */
	isDead(){
		return Value.isDead(this.player)
	}

	/**
	 * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
	 */
	isFiringPrimary(){
		return Value.isFiringPrimary(this.player)
	}

	/**
	 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
	 */
	isFiringSecondary(){
		return Value.isFiringSecondary(this.player)
	}

	/**
	 * 플레이어가 공중에 있는 상태인지 여부입니다.
	 */
	isInAir(){
		return Value.isInAir(this.player)
	}

	/**
	 * 지정된 플레이어가 전투준비실에 있는지
	 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
	 */
	isInSpawnRoom(){
		return Value.isInSpawnRoom(this.player)
	}

	/**
	 * 플레이어가 이동하고 있는지
	 * 여부(현재 속도가 0인지 여부로 판단)입니다.
	 */
	isMoving(){
		return Value.isMoving(this.player)
	}

	/**
	 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
	 */
	isOnGround(){
		return Value.isOnGround(this.player)
	}

	/**
	 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
	 */
	isOnObjective(){
		return Value.isOnObjective(this.player)
	}

	/**
	 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
	 */
	isOnWall(){
		return Value.isOnWall(this.player)
	}

	/**
	 * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
	 */
	isPortraitOnFire(){
		return Value.isPortraitOnFire(this.player)
	}

	/**
	 * 플레이어가 서 있는 상태인지 여부
	 * (이동하지 않고 공중에 있는
	 * 상태가 아닌 경우로 판단)입니다.
	 */
	isStanding(){
		return Value.isStanding(this.player)
	}

	/**
	 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
	 */
	isUsingAbility1(){
		return Value.isUsingAbility1(this.player)
	}

	/**
	 * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
	 */
	isUsingAbility2(){
		return Value.isUsingAbility2(this.player)
	}

	/**
	 * 플레이어가 궁극기를 사용하는지 여부입니다.
	 */
	isUsingUltimate(){
		return Value.isUsingUltimate(this.player)
	}

	/**
	 * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
	 */
	maxHealth(){
		return Value.maxHealth(this.player)
	}

	/**
	 * 지정된 플레이어가 기록한 사망 수입니다.
	 * 이 값은 게임이 진행 중일때만 누적됩니다.
	 */
	numberOfDeaths(){
		return Value.numberOfDeaths(this.player)
	}

	/**
	 * 지정된 플레이어가 기록한 처치 수입니다.
	 * 이 값은 게임이 진행 중일 때만 누적됩니다.
	 */
	numberOfEliminations(){
		return Value.numberOfEliminations(this.player)
	}

	/**
	 * 지정된 플레이어가 기록한 결정타 개수입니다.
	 * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
	 */
	numberOfFinalBlows(){
		return Value.numberOfFinalBlows(this.player)
	}

	/**
	 * 지정된 플레이어의 조준선에서
	 * 가장 가까운 플레이어입니다.
	 * 팀으로 제한할 수 있습니다.
	 */
	playerClosestToReticle(
		/**
		 * 가장 가까운 플레이어를 검색할 팀입니다.
		 * - `Type.Team.`
		 */
		team: string
	){
		return Value.playerClosestToReticle(this.player, team)
	}

	/**
	 * 지정된 플레이어의 조준선을 기준으로
	 * 시야각 안에 있는 플레이어입니다.
	 * 팀 단위로 제한할 수 있습니다.
	 */
	playersInViewAngle(
		/**
		 * 플레이어를 고려할 팀입니다.
		 * - `Type.Team.`
		 */
		team: string,
		/**
		 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
		 * - `Type.Number.`
		 */
		viewAngle: string
	){
		return Value.playersInViewAngle(this.player, team, viewAngle)
	}

	/**
	 * 플레이어의 현재 위치(벡터)입니다.
	 */
	positionOf(){
		return Value.positionOf(this.player)
	}

	/**
	 * 지정된 플레이어의 현재 점수입니다.
	 * 게임 모드가 개별 전투가 아닌 경우
	 * 결과값은 0이 됩니다.
	 */
	scoreOf(){
		return Value.scoreOf(this.player)
	}

	/**
	 * 플레이어의 현재 속도(초당 미터)입니다.
	 */
	speedOf(){
		return Value.speedOf(this.player)
	}

	/**
	 * 지정된 방향에서 플레이어의
	 * 현재 속도(초당 미터)입니다.
	 */
	speedOfInDirection(
		/**
		 * 플레이어의 속도를 측정할 이동 방향입니다.
		 * - `Type.Vector.`
		 */
		direction: string
	){
		return Value.speedOfInDirection(this.player, direction)
	}

	/**
	 * 해당 플레이어의 소속 팀입니다.
	 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
	 */
	teamOf(){
		return Value.teamOf(this.player)
	}

	/**
	 * 한 플레이어의 방향 입력 정보입니다. 
	 * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
	 * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
	 */
	throttleOf(){
		return Value.throttleOf(this.player)
	}

	/**
	 * 플레이어의 현재 궁극기 충전량 비율입니다.
	 */
	ultimateChargePercent(){
		return Value.ultimateChargePercent(this.player)
	}

	/**
	 * 플레이어의 현재 속도(벡터)입니다.
	 * 해당 플레이어가 표면 위에 있는 경우,
	 * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
	 */
	velocityOf(){
		return Value.velocityOf(this.player)
	}

	/**
	 * 플레이어의 전방에서 지정된
	 * 위치까지의 종축각(단위: 도)입니다.
	 * 이 값은 해당 위치가
	 * 플레이어 아래에 있는 경우 양수이며,
	 * 그 외의 경우 0이거나 음수입니다.
	 */
	verticalAngleTowards(
		/**
		 * 각 각이 종료되는 월드 내 위치입니다.
		 * - `Type.Vector.`
		 */
		position: string
	){
		return Value.verticalAngleTowards(this.player, position)
	}

	/**
	 * 월드에 대해 상대적으로 플레이어가
	 * 바라보고 있는 방향의 종축각(단위: 도)입니다.
	 * 이 값은 플레이어가 내려다보는 경우 증가합니다.
	 */
	verticalFacingAngleOf(){
		return Value.verticalFacingAngleOf(this.player)
	}

	/**
	 * 플레이어의 현재 종축 속도(초당 미터)입니다.
	 * 여기에는 경사로를 오르내리는 등의 움직임 등
	 * 모든 횡축 이동이 배제됩니다.
	 */
	verticalSpeedOf(){
		return Value.verticalSpeedOf(this.player)
	}
}

export default Player