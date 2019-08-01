import {
    IOnGoingGlobal,
    IOnGoingEachPlayer,
    IPlayerEarnedElimination,
    IPlayerDealtFinalBlow,
    IPlayerDealtDamage,
    IPlayerTookDamage,
    IPlayerDied,
    IPlayerDealtHealing,
    IPlayerReceivedHealing,
    IPlayerJoinedMatch,
    IPlayerLeftMatch,
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

    /**
     * {705}
     */
    playerDealtHealing: IPlayerDealtHealing

    /**
     * {708}
     */
    playerReceivedHealing: IPlayerReceivedHealing

    /**
     * {711}
     */
    playerJoinedMatch: IPlayerJoinedMatch

    /**
     * {714}
     */
    playerLeftMatch: IPlayerLeftMatch
}