import React from 'react'; 
import {add,sub,mul,div} from './Calc';

    function App(){
        
    let greeting='';


    let currDate=new Date(2020,12,6 ,8);
    currDate=currDate.getHours();
    const cssStyle={ 
    }

    if(currDate>=1 && currDate<12)
    {
    greeting="Good Morning";
    cssStyle.color="green";
    }
    else if(currDate>12&& currDate<=19)
    {
    greeting="Good AfterNoon";
    cssStyle.color="Orange";
    }
    else{
    greeting="Good Night";
    cssStyle.color="Black"; 
    }

    return (
        <>
        <div>
        <h1> hello Mam , <span style={cssStyle}>{greeting}</span></h1> 
        </div>

        <div>
        <ul>
        <li>
            Sum of two no is {add(40,4)}
        </li>
        <li>
            Sub of two no is {sub(30,3)}
        </li>
        <li>
            Mul of two no is {mul(20,3)}
        </li>
        <li>
            Div of two no is {div(25,5)}
        </li>
        </ul>
        </div>
        </>
    );

    
}

export default App;