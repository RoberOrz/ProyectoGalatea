import Terminos from '../components/Terminos'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Terms() {
  return (
    <>
      <PageSEO title={`Terminos y Condiciones - ${siteMetadata.title}`} />
      <Terminos />
    </>
  )
}
