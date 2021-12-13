import Image from 'next/image'
import renderImage from './render.png'
import Shadow from './shadow.svg'
import styles from './index.module.css'

export default function Render() {
	return (
		<div className={`render ${styles.wrapper}`}>
			<Shadow className={styles.shadow} />
			<Image className={styles.image} src={renderImage} alt="Unremarkable tablet render" />
		</div>
	)

}
