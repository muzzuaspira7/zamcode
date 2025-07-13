import "../App.css";
import CustomButton from "../component/CustomButton";
import Colors from "../constant/AppColors";
// bg-[#fffaf6]
function Home() {
  return (
    <div className="w-full h-10vh flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10  md:py-0 bg-[#fffaf6] relative -top-10 md:top-0">
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 md:pt-34 z-10 md:text-left">
        <p
          style={{ color: Colors.darkColor, fontFamily: "Montserrat" }}
          className="font-semibold text-2xl md:text-3xl mb-3"
        >
          Hello, I am
        </p>

        <h1
          style={{ color: Colors.darkColor, fontFamily: "Cinzel" }}
          className="text-4xl md:text-6xl font-light mb-2 w-[140%]"
        >
          MOHAMMED MUZAMMIL
        </h1>

        <p
          style={{ color: Colors.primaryColor, fontFamily: "Montserrat" }}
          className="font-bold tracking-[0.4em] text-xs md:text-lg mb-6"
        >
          CROSS PLATFORM DEVELOPER
        </p>

        <p
          style={{ color: Colors.darkColor, fontFamily: "Montserrat" }}
          className="text-sm md:text-xl font-medium leading-relaxed mb-6 md:max-w-[90%]"
        >
          I’m a passionate Flutter developer who specializes in building
          seamless cross-platform apps. Always eager to tackle new challenges,
          my goal is to create smooth, high-performance experiences that work
          flawlessly across devices.
        </p>

        <CustomButton isDownload={true} text={"Download CV"} />
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="absolute top-20 md:relative w-full md:w-1/2 flex justify-center md:mt-0 -z-10 opacity-50 md:opacity-100">
        <img
          src="src/assets/image/Muzammil.png"
          alt="Muzammil"
          className="w-[100%] md:w-[40%] max-w-[400px] object-cover opacity-80 md:opacity-100"
        />
      </div>
    </div>
  );
}

export default Home;
