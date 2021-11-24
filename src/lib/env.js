import { dev } from '$app/env'

const env = dev ? import.meta.env : process.env
export default env