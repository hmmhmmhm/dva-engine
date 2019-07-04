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
     * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
     * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
     * 
     * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
     *   Condition 을 만족하거나 만족하지 않을 수 있습니다.
     *   Condition을 처음 만족할 때 Action을 실행 합니다.
     * 
     * - Condition 목록을 만족하지 못했다가 만족한다면,
     *   Action을 다시 실행하려 할 것입니다.
     */
    ongoingGlobal: IOnGoingGlobal

    /**
     * 플레이어가 게임에 참여하면각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
     * 이 인스턴스는 해당 플레이어가 게임을 떠나거나, 게임이 끝날 때까지 활성화되어 있습니다.
     * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
     * 
     * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
     *   Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
     *   Condition을 처음 만족하면Action을 실행합니다.
     * 
     * - Condition 목록을 만족하지 못했다가 만족한다면,
     *   Action을 다시 실행하려 할 것입니다.
     */
    ongoingEachPlayer: IOnGoingEachPlayer

    /**
     * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
     *   모든 Condition을 만족하면 Action이 실행되지만, 
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerEarnedElimination: IPlayerEarnedElimination
    
    /**
     * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
     *   모든 Condition을 만족하면 Action이 실행되지만,
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerDealtFinalBlow: IPlayerDealtFinalBlow

    /**
     * 플레이어 한 명이 피해를 입힐 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 적에게 피해를 주면 Condition을 확인합니다.
     *   모든 Condition을 만족하면Action이 실행되지만,
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerDealtDamage: IPlayerDealtDamage

    /**
     * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
     *   모든 Condition을 만족하면Action이 실행되지만,
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerTookDamage: IPlayerTookDamage

    /**
     * 플레이어 한 명이 사망할 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 사망하면 Condition을 확인합니다.
     *   모든 Condition을 만족할 때 Action이 실행되지만,
     *   하나라도 만족하지 않으면 Action이 실행되지 않습니다.
     */
    playerDied: IPlayerDied
}