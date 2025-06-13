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
      className="fixed z-50 flex md:flex-col flex-row gap-2 bg-black p-2 md:p-6 text-xl rounded-md md:top-1/2 md:right-10 md:-translate-y-1/2 bottom-5 md:bottom-auto md:left-auto left-1/2 -translate-x-1/2 md:translate-x-0"
    >
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.to
        return (
          <div
            key={index}
            onClick={() => handleClick(item.to)}
            style={{
              width: '100%',
              color: isActive ? Colors.backgroundColor : Colors.greyColor,
              backgroundColor: isActive ? Colors.primaryColor : Colors.lightBlack,
              cursor: 'pointer',
            }}
            className="p-4 flex justify-center items-center rounded-sm hover:scale-105 transition-transform duration-200 select-none"
          >
            <ion-icon name={item.icon}></ion-icon>
          </div>
        )
      })}
    </div>
  )
}

export default Nav
