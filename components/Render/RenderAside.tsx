import { PropsWithChildren } from 'react'
import Render from '.'
import styles from './RenderAside.module.css'

export default function RenderAside({ children }: PropsWithChildren) {
	return (
		<div className={styles.wrapper}>
			<Render />
			{children}
		</div>
	)
}
