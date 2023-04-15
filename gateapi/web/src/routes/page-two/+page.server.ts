import type { Order } from '$/types/index.js'

export const load = async ({ fetch }) => {
	const res = await fetch('http://localhost:8000/orders/1')
	const order: Order = await res.json()
	return order
}
