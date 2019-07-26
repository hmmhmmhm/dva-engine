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
	 * Whether the specified player, icon entity,
	 * or effect entity still exists. Useful for
	 * determining if a player has left the match
	 * or an entity has been destroyed.
	 */
	entityExists(){
		return Value.entityExists(this.entity)
	}

	/**
	 * Whether an entity has spawned in the world.
	 * Results in false for players who have not
	 * chosen a hero yet.
	 */
	hasSpawned(){
		return Value.hasSpawned(this.entity)
	}
}

export default Entity