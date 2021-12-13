import Render from './'
import styles from './RenderAside.module.css'

export default function RenderAside({ children }) {
	return (
		<div className={styles.wrapper}>
			<Render className={styles.render} />
			{children}
		</div>
	)
}