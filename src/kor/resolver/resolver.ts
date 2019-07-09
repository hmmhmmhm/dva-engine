import { onGoingEachPlayer } from '../resolver/event/onGoingEachPlayer'

export const Resolver = () => {
    console.log('First Test')
    console.log(
        onGoingEachPlayer({
            team: "All",
            player: "All"
        })
    )
}