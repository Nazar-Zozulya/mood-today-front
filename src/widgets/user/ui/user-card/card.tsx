import { LogoutIcon } from '@/shared/ui/icons'
import styles from './card.module.css'
import { LogoutButton } from '@/features/user/logout-button'


export function UserCard() {


    return(
        <div className={styles.container}>
            <p className={styles.name}>nazar</p>
            <LogoutButton />
        </div>
    )
}