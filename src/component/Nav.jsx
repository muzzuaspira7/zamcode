import { useLocation, useNavigate } from 'react-router-dom'
import Colors from '../constant/AppColors'

function Nav({ setAnimating, animating }) {
  const location = useLocation()
  const navigate = useNavigate()
  const navItems = [
    { to: '/', icon: 'home' },
    { to: '/About', icon: 'person' },
    { to: '/Skills', icon: 'school-sharp' },
    { to: '/Projects', icon: 'folder-open-sharp' },
    { to: '/Contact', icon: 'mail-sharp' },
  ]

  const handleClick = (to) => {
    if (location.pathname === to || animating) return

    setAnimating(true)

    setTimeout(() => {
      navigate(to)
      setAnimating(false)
    }, 500) // animation duration in ms, tune this
  }

  return (
    <div
      style={{ color: Colors.backgroundColor }}
      className="w-full h-10 fixed top-[90%] md:top-[50%] md:left-[40%] z-50 flex justify-center items-center"
    >
      <div className='bg-black w-[85vw] md:w-auto flex md:flex-col p-3 rounded-md'>
        {navItems.map((item, index) => {
        const isActive = location.pathname === item.to
        return (
          <div
            key={index}
            onClick={() => handleClick(item.to)}
            style={{
              width: '100%',
              color: isActive ? Colors.backgroundColor : Colors.greyColor,
              cursor: 'pointer',
            }}
            className="relative md:text-3xl text-2xl md:p-4 p-2 flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-200 select-none hover:bg-slate-900 pb-3"
          >
            <ion-icon name={item.icon}></ion-icon>
            {
              isActive ? (
                <div className=' h-1.5 w-1.5 bg-white rounded absolute bottom-1 '>

            </div>
              ) : ""
            }
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Nav
