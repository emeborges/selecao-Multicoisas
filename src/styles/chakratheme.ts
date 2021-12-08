import { extendTheme } from '@chakra-ui/react'

const themeChakra = extendTheme({ 
    colors:{
        gray:{
            "900": '#181b23',
            "800": '#1F2029',
            "700": '#353646',
            "600": '#4B4D63',
            "500": '#616480',
            "400": '#797D9A',
            "300": '#9699B0',
            "200": '#B3B5C6',
            "100": '#D1D2DC',
            "50": '#EEEEF2',
        }
    },
    fonts:{
        heading:'Lato',
        body:'Lato'
    },
    styles:{
        global:{
            body:{
                bg:'${props => props.theme.colors.background}',
                color:'${props => props.theme.colors.text}'
            }
        }
    }
})


export default themeChakra