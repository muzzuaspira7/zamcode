
function Social() {
  return (
    <div className='w-full h-auto flex justify-center items-center p-5 fixed top-0'>
      <div className='text-xl flex gap-4 items-center justify-center'>
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