import { Footer } from './footer'
import { Headroom } from './headroom'

export const ExternalTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Headroom />

      <main>{children}</main>

      <Footer />
    </>
  )
}
