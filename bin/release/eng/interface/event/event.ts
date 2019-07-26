import {
    IOnGoingGlobal,
    IOnGoingEachPlayer,
    IPlayerEarnedElimination,
    IPlayerDealtFinalBlow,
    IPlayerDealtDamage,
    IPlayerTookDamage,
    IPlayerDied
} from './child'

export interface IEvent {
    /**
     * The ONGOING - GLOBAL event attribute will
     * affect all entities in the game environment.
     */
    ongoingGlobal: IOnGoingGlobal

    /**
     * The ONGOING - EACH PLAYER event attribute
     * will affect the specified players in the
     * game environment.
     */
    ongoingEachPlayer: IOnGoingEachPlayer

    /**
     * The PLAYER EARNED ELIMINATION event attribute
     * will affect the specified players who successfully
     * score an elimination in the game environment.
     */
    playerEarnedElimination: IPlayerEarnedElimination
    
    /**
     * The PLAYER DEALT FINAL BLOW event attribute
     * will affect the specified players who successfully
     * dealt the lethal damage against another
     * player in the game environment.
     */
    playerDealtFinalBlow: IPlayerDealtFinalBlow

    /**
     * The PLAYER DEALT DAMAGE event attribute
     * will affect the specified players who successfully
     * dealt damage against another player in the
     * game environment.
     */
    playerDealtDamage: IPlayerDealtDamage

    /**
     * The PLAYER TOOK DAMAGE event attribute will
     * affect the specified players who received
     * damage in the game environment.
     */
    playerTookDamage: IPlayerTookDamage

    /**
     * The PLAYER DIED event attribute will affect
     * the specified players who died in the game environment.
     */
    playerDied: IPlayerDied
}