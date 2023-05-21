import './App.css';
import data from './data.json'
import {useState} from "react"
function Main() {
   const [event, setEvent] = useState(0)
   const [chosenOption, setchosenOption] = useState(undefined)
  const [stats, setStats] = useState({health: 100, rep: 30, money: 0})
  const {events} = data
  const curEvent = events[event];
  var day = 0;

  function optionSelect(idx){
    day++
    setchosenOption(curEvent["options"][idx])
    console.log(curEvent["options"][idx])
    setStats({health: stats.health+curEvent["options"][idx].health, rep: stats.rep+curEvent["options"][idx].rep, money: stats.money+curEvent["options"][idx].money})
  }
  function newEvent(){
    const nextEvent = Math.floor(Math.random() * events.length)
    setEvent(nextEvent)
    setchosenOption(undefined)
  }
  return (
    <div className="Main">
      <div className='Title'>
        Day {day}
      </div>
      <div className='Stats'>
        <div className='Health'>Mental Health: {stats.health}</div>
        <div className='Rep'>Reputation:{stats.rep}</div>
        <div className='Money'>Money: {stats.money}</div>
      </div>
      <div className='Container'>
        {!chosenOption &&
            
                <div className='Choice'>
                    <div className='description'>
                        {curEvent["desc"]}
                    </div>
                    
                    <div className='Options'>
                        <div className = 'Buttons'>
                            {curEvent["options"].map((option,idx)=>{return <div onClick={() => {optionSelect(idx)}}>{option["desc"]}</div>})}
                        </div>
                    </div>`
                </div>
            }
        {chosenOption &&
            <div className='Result'>
                <div className='Result-Desc'>{chosenOption.resultDesc}</div>
                <div className='Button-Continue' onClick={newEvent}>
                    Continue
                </div>
            </div>
            
        }
      </div>
    </div>
  );
}

export default Main;