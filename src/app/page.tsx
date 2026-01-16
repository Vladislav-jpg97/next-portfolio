import { AboutMe } from "./_components/about-me"
import { HomeConact } from "./_components/home-contact"
import { HomeContent } from "./_components/home-content"
import { TimeLineContent } from "./_components/time-line-content"




const HomePage = async () => {
    return <>
        <AboutMe />


        <HomeContent />

        

        <TimeLineContent />

        <HomeConact/>


    </>
}
export default HomePage