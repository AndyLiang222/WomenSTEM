import './App.css';
import data from './data.json'
import React,{useState} from "react"
import styled from 'styled-components';
import Components from './Components.js'
const {Button, Background} = Components
const DescDiv = styled.div`
    padding: 0px 300px;
    margin: 75px 0px;
`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
`
const OptionButton = styled(Button)`
    width: 300px;
    margin:10px;
`
function Main() {
    
    const checks = ["day", "health", "rep", "money"]
   const [event, setEvent] = useState(0)
   const [chosenOption, setchosenOption] = useState(undefined)
  const [stats, setStats] = useState({day: 0,health: 100, rep: 30, money: 0})
  const {money, health, rep} = stats
  const {events} = data
  const curEvent = events[event];

  function optionSelect(idx){
    setchosenOption(curEvent["options"][idx])
    console.log(curEvent["options"][idx])
    setStats({day: stats.day,health: stats.health+curEvent["options"][idx].health, rep: stats.rep+curEvent["options"][idx].rep, money: stats.money+curEvent["options"][idx].money})
  }
  function newEvent(){
    var nextEvent = Math.floor(Math.random() * events.length)
    if(money < 0 || health < 0){
        //Make the player lose
    }
    else if(rep < 0){
        //make player get fired
    }
    else if(chosenOption["nextEvent"]){
        nextEvent = chosenOption["nextEvent"]
    }else {
        console.log("random")
        while (true){
            var flag = true;
            var testEvent = events[nextEvent]["preReq"]
            for(var x in checks){
                if(testEvent[x] > stats[x])flag = false
            }
            console.log(flag + " " + events[nextEvent]["locked"])
            if(flag && !events[nextEvent]["locked"])break;
            else nextEvent = Math.floor(Math.random() * events.length)
        }
    }
    
    setEvent(nextEvent)
    setchosenOption(undefined)
    setStats({ ...stats,day: stats.day+1})
  }
  return (
    <div className="Main">
      <div className='Title'>
        Day {stats.day}
      </div>
      <div className='Stats'>
        <div className='Health'>Mental Health: {stats.health}</div>
        <div className='Rep'>Reputation:{stats.rep}</div>
        <div className='Money'>Money: {stats.money}</div>
      </div>
      <div className='Container'>
        {!chosenOption &&
            
                <div className='Choice'>
                    <DescDiv className='description'>
                        {curEvent["desc"]}
                    </DescDiv>
                    
                    <div className='Options'>
                        <ButtonDiv className = 'Buttons'>
                            {curEvent["options"].map((option,idx)=>{return <OptionButton onClick={() => {optionSelect(idx)}}>{option["desc"]}</OptionButton>})}
                        </ButtonDiv>
                    </div>`
                </div>
            }
        {chosenOption &&
            <div className='Result'>
                <DescDiv className='Result-Desc'>{chosenOption.resultDesc}</DescDiv>
                <ButtonDiv>
                    <OptionButton className='Button-Continue' onClick={newEvent}>
                        Continue
                    </OptionButton> 
                </ButtonDiv>
                
            </div>
            
        }
      </div>
    </div>
  );
}

export default Main;