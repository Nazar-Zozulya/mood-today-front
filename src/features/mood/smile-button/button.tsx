import { ISmileButtonProps } from "./button.types";
import styles from './button.module.css'


export function SmileButton(props: ISmileButtonProps) {
    
    return (
        <button onClick={()=> props.emotion} className={styles.button} >
            <img src={props.icon} alt="" className={styles.image} />
        </button>
    )
}