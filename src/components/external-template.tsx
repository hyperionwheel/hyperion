import { Footer } from './footer'
import { Header } from './header'

export const ExternalTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}
