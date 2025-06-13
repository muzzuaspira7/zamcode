import Colors from "../constant/AppColors"

function Header() {
  return (
    <div>
      <h3 className="md:text-5xl text-4xl " style={{ fontFamily: "Cinzel" }}>About Me</h3>
      <p className="md:text-2xl  text-[1.5rem] md:pt-5 pt-3" style={{ fontFamily: "Montserrat", color: Colors.primaryColor }}>Crafting Seamless Digital Experience with Flutter</p>

    </div>
  )
}

export default Header