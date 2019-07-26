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
     * {335}
     */
    ongoingGlobal: IOnGoingGlobal

    /**
     * {336}
     */
    ongoingEachPlayer: IOnGoingEachPlayer

    /**
     * {337}
     */
    playerEarnedElimination: IPlayerEarnedElimination
    
    /**
     * {338}
     */
    playerDealtFinalBlow: IPlayerDealtFinalBlow

    /**
     * {339}
     */
    playerDealtDamage: IPlayerDealtDamage

    /**
     * {340}
     */
    playerTookDamage: IPlayerTookDamage

    /**
     * {341}
     */
    playerDied: IPlayerDied
}