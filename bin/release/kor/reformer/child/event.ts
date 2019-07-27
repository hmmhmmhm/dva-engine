import { Type, Value } from '../../resolver'

class Event {
	public event: string

	/**
	 * @param event `Type.Event.`
	 */
	constructor(event: string){
		this.event = event
	}

	/**
	 * 이 규칙에 의해 현재 처리되고 있는
	 * 이벤트의 VICTIM이 받는 피해량입니다.
	 */
	static EventDamage(){
		return Value.eventDamage()
	}

	/**
	 * 이 규칙에 의해 현재 처리되고 있는
	 * 이벤트의 VICTIM이 받는 피해량입니다.
	 */
	eventDamage(){
		return Value.eventDamage()
	}

	/**
	 * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
	 * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
	 */
	static EventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
	 * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
	 */
	eventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
	 * 피해가 치명타(헤드샷 등)인지 여부입니다.
	 */
	static EventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}

	/**
	 * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
	 * 피해가 치명타(헤드샷 등)인지 여부입니다.
	 */
	eventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}
}

export default Event