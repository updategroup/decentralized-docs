import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Decentralized Việt Nam</span>,
  logoLink: "/",
  project: {
    link: 'https://github.com/input-output-hk/marlowe/tree/master/papers',
  },
  chat: {
    icon: <Image
      alt='Alote'
      width={27}
      height={0}
      src="/telegram.svg"
    />,
    link: 'https://t.me/decentralized_vietnam',
  },
  docsRepositoryBase: 'https://github.com/input-output-hk/marlowe',
  footer: {
    text: 'Decentralized Docs Việt Nam',
  },
  gitTimestamp: <span>Date: {new Date().getDay() + ' - ' + new Date().getMonth() + ' - ' + new Date().getUTCFullYear()}</span>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://decentralized.phouse.com.vn' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <link data-rh="true" rel="icon" href="/favicon.ico"></link>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Update Group'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Decentralized Việt Nam'}
        />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Update Group'
      }
    }
  }
}

export default config
