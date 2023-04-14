export const load = async ({ fetch }) => {
	const res = await fetch('http://localhost:8000/orders/1', {
		headers: { 'Access-Control-Allow-Origin': '*' },
	})
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
	console.log(res)
	return { test: 1 }
}
