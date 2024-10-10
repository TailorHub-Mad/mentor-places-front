import { IMetaProps } from '../../lib/interfaces/global.type'
import Head from 'next/head'
import React, { type FC } from 'react'

const Meta: FC<IMetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title || ''}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="description" content={description || ''} />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Guarded Box" />
    </Head>
  )
}

export default Meta
