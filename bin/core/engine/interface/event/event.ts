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
     * {336}
     */
    ongoingGlobal: IOnGoingGlobal

    /**
     * {337}
     */
    ongoingEachPlayer: IOnGoingEachPlayer

    /**
     * {338}
     */
    playerEarnedElimination: IPlayerEarnedElimination
    
    /**
     * {339}
     */
    playerDealtFinalBlow: IPlayerDealtFinalBlow

    /**
     * {340}
     */
    playerDealtDamage: IPlayerDealtDamage

    /**
     * {341}
     */
    playerTookDamage: IPlayerTookDamage

    /**
     * {342}
     */
    playerDied: IPlayerDied
}