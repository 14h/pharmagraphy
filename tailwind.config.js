module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './pages/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './components/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'accent-1': '#152727',
                'accent-2': '#2A4E4A',
                'accent-3': '#498277',
                'accent-4': '#AA4418',
                'accent-5': '#DF6C36',
                'accent-6': '#F29D4C',
                'accent-7': '#73A097',
                'accent-8': '#B0C6C2',
                'accent-9': '#FEFCFB',
                'accent-10': '#00000055',
                success: '#0070f3',
                cyan: '#79ffe1',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [
    ]
}
