import { heroes } from "../data/heroes"


export const getHeroesById = ( miRuta ) => {
 return heroes.find(hero => hero.id === miRuta)
}
