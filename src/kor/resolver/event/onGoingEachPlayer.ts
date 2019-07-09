import { IOnGoingEachPlayer } from '../../interface'

export const onGoingEachPlayer = (value: IOnGoingEachPlayer) => {
    return`
    event
    {
        Ongoing - Each Player;
        ${value.team};
        ${value.player};
    }
    `
}