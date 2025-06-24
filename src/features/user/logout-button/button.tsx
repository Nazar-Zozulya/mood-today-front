import { LogoutIcon } from "@/shared/ui/icons";
import styles from './button.module.css'


export function LogoutButton() {
    return (
        <button className={styles.logoutButton}>
            <LogoutIcon width={24} height={24} stroke={'#CCF2FF'} strokeWidth={3} />
        </button>
    )
}