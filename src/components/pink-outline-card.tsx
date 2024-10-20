import { Typography } from './ui/typography'

export const PinkOutlineCard = ({ description }: { description: string }) => {
  return (
    <div className="border-secondary-main border-2 p-7.5">
      <Typography variant="Sharp Grotesk Caption Bold">{description}</Typography>
    </div>
  )
}
