
const Cards=(props)=>
{
return (
   <div className=" w-56 bg-sky-300 flex flex-col justify-end gap-4 ">
<img src={props.image} alt={props.name}/> 
<h1  className="text-3xl font-bold">{props.name}</h1>
<p className="pb-4 text-lg font-italic">{props.email}</p>

</div>
);
}

export default Cards;