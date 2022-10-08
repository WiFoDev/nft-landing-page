import { Bars } from '../Common/Icons/Bars'
import { Logo } from '../Common/Logo'

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <Logo />
      <picture className="w-[6%]">
        <Bars />
      </picture>
    </header>
  )
}
