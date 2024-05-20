import Profile from "./components/Profile";
import Language from "./components/Language";
import DownloadCV from "./components/DownloadCV";
import SocialComponent from "./components/SocialComponent";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GitHubContainer from "./components/GitHubContainer";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import LanguageCertification from "./components/LanguageCertification";
import SkillComponent from "./components/SkillComponent";
import EducationSection from "./components/EducationSection";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-10">
    <section className="w-full max-w-[1536px] grid grid-cols-6 xl:grid-cols-8 gap-2 xs:gap-4 lg:gap-6 px-4 md:px-8 lg:px-20">
      {/* <div className="col-start-1 col-end-7 row-start-1 row-end-5 bg-red-200 rounded-lg">1</div> */}
      <Profile/>
      <Language/>
      <DownloadCV/>
      <SocialComponent url="https://www.facebook.com/profile.php?id=61555497523346" position="row-start-2 row-end-3 col-start-5 col-end-6 xl:col-start-1 xl:col-end-2 xl:row-start-5 xl:row-end-6">
        <FaFacebookF className='social-icon'/>
      </SocialComponent>
      <SocialComponent url="https://www.linkedin.com/in/manuel-villarroel" position="row-start-2 row-end-3 col-start-6 col-end-7 xl:col-start-2 xl:col-end-3 xl:row-start-5 xl:row-end-6">
        <FaLinkedinIn className='social-icon'/>
      </SocialComponent>
      <SocialComponent 
        url="https://api.whatsapp.com/send?phone=+51932251505&text=Hola%2C+que+tal%2C+gracias+por+contactarme+conmigo%2C+me+comunicare+contigo+a+la+brevedad+posible.%F0%9F%98%81"
        position="row-start-3 row-end-4 col-start-5 col-end-6 xl:col-start-1 xl:col-end-2 xl:row-start-6 xl:row-end-7"
      >
        <FaWhatsapp className='social-icon'/>
      </SocialComponent>
      <SocialComponent url="mailto:manuel17973433@gmail.com" position="row-start-3 row-end-4 col-start-6 col-end-7 xl:col-start-2 xl:col-end-3 xl:row-start-6 xl:row-end-7">
        <MdEmail className='social-icon'/>
      </SocialComponent>
      <GitHubContainer/>
      <Projects/>
      <WorkExperience/>
      <LanguageCertification/>
      {/* <div className="col-start-5 col-end-7 bg-primary shadow-container aspect-square rounded-2xl ">11</div> */}
      <SkillComponent position="col-start-1 col-end-3 xl:col-start-7 xl:col-end-9">
        <img src="/assets/icons/skills_front_end.png" className="w-full" alt="icons-fron end" />
      </SkillComponent>
      <EducationSection/>
      <SkillComponent position="col-start-1 col-end-3 xl:col-start-5 xl:col-end-7">
        <img src="/assets/icons/skill_back_end.png" className="w-full" alt="icons back end" />
      </SkillComponent>
      <SkillComponent position="col-start-3 col-end-5 xl:col-start-7 xl:col-end-9">
        <img src="/assets/icons/programing_languages.png" className="w-full" alt="icons-fron end" />
      </SkillComponent>
      {/* <div className="col-start-7 col-end-9 bg-red-500 rounded-lg">12</div> */}
    </section>
  </main>
  );
}
