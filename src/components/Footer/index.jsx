import { Logo } from '../Common/Logo'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 px-6">
      <Logo />
      <p className="text-base">Exlcusive NFT Collection</p>
      <div className="flex items-center gap-3">
        <a href="">
          <picture>
            <img alt="facebook logo" src={facebook} />
          </picture>
        </a>
        <a href="">
          <picture>
            <img alt="twitter logo" src={twitter} />
          </picture>
        </a>
        <a href="">
          <picture>
            <img alt="instagram logo" src={instagram} />
          </picture>
        </a>
        <a href="">
          <picture>
            <img alt="tiktok logo" src={tiktok} />
          </picture>
        </a>
      </div>
      <div className="my-6 grid grid-cols-2 gap-y-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-wider">ABOUT</h4>
          <ul className="text-sm text-gray-500">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Legal</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-wider">NFT</h4>
          <ul className="text-sm text-gray-500">
            <li>
              <a href="">OpenSea</a>
            </li>
            <li>
              <a href="">Maker</a>
            </li>
            <li>
              <a href="">Learn</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-wider">CONTACT</h4>
          <ul className="text-sm text-gray-500">
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-wider">SOCIAL</h4>
          <ul className="text-sm text-gray-500">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-base text-gray-400">© Copyright 2022 NFTLanding</p>
    </footer>
  )
}
