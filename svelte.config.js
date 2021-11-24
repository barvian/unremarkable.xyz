/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		vite: {
            define: {
                'process.env': process.env // for Vercel only, Vite doesn't expose these by default
            },
        }
	}
}

export default config
