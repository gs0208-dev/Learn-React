import globe from './../../assets/DDR-images/Globe.png';

export function Header(){
  return (
    <header className='ddr-header'>
      <img src={globe} alt="globe-img" width="24px" className='ddr-image'/>
      <span className='ddr-text'>My Travel Journey.</span>
    </header>
  );
}