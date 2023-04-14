import { writable } from 'svelte/store'

export const property = writable({
	propertyName: '',
	address: '',
	type: '',
	unitName: '',
	rent: '',
	deposit: '',
	lease: '',
	beds: '',
	baths: '',
	sqFt: '',
	availableOn: '',
	vacancy: '',
})
