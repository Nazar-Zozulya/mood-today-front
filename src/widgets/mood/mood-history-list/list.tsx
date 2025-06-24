import { Mood } from "@/entities/mood/model/types"
import { DayMoodCard } from "../day-mood-card"
import styles from './list.module.css'

const moods: Mood[] = [
    {
        id: 1,
        date: 1717804800000, // 2024-06-08
        emotion: 'happy'
    },
    {
        id: 2,
        date: 1717718400000, // 2024-06-07
        emotion: 'sad'
    },
    {
        id: 3,
        date: 1717632000000, // 2024-06-06
        emotion: 'excited'
    },
    {
        id: 4,
        date: 1717545600000, // 2024-06-05
        emotion: 'angry'
    },
    {
        id: 5,
        date: 1717459200000, // 2024-06-04
        emotion: 'happy'
    },
    {
        id: 6,
        date: 1717372800000, // 2024-06-03
        emotion: 'sad'
    },
    {
        id: 7,
        date: 1717286400000, // 2024-06-02
        emotion: 'excited'
    },
    {
        id: 8,
        date: 1717200000000, // 2024-06-01
        emotion: 'angry'
    },
    {
        id: 9,
        date: 1717113600000, // 2024-05-31
        emotion: 'happy'
    },
    {
        id: 10,
        date: 1717027200000, // 2024-05-30
        emotion: 'sad'
    },
    {
        id: 11,
        date: 1716940800000, // 2024-05-29
        emotion: 'excited'
    },
    {
        id: 12,
        date: 1716854400000, // 2024-05-28
        emotion: 'angry'
    },
    {
        id: 13,
        date: 1716768000000, // 2024-05-27
        emotion: 'happy'
    },
    {
        id: 14,
        date: 1716681600000, // 2024-05-26
        emotion: 'sad'
    },
    {
        id: 15,
        date: 1716595200000, // 2024-05-25
        emotion: 'excited'
    },
    {
        id: 16,
        date: 1716508800000, // 2024-05-24
        emotion: 'angry'
    }
]

export function MoodHistoryList() {
    return (
        <div className={styles.container} >
            {moods.map((mood) => {
                return (
                    <DayMoodCard
                        key={mood.id}
                        id={mood.id}
                        date={mood.date}
                        emotion={mood.emotion}
                    />
                )
            })}
        </div>
    )
}
