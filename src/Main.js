import './App.css';
import data from './data.json'
import React,{useState} from "react"
import styled from 'styled-components';
import Components from './Components.js'
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0

});
const {Button, Background} = Components
const TitleDiv = styled.div`
    padding: 30px;
    font-family: fantasy;

`
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
function Main(props) {
    const {endGame} = props.props
    const checks = ["day", "health", "rep", "salary"]
   const [event, setEvent] = useState(0)
   const [chosenOption, setchosenOption] = useState(undefined)
  const [stats, setStats] = useState({day: 0,health: 100, rep: 30, salary: 0})
  const {salary, health, rep} = stats
  const {events} = data
  const curEvent = events[event];
  function format(x){
    
  }
  function optionSelect(idx){
    setchosenOption(curEvent["options"][idx])
    console.log(curEvent["options"][idx])
    setStats({day: stats.day,health: Math.max(0,stats.health+curEvent["options"][idx].health), rep: Math.max(0,stats.rep+curEvent["options"][idx].rep), salary: Math.max(0,stats.salary+curEvent["options"][idx].salary)})
  }
  function newEvent(){
    if(event == 1 || event == 2){
        endGame();
    }
    var nextEvent = Math.floor(Math.random() * events.length)
    if(salary < 0 || health <= 0){
        //Make the player lose
        nextEvent = 2
    }
    else if(rep <= 0){
        //make player get fired
        nextEvent = 1
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
            if(flag && !events[nextEvent]["locked"] && event != nextEvent)break;
            else nextEvent = Math.floor(Math.random() * events.length)
        }
    }
    
    setEvent(nextEvent)
    setchosenOption(undefined)
    setStats({ ...stats,day: stats.day+1})
  }
  return (
    <div className="Main">
      <TitleDiv className='Title'>
        Day {stats.day}
      </TitleDiv>
      <div className='Stats'>
        <div className='Health'><b>Mental Health:</b> {(stats.health == 0)?"💀":stats.health}</div>
        <div className='Rep'><b>Reputation:</b> {(stats.rep == 0)?"💀":stats.rep}</div>
        <div className='salary'><b>Salary: </b>{formatter.format(stats.salary)}</div>
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