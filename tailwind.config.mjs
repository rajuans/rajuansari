import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#2d5f4f',
          light:   '#5cb89c',
          dim:     'rgba(45,95,79,0.07)',
        },
        violet: { DEFAULT: '#6c5ce7', dark: '#9b8afb' },
        amber:  { DEFAULT: '#b87333', dark: '#d4955a' },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Color tokens — light
            '--tw-prose-body':             theme('colors.gray[600]'),
            '--tw-prose-headings':         theme('colors.gray[900]'),
            '--tw-prose-lead':             theme('colors.gray[500]'),
            '--tw-prose-links':            theme('colors.gray[900]'),
            '--tw-prose-bold':             theme('colors.gray[900]'),
            '--tw-prose-counters':         theme('colors.gray[400]'),
            '--tw-prose-bullets':          theme('colors.gray[300]'),
            '--tw-prose-hr':               theme('colors.gray[200]'),
            '--tw-prose-quotes':           theme('colors.gray[700]'),
            '--tw-prose-quote-borders':    theme('colors.gray[200]'),
            '--tw-prose-captions':         theme('colors.gray[400]'),
            '--tw-prose-code':             theme('colors.gray[900]'),
            '--tw-prose-pre-code':         theme('colors.neutral[200]'),
            '--tw-prose-pre-bg':           theme('colors.neutral[900]'),
            '--tw-prose-th-borders':       theme('colors.gray[300]'),
            '--tw-prose-td-borders':       theme('colors.gray[100]'),
            // Color tokens — dark
            '--tw-prose-invert-body':          theme('colors.neutral[400]'),
            '--tw-prose-invert-headings':      theme('colors.neutral[100]'),
            '--tw-prose-invert-lead':          theme('colors.neutral[400]'),
            '--tw-prose-invert-links':         theme('colors.neutral[100]'),
            '--tw-prose-invert-bold':          theme('colors.neutral[100]'),
            '--tw-prose-invert-counters':      theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets':       theme('colors.neutral[600]'),
            '--tw-prose-invert-hr':            theme('colors.neutral[800]'),
            '--tw-prose-invert-quotes':        theme('colors.neutral[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions':      theme('colors.neutral[500]'),
            '--tw-prose-invert-code':          theme('colors.neutral[100]'),
            '--tw-prose-invert-pre-code':      theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg':        'rgb(0 0 0 / 0.5)',
            '--tw-prose-invert-th-borders':    theme('colors.neutral[600]'),
            '--tw-prose-invert-td-borders':    theme('colors.neutral[700]'),

            // Layout
            maxWidth: 'none',
            lineHeight: '1.8',

            // Links
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: theme('colors.gray[300]'),
              textUnderlineOffset: '3px',
              transition: 'text-decoration-color 0.15s',
              '&:hover': {
                textDecorationColor: theme('colors.gray[700]'),
              },
            },

            // Headings
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            h1: { fontSize: '1.875rem', lineHeight: '1.2' },
            h2: {
              fontSize: '1.25rem',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
              paddingBottom: '0.5rem',
              borderBottom: `1px solid ${theme('colors.gray[100]')}`,
            },
            h3: { fontSize: '1.1rem', marginTop: '2rem' },

            // Inline code (no backtick wrappers)
            code: {
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontWeight: '400',
              fontSize: '0.85em',
              backgroundColor: theme('colors.gray[100]'),
              padding: '0.15em 0.4em',
              borderRadius: '0.25rem',
              border: `1px solid ${theme('colors.gray[200]')}`,
              '&::before': { content: 'none' },
              '&::after':  { content: 'none' },
            },

            // Code blocks
            pre: {
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '0.875rem',
              lineHeight: '1.7',
              borderRadius: '0.5rem',
              border: `1px solid ${theme('colors.gray[200]')}`,
              code: {
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
                fontSize: 'inherit',
              },
            },

            // Blockquote
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '2px',
              borderLeftColor: theme('colors.gray[200]'),
              color: theme('colors.gray[600]'),
            },

            // Lists
            'ul > li::marker': { color: theme('colors.gray[300]') },
            'ol > li::marker': { color: theme('colors.gray[400]') },

            // HR
            hr: { borderColor: theme('colors.gray[100]') },

            // Tables
            table: { fontSize: '0.875rem' },
            thead: {
              borderBottomColor: theme('colors.gray[200]'),
              th: { fontWeight: '600', color: theme('colors.gray[700]') },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
