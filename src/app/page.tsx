import { AboutMe } from "./_components/about-me"
import { HomeContact } from "./_components/home-contact"
import { HomeContent } from "./_components/home-content"
import { TimeLineContent } from "./_components/time-line-content"




const HomePage = async () => {
    return <>
        <AboutMe />


        <HomeContent />

        

        <TimeLineContent />

        <HomeContact/>


    </>
}
export default HomePage