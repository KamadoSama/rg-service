import { BannerService } from "./BannerService"
import { PackCards } from "./PackCards"
import { WelcomeService } from "./WelcomeService"

export const Evenementiel =  () =>{
   
    
    return (
        <>
        <BannerService height={400} title={"Organisation de mariage"} />
        <WelcomeService />
        <PackCards />
        </>
    )
}

