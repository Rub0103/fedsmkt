export const Header = () => {
  return (
    <div className='header flex flex-col justify-center align-stretch'>
      <div className='container header_container flex justify-between align-center'>
        <a href='#' className='block header_logo sm-mx-auto'>
          <img className='img img--logo' src="/src/assets/images/logo.png" alt="" />
        </a>
        <div className='header_menu flex justify-start align-center col-gap-10 sm-hidden'>
          <a href='#' className='header-menu-item decoration-none c-white'>XM Homepage</a>
          <a href='#' className='header-menu-item decoration-none c-white'>Support</a>
        </div>
      </div>
    </div>
  )
}