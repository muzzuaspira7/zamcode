import Colors from "../constant/AppColors";

function CustomButton({ text, isDownload }) {
  const baseClasses = "flex justify-center items-center mt-3 font-normal";
  const normalBtn = "md:w-[75%] w-[100%] md:h-12 h-9 md:text-lg text-[0.9rem]";
  const downloadBtn = "md:w-[30%] w-[40%] md:h-10 h-8 md:text-md text-sm";

  return (
    <div
      style={{
        cursor: 'pointer',
        backgroundColor: Colors.primaryColor,
        fontFamily: "Montserrat",
        color: Colors.backgroundColor,
      }}
      className={`${baseClasses} ${isDownload ? downloadBtn : normalBtn}`}
    >
      {text}
    </div>
  );
}

export default CustomButton;
