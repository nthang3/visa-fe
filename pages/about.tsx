import Link from 'next/link'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Blog from 'components/Blog'
import About from 'components/About'


type Props = {
  // Add custom props here
}

const SecondPage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <About/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'vi', [
      'common',
      'footer',
    ])),
  },
})

export default SecondPage