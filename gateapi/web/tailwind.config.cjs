const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				arrow: "url('arrow-down.svg')",
			},
			backgroundPosition: {
				'arrow-pos': 'right 0.8rem center',
			},
			backgroundSize: {
				'arrow-size': '1em 1em',
			},
			boxShadow: {
				custom: '0px 4px 16px rgba(0, 0, 0, 0.1);',
			},
		},
	},

	plugins: [forms, typography],
}

module.exports = config
