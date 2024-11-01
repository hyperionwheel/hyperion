import sgMail from '@sendgrid/mail'
import { render } from '@react-email/render'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

type EmailOptions = {
  to: string
  subject: string
  react: React.ReactElement
}

export const sendEmail = async ({ to, subject, react }: EmailOptions) => {
  try {
    await sgMail.send({
      from: {
        name: 'Hyperion',
        email: 'noreply@hyperion.cy',
      },
      to,
      subject,
      html: await render(react),
    })
    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.log('Error sending email:', error)

    throw new Error('Failed to send email')
  }
}
