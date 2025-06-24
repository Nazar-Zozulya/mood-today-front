import { useState } from "react"
import styles from "./block.module.css"
import { ThreeDotsButton } from "@/features/mood/three-dots-button"
import { MoodHistoryList } from "../mood-history-list"

export function MoodHistoryBlock() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div className={styles.container}>
			<ThreeDotsButton onClick={() => setIsVisible(!isVisible)} />

			{isVisible && <MoodHistoryList />}
		</div>
	)
}
