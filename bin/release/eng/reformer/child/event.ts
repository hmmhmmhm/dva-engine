import { Type, Value } from '../../resolver'

class Event {
	public event: string

	/**
	 * @param event `Type.Event.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(event: string){
		this.event = event
	}

	/**
	 * The amount of damage received by the victim
	 * for the event currently being processed by this rule.
	 */
	static EventDamage(){
		return Value.eventDamage()
	}

	/**
	 * The amount of damage received by the victim
	 * for the event currently being processed by this rule.
	 */
	eventDamage(){
		return Value.eventDamage()
	}

	/**
	 * The player executing the rule, as specified
	 * by the event, may be the same as the attacker or victim.
	 */
	static EventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * The player executing the rule, as specified
	 * by the event, may be the same as the attacker or victim.
	 */
	eventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * Whether the damage was a critical hit (such
	 * as a headshot) for the event currently being
	 * processed by this rule.
	 */
	static EventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}

	/**
	 * Whether the damage was a critical hit (such
	 * as a headshot) for the event currently being
	 * processed by this rule.
	 */
	eventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}

	/**
	 * The amount of damage received by the victim
	 * for the event currently being processed by this rule.
	 */
	static EventDamage(){
		return Value.eventDamage()
	}

	/**
	 * The amount of damage received by the victim
	 * for the event currently being processed by this rule.
	 */
	eventDamage(){
		return Value.eventDamage()
	}

	/**
	 * The player executing the rule, as specified
	 * by the event, may be the same as the attacker or victim.
	 */
	static EventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * The player executing the rule, as specified
	 * by the event, may be the same as the attacker or victim.
	 */
	eventPlayer(){
		return Value.eventPlayer()
	}

	/**
	 * Whether the damage was a critical hit (such
	 * as a headshot) for the event currently being
	 * processed by this rule.
	 */
	static EventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}

	/**
	 * Whether the damage was a critical hit (such
	 * as a headshot) for the event currently being
	 * processed by this rule.
	 */
	eventWasCriticalHit(){
		return Value.eventWasCriticalHit()
	}
}

export default Event