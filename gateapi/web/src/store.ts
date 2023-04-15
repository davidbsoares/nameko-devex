import { writable, type Writable } from 'svelte/store'

export type PropertyFormType = {
	[key: string]: string
}

export const property: Writable<PropertyFormType> = writable({
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
