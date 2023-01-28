import { Scores } from '../../interfaces/interfaces';
import { LeaderboardTable } from '../LeaderboardTable/LeaderboardTable';

export const Leaderboard = ({
  scores
}: {
  scores: Scores
}) => {

  return (
    <div className='flex justify-center flex-col'>
      <h1 className='font-mono text-5xl mt-5'>
        X Leaderboards
      </h1>

      <div className='w-full my-10 flex justify-center'>
        <img src='/trophy-icon.png' width={250} alt='nope' className=' object-center' />
      </div>

      {
        scores.length > 0 && <LeaderboardTable rows={scores} />
      }
    </div>
  )
}
