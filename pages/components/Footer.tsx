import { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="http://facebook.com/clauotarola"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/clau__otarola/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Instagram
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.youtube.com/channel/UCL9mBa9UXELydAtdOPctiaQ"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Youtube
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/clau__otarola"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://vm.tiktok.com/ZS9Uq8sQ/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Tiktok
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://wa.me/56932752284"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
