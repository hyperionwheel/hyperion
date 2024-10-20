import { OfferCard } from './offer-card'

type OffersSectionProps = {
  offers: { title: string; description: string; imageSrc: string }[]
}

export const OffersSection = ({ offers }: OffersSectionProps) => {
  return (
    <section className="2xl:container mx-auto">
      <div className="px-1.25 md:px-5">
        <div className="grid grid-cols-1 gap-2.5 lg:gap-2 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <OfferCard key={index} title={offer.title} description={offer.description} imageSrc={offer.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
