import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      '.post': {
        h1: {
          mb: 7,
          fontSize: ['4xl', '6xl']
        },
        h2: {
          mt: 14,
          mb: 7,
          fontSize: ['2xl', '3xl']
        },
        p: {
          my: [4, 7],
          fontSize: 'lg',
          lineHeight: [1.7, 2]
        },
        ul: {
          pl: 5
        },
        li: {
          my: 2,
          fontSize: 'lg',
          lineHeight: [1.7, 2]
        },
        a: {
          color: 'blue.500',
          _hover: {
            textDecoration: 'underline'
          }
        },
        '.wp-block-table': {
          overflowX: 'auto'
        },
        '.wp-block-image': {
          textAlign: 'center'
        },
        img: {
          maxW: '100%',
          h: 'auto',
          mx: 'auto'
        },
        figcaption: {
          mt: 2
        },
        figure: {
          my: 5
        },
        table: {
          borderCollapse: 'collapse'
        },
        tr: {
          borderBottom: '1px solid #ccc'
        },
        td: {
          verticalAlign: 'top',
          px: 4,
          py: 8,
          fontSize: 'lg',
          lineHeight: [1.7, 2]
        },
        code: {
          px: 1,
          py: 0.5,
          color: 'red.500',
          border: '1px solid #f0f0f0',
        },
        pre: {
          mb: 2,
          code: {
            color: 'gray.700'
          }
        },
        '.material-icons': {
          fontFamily: 'Material Icons',
          fontSize: 'sm',
          display: 'inline-block',
        }
      }
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.xl'
      }
    },
  },
}

export default extendTheme(theme)
