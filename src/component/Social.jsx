
function Social() {
  return (
    <div className='w-full h-60vh overflow-hidden flex justify-center items-center p-5 pb-2 sticky top-0 z-10 bg-[#fffaf6]'>
      <div className='text-xl flex gap-7 items-center justify-center'>
        <div className='hover:scale-[1.2] transition-all  '>
          <ion-icon name='logo-linkedin'></ion-icon>
        </div>
        <div className='hover:scale-[1.2] transition-all '>
          <ion-icon name='logo-instagram'></ion-icon>
        </div>
        <div className='hover:scale-[1.2] transition-all '>
          <ion-icon name='logo-twitter'></ion-icon>
        </div>
        <div className='hover:scale-[1.2] transition-all '>
          <ion-icon name='logo-whatsapp'></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default Social