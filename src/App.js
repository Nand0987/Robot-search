
//import './App.css';
import { data } from "./component/Robot.js";
//import {Navbar} from "./component/Navbar.js";
import Cards from "./component/Cards";


function RoboticeCards()
{
  const listitems=data.map((element)=>{
    return (<Cards className='ca' name={element.name} email={element.email} image={element.i}/>)
  })
  return listitems;
}
//Navbar
const Navbar=()=>
{
  function fun()
  {
    
   let t=document.getElementsByTagName("input");
  let z= t[0].value.toUpperCase();
  let card_index=document.getElementsByClassName('tc');

 
  let d=card_index[0].getElementsByTagName('div');

  
for(let i=0;d.length>i;i++)
  {
    let f=d[i].getElementsByTagName('h1');
    if(f[0].textContent.toUpperCase().indexOf(z)>-1)
    {
      d[i].style.display='';
    }
    else
    {
      d[i].style.display='none'; 
    }
  }
 }
  
return (
    <div className="w-full h-48 bg-teal-700 flex gap-12 flex-col">
     <h1 id="1" className="text-6xl text-emerald-300  font-bold m-auto w-96">RoboFriends</h1> 
     <input onKeyUp={fun} type="search" placeholder="search robot" className="h-14  w-56 m-auto w-82 pl-5"/>
      
    </div>
);

}

  










function App() {
	return (
		<div  >
      <Navbar/>
      <div className=" tc pt-6 w-full h-max scroll-auto bg-teal-700 border border-y-8 border-x-6 border-black  grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-6">
      
      < RoboticeCards/>
      
  </div>
			
		</div>
	);
}


export default App;
