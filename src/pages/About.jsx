import CustomButton from "../component/CustomButton"
import Header from "../component/Header"
function About() {
  return (
    // <div className="md:px-7 px-4 pt-20 ">
    <div className="h-[100vh] w-full flex overflow-hidden md:px-10 px-3 md:py-30 py-20">
      {/* content */}
      <div>
        <Header />
        <p className="md:pt-5 pt-3 md:w-[55%] w-[100%] md:text-[1.2rem] text-[1rem]" style={{ fontFamily: "Montserrat" }}>Hi, I’m Muzammil — a cross-platform developer specializing in Flutter and React Native. I create high-performance, visually refined apps for iOS, Android, and the web. With a strong foundation in Dart, Flutter, and modern development practices, I bring ideas to life through clean architecture, intuitive design, and seamless user experiences.</p>
        <div className="md:flex md:justify-between md:w-[55%] md:gap-4">
          <CustomButton text={"App Development"} />
          <CustomButton text={"Web Development"} />
        </div>
        <div className="md:flex md:justify-between md:w-[55%] md:gap-4">
          <CustomButton text={"Web App Development"} />
          <CustomButton text={"API Integration"} />
        </div>
      </div>
    </div>
  )
}

export default About