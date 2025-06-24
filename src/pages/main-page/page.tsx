import { Input } from "@/shared/ui/input"
import styles from "./page.module.css"
import { SelectMood } from "@/widgets/mood/select-mood"
import { UserCard } from "@/widgets/user/ui/user-card"
import { LoginAndRegisterForm } from "@/widgets/user/ui/login-and-register-form"
import { StreakBlock } from "@/widgets/mood/streak-block"
import { MoodHistoryList } from "@/widgets/mood/mood-history-list"
import { MoodHistoryBlock } from "@/widgets/mood/mood-history-block"

// import starIcon from '@/';

export function MainPage() {
	return (
		<div className={styles.container}>
			<div className={styles.leftBlock}>
				{/* <LoginAndRegisterForm /> */}
				<StreakBlock />
				<MoodHistoryBlock />

			</div>
			{/* <LoginAndRegisterForm /> */}
			<UserCard />

			<SelectMood />
		</div>
	)
}
