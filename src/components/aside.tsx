import { cn } from '@/lib/utils'
import { HeaderMenu } from './header-menu'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export const Aside = ({ className }: { className: string }) => {
  const t = useTranslations()

  return (
    <aside className={cn('fixed inset-0 invisible z-[21] text-white', className)}>
      <div className="absolute top-0 right-0 h-full w-full max-w-full overflow-hidden bg-primary-main">
        <div className="pt-[80px] px-1.25">
          <HeaderMenu mobile />
          <Button variant="secondary" className="w-full mt-3">
            {t('header.cta')}
          </Button>
        </div>
      </div>
    </aside>
  )
}
