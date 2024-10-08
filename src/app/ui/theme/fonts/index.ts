import LocalFont from 'next/font/local'

const montserrat = LocalFont({
  src: [
    {
      path: '../../../../public/fonts/Montserrat-Regular.ttf',
      weight: '500'
    },
    {
      path: '../../../../public/fonts/Montserrat-SemiBold.ttf',
      weight: '600'
    }
  ],
  variable: '--font-montserrat'
})

export { montserrat }
