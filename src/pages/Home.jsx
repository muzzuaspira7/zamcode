import '../App.css'
import CustomButton from '../component/CustomButton'
import Colors from '../constant/AppColors'

function Home() {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center overflow-hidden'>
      <div className='flex flex-col justify-center h-screen md:px-10 px-3'>
        <p style={{ color: Colors.darkColor, fontFamily: 'Montserrat' }} className='font-medium text-3xl md:text-3xl'>
          Hello, I am
        </p>
        <h3 style={{ color: Colors.darkColor, fontFamily: 'cinzel' }} className='font-light md:text-[3.2rem] text-[2.2rem]'>
          MOHAMMED MUZAMMIL
        </h3>
        <p style={{ color: Colors.primaryColor, fontFamily: 'Montserrat' }} className='font-bold md:text-[1.5rem] text-[0.7rem] tracking-[0.5em] md:tracking-[0.45em]'>
          CROSS PLATFORM DEVELOPER
        </p>
        <p style={{ color: Colors.darkColor, fontFamily: 'Montserrat' }} className='font-medium md:text-xl text-[1.1rem] md:w-[52vw] w-[100%] mt-2'>
          I’m a passionate Flutter developer who specializes in building seamless cross-platform apps. Always eager to tackle new challenges, my goal is to create smooth, high-performance experiences that work flawlessly across devices.
        </p>
        <CustomButton isDownload={true} text={"Download CV"} />
      </div>
      <div className="w-1/2 justify-center items-center pr-20 hidden md:flex">
        <img className='object-contain h-100' src="src/assets/image/Muzammil.png" alt="Muzammil Image" />
      </div>
    </div>
  )
}

export default Home
