import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

export const OverviewCard = ({user, audienceType, audience, network, today, isUp}) => {

    const networkColores = {
        Facebook: 'bg-Facebook',
        Twitter: 'bg-Twitter',
        Instagram: 'bg-Instagram',
        YouTube: 'bg-YouTube',
    }

  return (
    <article className="bg-LightGrayishBlue w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-DarkDesaturatedBlue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div className={`${networkColores[network]} h-[4px] mb-8`}></div>
        <div className='flex items-center place-content-center gap-2'>
            <img src={networkLogos[network]} alt={`Logo ${network}`} />
            <p className='text-xs text-DarkGrayishBlue font-bold'>{user}</p>
        </div>
        <p className='text-[56px] font-bold text-VeryDarkBlue1 dark:text-white'>{audience}</p>
        <p className='uppercase tracking-[5px] text-DarkGrayishBlue text-xs mb-6'>{audienceType}</p>
        <div className='flex items-center place-content-center gap-1'>
            <img src={ isUp ? iconUp : iconDown } alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-LimeGreen' : 'text-BrightRed'}`}>{today} Today</p>
        </div>
    </article>
  )
}


export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {

    return (
      <article className='bg-LightGrayishBlue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] pr-[31px] pb-[19px] pl-6 cursor-pointer hover:brightness-95 dark:bg-DarkDesaturatedBlue hover:dark:brightness-125 tablet:w-[255px]'>
        <div className='flex items-center place-content-between'>
          <p className='text-DarkGrayishBlue '>{statsType}</p>
          <img src={networkLogos[network]} alt="" />
        </div>
        <div className='flex place-content-between'>
          <p className='text-[42px] font-bold text-VeryDarkBlue1 dark:text-White'>{stats}</p>
          <div className='flex items-center gap-1'>
            <img src={isUp ? iconUp : iconDown} alt="icon" />
            <p className={`text-xs font-bold ${isUp ? 'text-LimeGreen' : 'text-BrightRed'}`}>{porcentage}%</p>
          </div>
        </div>
      </article>
    )
}