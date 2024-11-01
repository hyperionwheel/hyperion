import { images } from '@/lib/constants'
import { Body, Container, Head, Heading, Html, Img, Link, Section, Text } from '@react-email/components'

export const SubscribeConfirmation = () => {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img style={image} alt="Welcome to Hyperion!" width={640} src={images.subscribeEmail} />
          </Section>
          <Section>
            <Heading style={h1}>Welcome to Hyperion!</Heading>
          </Section>
          <Section>
            <Text style={text}>
              Thank you for signing up for the Hyperion newsletter! You’re now part of an exclusive community that will
              get early access to ticket sales, special offers, and news.
            </Text>
            <Text>Stay tuned for new experiences!</Text>
            <Text style={text}>
              Best regards,
              <br />
              The Hyperion Team
              <br />
              <Link style={link} href="https://www.hyperion.cy/">
                hyperion.cy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '640px',
  maxWidth: '100%',
}

const h1 = {
  color: '#0D0D0D',
  fontSize: '30px',
  fontWeight: '700',
  margin: '32px 0 0 0',
  padding: '0',
  lineHeight: '38px',
}

const image = {
  maxWidth: '100%',
  borderRadius: '20px',
}

const text = {
  fontSize: '14px',
  lineHeight: '22px',
  fontWeight: 400,
}

const link = {
  ...text,
  color: '#2BAECE',
  textDecoration: 'underline',
}
