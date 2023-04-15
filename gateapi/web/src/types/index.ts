export type HTMLInputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'

export type IconOptions =
	| 'bath'
	| 'bed'
	| 'date'
	| 'arrow'
	| 'people'
	| 'condo'
	| 'multi-family'
	| 'single-family'
	| 'townhome'

export type Order = {
	order_details: OrderDetail[]
	id: number
}

export type OrderDetail = {
	price: string
	image: string
	quantity: number
	product: Product
	product_id: string
	id: number
}

export type Product = {
	title: string
	in_stock: number
	maximum_speed: number
	passenger_capacity: number
	id: string
}
