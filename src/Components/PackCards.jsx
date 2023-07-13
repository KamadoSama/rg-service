import { PackCard } from "./PackCard"
import pack_essential from "../assets/pack_essential.png"

export const PackCards = () =>{
    const packContent = (
        <>
          Ce pack contient <strong>2 voitures pour les mariés</strong>,
          <strong>150 photos de mariage</strong> plus un album photo,
          <strong>une clé USB de 8 Go</strong> contenant un film de mariage captivant d'une durée de 1h30,
          <strong>une galerie privée en ligne</strong> où vous pourrez visualiser toutes vos photos de mariage.
        </>
      );
      
    const allPack = [
        {
            title: "Pack essential",
            image: pack_essential,
            prix: "270.000",
            description: packContent,
            color: "#0573bd"
        },
        {
            title: "Pack essential",
            image: pack_essential,
            prix: "270.000",
            description: packContent,
            color: "#1E3240"
        }
    ]
    return(
        <>
            {
            allPack.map((pack,index)=>{
               return( <PackCard key={index} {...pack}  />)
            })
        }
        
        </>
    )
}