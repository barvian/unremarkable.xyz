import RenderAside from '../components/Render/RenderAside'
import { SliderButton } from '@typeform/embed-react'
import ArrowIcon from '../public/arrow.svg'

export default function Home() {
	return (
		<RenderAside>
			<h1>A device that does less, so you can do more.</h1>
			<SliderButton style={{ marginTop: 'var(--space-4)' }} id={process.env.NEXT_PUBLIC_TYPEFORM_ID} size={550}>
				Get Notified 
				<ArrowIcon />
			</SliderButton>
		</RenderAside>
	)
}