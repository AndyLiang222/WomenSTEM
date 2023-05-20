import './App.css';
import data from './data.json'
function Home() {
   const [eventState, setEventState] = useState(0)
   console.log(data)
  
  return (
    <div className="Main">
      <div className='Title'>
        Women in STEM Workplace Simulator
      </div>
      <div className='description'>
        TempTempTempTempTempTempTempTempTempTempTemp
      </div>

      <div className='Options'>
        <div className = 'Buttons'></div>

      </div>
    </div>
  );
}

export default Home;