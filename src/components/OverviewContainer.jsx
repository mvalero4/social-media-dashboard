import data from '../../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

const converNumbertoK = (number) => {
  if( number >= 10000){
    number = number / 1000
    return number + 'k'
  }
  return number
}

export const OverviewContainer = () => {
  return (
    <section className='max-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto'>
        {
            data.overview.map(object => 
              <OverviewCard
                key={object.id} 
                user={object.user} 
                audienceType={object.audienceType} 
                audience={object.audience} 
                network={object.network} 
                isUp={object.isUp} 
                today={object.today} 
              />
            )
        }
    </section>
  )
}


export const OverviewTodayContainer = () => {
  return (
    <section className='max-w-[1140px] mx-auto'>
    <h2 className="text-2xl font-bold mb-[27px] text-DarkGrayishBlue ml-8 dark:text-White tablet:ml-14 desktop:ml-0">Overview - Today</h2>
    <div className="flex flex-wrap gap-[30px] px-4 desktop:px-0">
      {
        data['overview-today'].map(object => 
          <OverviewTodayCard
            key={object.id}
            network={object.network}
            statsType={object.statsType}
            stats={converNumbertoK(object.stats)}
            porcentage={object.porcentage}
            isUp={object.isUp}
          />
        )
      }
    </div>
    </section>
  )
}