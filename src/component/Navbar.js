 const Navbar=()=>
{
  
return (
    <div className="w-full h-48 bg-teal-700 flex gap-12 flex-col">
     <h1 id="1" className="text-6xl text-emerald-300  font-bold m-auto w-96">RoboFriends</h1> 
     <input onKeyUp={fun} type="search" placeholder="search robot" className="h-14  w-56 m-auto w-82 pl-5"/>
      
    </div>
);

}

  function fun()
  {
   let t=document.getElementsByTagName("input");
  let z= t[0].value.toUpperCase();
  
  }

