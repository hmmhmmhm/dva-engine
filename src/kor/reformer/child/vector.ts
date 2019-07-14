import { Type, Value } from '../../resolver'

class Vector {
	public vector: string

	/**
	 * @param vector `Type.Vector.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(vector: string){
		this.vector = vector
	}

	/**
	 * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
	 */
	angleBetweenVectors(
		/**
		 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
		 * 이 벡터를 미리 정규화할 필요는 없습니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		vector1: string,
		/**
		 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
		 * 이 벡터를 미리 정규화할 필요는 없습니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		vector2: string
	){
		return Value.angleBetweenVectors(vector1, vector2)
	}

	/**
	 * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
	 */
	localVectorOf(
		/**
		 * 로컬 좌표로 전환될 월드 좌표 벡터입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		worldVector: string,
		/**
		 * 결과 벡터와 연관될 플레이어입니다.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		relativePlayer: string,
		/**
		 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
		 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
		 * - `Type.Transformation.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		transformation: string
	){
		return Value.localVectorOf(worldVector, relativePlayer, transformation)
	}

	/**
	 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
	 */
	worldVectorOf(
		/**
		 * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		localVector: string,
		/**
		 * 결과 벡터와 연관될 플레이어입니다.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		relativePlayer: string,
		/**
		 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
		 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
		 * - `Type.Transformation.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		transformation: string
	){
		return Value.worldVectorOf(localVector, relativePlayer, transformation)
	}

	/**
	 * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
	 * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
	 * 이외의 경우 0이나 음수가 될 수 있습니다.
	 */
	angleDifference(
		/**
		 * 결과각을 도출하기 위한 두 각 중 하나입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle1: string,
		/**
		 * 결과각을 도출하기 위한 두 각 중 하나입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle2: string
	){
		return Value.angleDifference(angle1, angle2)
	}

	/**
	 * 지정된 각(단위: 도)의 아크코사인 값입니다.
	 */
	acrossineInDegrees(
		/**
		 * 함수의 입력값입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.acrossineInDegrees(value)
	}

	/**
	 * 지정된 각(단위: RAD)의 아크코사인 값입니다.
	 */
	arccosineInRadians(
		/**
		 * 함수의 입력값입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arccosineInRadians(value)
	}

	/**
	 * 지정된 각(단위: 도)의 아크사인 값입니다.
	 */
	arcsineInDegrees(
		/**
		 * 함수의 입력값입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arcsineInDegrees(value)
	}

	/**
	 * 지정된 각(단위: RAD)의 아크사인 값입니다.
	 */
	arcsineInRadians(
		/**
		 * 함수의 입력값입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arcsineInRadians(value)
	}

	/**
	 * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
	 * (흔히 ATAN2 로 불림)
	 */
	arctangentInDegrees(
		/**
		 * 함수의 분자 입력 정보입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		numerator: string,
		/**
		 * 함수의 분모 입력 정보입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		denominator: string
	){
		return Value.arctangentInDegrees(numerator, denominator)
	}

	/**
	 * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
	 * (흔히 ATAN2 로 불림)
	 */
	arctangentInRadians(
		/**
		 * 함수의 분자 입력 정보입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		numerator: string,
		/**
		 * 함수의 분모 입력 정보입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		denominator: string
	){
		return Value.arctangentInRadians(numerator, denominator)
	}

	/**
	 * 지정된 각(단위: 도)의 코사인 값입니다.
	 */
	cosineFromDegrees(
		/**
		 * 각(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.cosineFromDegrees(angle)
	}

	/**
	 * 지정된 각(단위: RAD)의 코사인 값입니다.
	 */
	cosineFromRadians(
		/**
		 * 각(단위: RAD)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.cosineFromRadians(angle)
	}

	/**
	 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
	 */
	crossProduct(
		/**
		 * 가위곱의 왼쪽 벡터 피연산자입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value1: string,
		/**
		 * 가위곱의 오른쪽 벡터 피연산자입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value2: string
	){
		return Value.crossProduct(value1, value2)
	}

	/**
	 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
	 */
	directionFromAngles(
		/**
		 * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		horizontalAngle: string,
		/**
		 * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		verticalAngle: string
	){
		return Value.directionFromAngles(horizontalAngle, verticalAngle)
	}

	/**
	 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
	 */
	directionTowards(
		/**
		 * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string
	){
		return Value.directionTowards(startPos, endPos)
	}

	/**
	 * 두 위치 사이의 거리(미터)입니다.
	 */
	distanceBetween(
		/**
		 * 거리 측정에 사용되는 두 위치 중 하나입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * 거리 측정에 사용되는 두 위치 중 하나입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string
	){
		return Value.distanceBetween(startPos, endPos)
	}

	/**
	 * 지정된 값의 점곱입니다.
	 */
	dotProduct(
		/**
		 * 점곱의 백터 피연산자 두 개 중 하나입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value1: string,
		/**
		 * 점곱의 백터 피연산자 두 개 중 하나입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value2: string
	){
		return Value.dotProduct(value1, value2)
	}

	/**
	 * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
	 */
	down(){
		return Value.down()
	}

	/**
	 * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
	 */
	forward(){
		return Value.forward()
	}

	/**
	 * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
	 * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
	 * 그 외의 경우 0이거나 음수입니다.
	 */
	horizontalAngleTowards(
		/**
		 * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string,
		/**
		 * 각 각이 종료되는 월드 내 위치입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		position: string
	){
		return Value.horizontalAngleTowards(player, position)
	}

	/**
	 * 두 위치가 서로 보이는지 여부입니다.
	 */
	isInLineOfSight(
		/**
		 * 시야 확인의 시작 위치입니다.
		 * 플레이어가 설정되어 있으면
		 * 해당 플레이어의 발 위로
		 * 2미터 위치가 사용됩니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * 시야 확인의 종료 위치입니다.
		 * 플레이어가 설정되어 있으면
		 * 해당 플레이어의 발 위로
		 * 2미터 위치가 사용됩니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string,
		/**
		 * 방벽이 시야에 미치는 영향을 정의합니다.
		 * 방벽이 적 소유인지를 판정할 때는
		 * START POS에 제공된 플레이어의
		 * 소속(있는 경우)이 사용됩니다.
		 * - `Type.Barrier.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		barriers: string
	){
		return Value.isInLineOfSight(startPos, endPos, barriers)
	}

	/**
	 * 두 위치가 서로 보이는지 여부입니다.
	 */
	isInViewAngle(
		/**
		 * 시야를 확인할 플레이어입니다.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string,
		/**
		 * 시야에 있는지 테스트할 LOCATION입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		location: string,
		/**
		 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		viewAngle: string
	){
		return Value.isInViewAngle(player, location, viewAngle)
	}

	/**
	 * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
	 */
	left(){
		return Value.left()
	}

	/**
	 * 서 있을 수 있고 생성 지점에서 접근 가능하며
	 * 지정된 위치에서 가장 가까운 위치입니다.
	 */
	nearestWalkablePostion(
		/**
		 * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		position: string
	){
		return Value.nearestWalkablePostion(position)
	}

	/**
	 * 벡터의 단위 길이 정규화입니다.
	 */
	normalize(
		/**
		 * 정규화할 벡터입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		position: string
	){
		return Value.normalize(position)
	}

	/**
	 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
	 * 팀 또는 시야 범위로 제한할 수 있습니다.
	 */
	playersWithinRadius(
		/**
		 * 거리 측정이 시작되는 중간 위치입니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		center: string,
		/**
		 * 결과 배열에 포함되기 위해
		 * 플레이어가 속해 있어야 하는
		 * 반경(미터)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		radius: string,
		/**
		 * 결과 배열에 포함되기 위해
		 * 플레이어가 속해 있어야 하는
		 * 팀입니다.
		 * - `Type.Team.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		team: string,
		/**
		 * 결과 배열에 포함되기 위해
		 * 플레이어가 시야 확인을
		 * 통과해야 하는지 여부 및
		 * 방법을 지정합니다.
		 * - `Type.LosCheck.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		losCheck: string
	){
		return Value.playersWithinRadius(center, radius, team, losCheck)
	}

	/**
	 * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
	 */
	right(){
		return Value.right()
	}

	/**
	 * 지정된 각(단위: 도)의 사인 값입니다.
	 */
	sineFromDegrees(
		/**
		 * 각(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.sineFromDegrees(angle)
	}

	/**
	 * 지정된 각(단위: RAD)의 사인 값입니다.
	 */
	sineFromRadians(
		/**
		 * 각(단위: RAD)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.sineFromRadians(angle)
	}

	/**
	 * 지정된 플레이어의 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 */
	slotOf(
		/**
		 * 슬롯 번호 정보를 가져올 플레이어입니다.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string
	){
		return Value.slotOf(player)
	}

	/**
	 * 지정된 각(단위: 도)의 탄젠트 값입니다.
	 */
	tangentFromDegrees(
		/**
		 * 각(단위: 도)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.tangentFromDegrees(angle)
	}

	/**
	 * 지정된 각(단위: RAD)의 탄젠트 값입니다.
	 */
	tangentFromRadians(
		/**
		 * 각(단위: RAD)입니다.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.tangentFromRadians(angle)
	}

	/**
	 * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
	 */
	up(){
		return Value.up()
	}

	/**
	 * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
	 */
	verticalAngleFromDirection(
		/**
		 * 종축각(단위: 도) 정보를
		 * 가져올 방향 벡터입니다.
		 * 벡터는 연산 전에 정규화됩니다.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		direction: string
	){
		return Value.verticalAngleFromDirection(direction)
	}

	/**
	 * 지정된 벡터의 X 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	xComponentOf(){
		return Value.xComponentOf(this.vector)
	}

	/**
	 * 지정된 벡터의 Y 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	yComponentOf(){
		return Value.yComponentOf(this.vector)
	}

	/**
	 * 지정된 벡터의 Z 구성요소입니다.
	 * 일반적으로 왼쪽 방향의 벡터량입니다.
	 */
	zComponentOf(){
		return Value.zComponentOf(this.vector)
	}
}

export default Vector