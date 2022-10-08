import logo from '../../assets/logo.png'
import { Bars } from '../Icons/Bars'
export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <picture className="w-1/2">
        <img alt="nft landing logo" src={logo} />
      </picture>
      <picture className="w-[6%]">
        <Bars />
      </picture>
    </header>
  )
}
