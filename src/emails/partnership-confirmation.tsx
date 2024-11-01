import { images } from '@/lib/constants'
import { Body, Container, Head, Heading, Html, Img, Link, Section, Text } from '@react-email/components'

export const PartnershipConfirmation = ({ name }: { name: string }) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img style={image} alt="Partnering with Hyperion" width={640} src={images.partnershipEmail} />
          </Section>
          <Section>
            <Heading style={h1}>Partnering with Hyperion</Heading>
          </Section>
          <Section>
            <Text style={text}>
              Dear {name},
              <br />
              We appreciate your interest in partnering with Hyperion. Our team will review your inquiry and get back to
              you shortly with the next steps. We’re excited to explore the opportunity to work together and enrich the
              unique experience offered by Hyperion.
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
  color: '#0D0D0D',
}

const link = {
  ...text,
  color: '#2BAECE',
  textDecoration: 'underline',
}
