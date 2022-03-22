/* eslint-disable */
import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CustomModal from './CustomModal'

function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleLinkOnClick = () => setIsOpen(false)

  const handleModalOnClose = () => setShowSearchModal(false)

  return (
    <nav
      style={{ backdropFilter: 'blur(2px)' }}
      className="sticky top-0 z-50 w-full p-4"
    >
      <div
        ref={ref}
        className="relative overflow-hidden transition-all duration-500 delay-150 ease-in-out md:min-h-[80px]"
        style={{ maxHeight: isOpen && ref.current ? 800 : 50 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h1 className="text-2xl font-bold">
                New
                <span className="text-transparent bg-gradient-to-tr to-primaryLight via-primaryLight from-primaryDark bg-clip-text">Assessment</span>
              </h1>
            </Link>
          </div>

          <button type="button" className="relative hidden mx-8 md:block" onClick={() => setShowSearchModal(true)}>
            <div className="absolute top-2.5 left-3">
              <AiOutlineSearch size={22} />
            </div>
            <input
              type="text"
              className="flex p-2 pl-10 text-xl text-white rounded-md flex-0 md:w-4 xl:w-full focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10"
              placeholder="Search items and collections"
            />
          </button>

          {/* Medium screen links STARTS */}
          <div className="justify-end hidden md:flex md:items-center md:text-lg lg:text-xl">

            <div className="flex space-x-4">
              <a
                href="#home"
                className="px-4 py-1 font-medium text-white transition duration-1000 rounded lg:px-4 hover:text-primaryLight"
              >
                Home
              </a>
          
            </div>
          </div>
          {/* Medium screen links ENDS */}

          <div className="flex justify-end flex-1 md:hidden">
            <button
              type="button"
              className="p-1 text-white transition duration-500 ease-in-out border border-transparent border-white rounded cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose />
              ) : (
                <AiOutlineMenu />
              )}
            </button>
          </div>
        </div>

        {/* small screen links STARTS */}
        { isOpen
       && (
       <div className="p-2 my-4 space-y-2 rounded-lg md:hidden bg-bgRight">
         <button
           type="button"
           className="relative w-full p-1"
           onClick={() => {
             setIsOpen(false)
             setShowSearchModal(true)
           }}
         >
           <div className="absolute top-3 left-3">
             <AiOutlineSearch size={22} />
           </div>
           <input
             type="text"
             className="flex w-full p-2 pl-10 text-white rounded-md flex-0 focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10 w "
             placeholder="Search items and collections"
           />
         </button>
         <a
           onClick={handleLinkOnClick}
           href="#home"
           className="block p-2 font-semibold transition-all duration-300 rounded-md hover:text-white hover:bg-primaryLight hover:opacity-75"
         >
          Home
         </a>
      

       </div>
       )}
        {/* small screen links ENDS */}

      </div>
      <CustomModal open={showSearchModal} onClose={handleModalOnClose}>
        <div className="relative mb-32">
          <div className="absolute top-2 left-2">
            <AiOutlineSearch size={22} />
          </div>
          <input
            type="text"
            id="search-input"
            className="w-full p-2 pl-10 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10"
            placeholder="Search items and collections"
          />
        </div>
      </CustomModal>
    </nav>
  )
}

export default Navbar
