import { Mood } from '@/entities/mood/model/types'
import styles from './card.module.css'

export function DayMoodCard(props: Mood) {
    const { emotion, date } = props

    function parseDate(date: number) {
        const newDate = new Date(date)

        const month = newDate.getMonth() + 1
        const day = newDate.getDay()

        return day + '.' + month
    }

    return (
        <div className={styles.container}>
            <p className={styles.dayText}>{parseDate(date)}</p>
            {/* TODO сделать отображение картинки в зависимости от настроения */}
            <img className={styles.moodIcon} src="/assets/images/smile.png" alt="" />
        </div>
    )
}