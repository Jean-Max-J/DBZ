import { NavLink } from "react-router"


export default function RaceCard({race}:IRaceCard){
return(
    <NavLink to={`/?race=${race}`}>{race}</NavLink>
)
}

interface IRaceCard{
    race : string
   
}