
import { Dropzone } from '../../components/Dropzone/Dropzone';
import { Leaderboard } from '../../components/Leaderboard/Leaderboard';
import { useHomeLogic } from './useHomeLogic';


export const Home = () => {

  const { scores, processFile } = useHomeLogic();

  return (
    <div className='h-screen flex flex-col'>
      <div className='m-10'>
        <Dropzone onFileUpload={processFile} id="dropzone" />
      </div>
      <div className='container max-w-4xl m-auto flex flex-col gap-28'>
        <Leaderboard scores={scores}/>
      </div>
    </div>
  );
};
