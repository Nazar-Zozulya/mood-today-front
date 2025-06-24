import { SmileButton } from "@/features/mood/smile-button";
import styles from './select.module.css'


export function SelectMood() {


    return (
        <div className={styles.container}>
            <p className={styles.title}>What’s your mood today?</p>
            <div className={styles.moodsContainer}>
                <SmileButton icon="/assets/images/smile.png" emotion="excited"></SmileButton>
                <SmileButton icon="/assets/images/smile.png" emotion="happy"></SmileButton>
                <SmileButton icon="/assets/images/smile.png" emotion="sad"></SmileButton>
                <SmileButton icon="/assets/images/smile.png" emotion="angry"></SmileButton>
            </div>
        </div>
    )
}