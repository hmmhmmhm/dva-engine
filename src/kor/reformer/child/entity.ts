import { Type, Value } from '../../resolver'

class Entity {
	public entity: string

	/**
	 * @param entity `Type.Entity.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(entity: string){
		this.entity = entity
	}

	/**
	 * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
	 * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
	 */
	entityExists(){
		return Value.entityExists(this.entity)
	}

	/**
	 * 월드에 개체가 생성되었는지 여부입니다.
	 * 플레이어가 영웅을 선택하지 않은 경우
	 * 결과값은 FALSE 입니다.
	 */
	hasSpawned(){
		return Value.hasSpawned(this.entity)
	}
}

export default Entity