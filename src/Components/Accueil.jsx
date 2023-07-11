import { Banner } from "./Banner";
import { Apropos } from "./Apropos";
import { Welcome } from "./Welcome";

export const Accueil = () =>{
    return(
        <>
            <Banner />
            <Welcome />
            <Apropos />
        </>
    )
}