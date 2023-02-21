import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers"


export const HeroesPage = () => {
  
  const { miRuta } = useParams()
  const hero = getHeroesById(miRuta)

  if (!hero){
    return <Navigate to="/marvel" />
  }
  
  return (
    <>
    <h1></h1>
    </>
  )
}
