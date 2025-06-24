import styles from './block.module.css'


export function StreakBlock(){

    return(
        <div className={styles.container}>
            <img src="/assets/images/fire.png" className={styles.fireIcon} />
            <p className={styles.streakText}>Sad streak 5 days</p>
        </div>
    )
}