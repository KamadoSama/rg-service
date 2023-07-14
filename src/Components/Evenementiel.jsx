import { BannerService } from "./BannerService"
import { PackCards } from "./PackCards"
import { WelcomeService } from "./WelcomeService"
import { useEffect } from "react"
export const Evenementiel =  () =>{
    useEffect(()=>{
        document.title = "evenementiel"
    },[])
    
    return (
        <>
        <BannerService height={400} title={"Organisation de mariage"} />
        <WelcomeService />
        <PackCards />
        </>
    )
}

