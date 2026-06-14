import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBootstrap, faGithub, faHtml5, faJs, faJsSquare, faLinkedin, faLinkedinIn, faPostgresql, faPython, faReact, faTailwindCss } from "@fortawesome/free-brands-svg-icons"
import { faCode, faDatabase, faDownload, faEnvelope, faFile, faGraduationCap, faLocationDot, faPaperPlane, faUserTie, faWrench } from '@fortawesome/free-solid-svg-icons';
import FindMyOwner from '../../public/Images/FindMyOwner.png';
import PhotographyWebsite from '../../public/Images/PhotographyWebsite.png';
import Game from '../../public/Images/Game.png';
import { useState } from "react";
export default function Niallmcnamara(){
    const [emailInfo, setEmailInfo] = useState({ name: "",  email: "", message: "" });

    const handleChange = (e) => {
        setEmailInfo({
        ...emailInfo,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/contact.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailInfo),
        });

        const data = await response.json();
        if (data.success) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email");
        }
    };
    return(
        <div style={{ backgroundColor: "#d5e6c5", minHeight: "100vh"}}>
            <div className="w-full sticky top-0 z-50 border-b bg-[#314520] text-white px-1 py-1">

                <div className="flex items-center justify-between">

                    <a href="#top">
                        <h1 className="text-l ml-50">
                            Niall Mc Namara
                        </h1>
                    </a>

                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-8 mr-45">

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#about-me" className="hover:text-[#314520]">
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#cv" className="hover:text-[#314520]">
                                    CV
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#projects" className="hover:text-[#314520]">
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#skills" className="hover:text-[#314520]">
                                    Skills
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#contact" className="hover:text-[#314520]">
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>


            <div id="top" className="pt-10 pb-5 bg-[#9aa88d]">
                <div className="w-1/2 pl-35 space-y-4">
                    <p className="text-lg text-[#314520] font-bold">Hello I'm</p>
                    <p className="text-5xl text-white">Niall Mc Namara</p>
                    <p className="text-2xl text-[#314520] font-bold">Software Developer</p>

                    <p className="text-white">
                        Computer Science graduate with a strong knowledge of data structures, 
                        algorithms and software development. Passionate about building efficient,
                        scalable and user friendly applications. Eager to learn new languages and
                        solve real-world problems.
                    </p>
                    <div className="flex gap-6 pb-5">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href="https://github.com/c18441084">
                                        <FontAwesomeIcon icon={faGithub} className="text-2xl text-[#314520]" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>        
                        </TooltipProvider> 

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a  href="https://www.linkedin.com/in/niall-mc-namara-8b39b4192/">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-[#314520]" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>        
                        </TooltipProvider> 
                    </div>
                </div>
            </div>
            

           <div className="w-full md:px-12 lg:px-33 py-20 grid grid-cols-1 lg:grid-cols-[2fr_300px] items-start scroll-mt-20" id="about-me">
                <div className="max-w-2xl justify-self-start">
                    <h1 className="text-2xl font-bold pb-4">
                        <FontAwesomeIcon icon={faUserTie} className="text-2xl pr-2 text-[#314520]" />
                        About
                    </h1>

                    <p className="pl-8">
                        I am a Computer Science graduate from Technological University Dublin
                        (2022), with a strong foundation in software development, data structures,
                        and problem-solving. I have gained experience building projects that translate
                        real-world requirements into functional applications, both independently and as
                        part of team-based coursework. I am particularly interested in developing my skills
                        as a software engineer and continuing to learn modern tools, frameworks, and best
                        practices. Outside of programming, I enjoy football, darts, fitness, and socialising
                        with friends.
                    </p>
                </div>


                <div className="w-full lg:w-[300px] lg:justify-self-end">
                    <p className="font-bold">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-2xl text-[#314520]"
                        />
                        {" "}Location
                    </p>

                    <p className="text-sm pl-9">
                        Harolds Cross,
                        <br />
                        Dublin
                    </p>

                    <br />

                    <a href="https://www.tudublin.ie/">
                        <p className="font-bold">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-[#314520] pr-2" />Education
                        </p>

                        <p className="text-sm pl-10">
                            Technological University Dublin
                        </p>
                    </a>

                    <br />

                    <p className="font-bold">
                        <FontAwesomeIcon icon={faCode} className="text-2xl text-[#314520] pr-2"/>Interests
                    </p>

                    <p className="text-sm pl-10">
                        Software Development,
                        Full Stack Development
                    </p>
                </div>
            </div>


            <div className="flex bg-[#c6d6b8] h-45 scroll-mt-20" id="cv">
                <div className="w-1/2 pl-35 pt-15 pb-10">
                    <h1 className="text-2xl font-bold pb-2">
                        <FontAwesomeIcon icon={faFile} className="text-2xl pr-2 text-[#314520]" />CV
                    </h1>
                    <p>You can download and view my CV be clicking the link. </p>
                </div>
                <div className="pt-5">
                    <Button className="bg-[#c6d6b8] border border-black ml-50 mt-15 text-[#314520] hover:text-white">
                        <a href="/NiallMcNamaraCV.docx" download="NiallCV.docx" className="flex items-center">
                            <FontAwesomeIcon icon={faDownload} className="text-2xl pr-2 text-inherit"/>
                            <span className="text-inherit">
                                Download CV(docx)
                            </span>
                        </a>
                    </Button>
                </div>
            </div>


            <div className="w-full pt-15 pb-10 pl-35 pr-35 scroll-mt-20" id="projects">
                <h1 className="text-2xl font-bold pb-7">
                    <FontAwesomeIcon icon={faWrench} className="text-2xl pr-2 text-[#314520]" />Projects
                </h1>
                <div className="flex gap-8 overflow-x-auto pb-4">
                    <Card className="w-90">
                        <img src={FindMyOwner} className="h-48 w-full object-cover"/>
                        <CardHeader>
                            <CardTitle className="font-bold text-lg">Find My Owner</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>A full-stack web application designed to streamline 
                                lost and found pet recovery through secure user authentication, 
                                real-time data synchronization, 
                                and AI-powered image recognition.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3 pb-3">
                                <Badge className="bg-[#0574FF] text-sm">React</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Firebase</Badge>
                                <Badge className="bg-[#0574FF] text-sm">AWS</Badge>
                                <Badge className="bg-[#0574FF] text-sm">API</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Authentication</Badge>
                            </div>
                            <Button>
                                <a href="https://github.com/c18441084/FinalYearProject">
                                    <FontAwesomeIcon icon={faGithub} />Code
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="w-90">
                        <img src={PhotographyWebsite} className="h-48 w-full object-cover"/>
                        <CardHeader className="text-center">
                            <CardTitle>Photography Website</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>A full-stack photography portfolio web application supporting 
                                dynamic image upload and retrieval across multiple geographic locations, 
                                with real-time user engagement features including comments and likes for 
                                interactive content interaction.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3 pb-3">
                                <Badge className="bg-[#0574FF] text-sm">React</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Firebase</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Bootstrap</Badge>
                                <Badge className="bg-[#0574FF] text-sm">UI/UX</Badge>
                            </div>
                            <Button>
                                <a href="https://github.com/c18441084/Photography-Website">
                                    <FontAwesomeIcon icon={faGithub} />Code
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="w-90">
                        <img src={Game} className="h-48 w-full object-cover"/>
                        <CardHeader className="text-center">
                            <CardTitle>Unity Project</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Built a Unity driving game with portal-based level 
                                transitions across multiple terrains, featuring AI traffic, 
                                collision-based health and scoring systems, and UI feedback 
                                for player health and high scores.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3 pb-3">
                                <Badge className="bg-[#0574FF] text-sm">C#</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Unity</Badge>
                            </div>
                            <Button>
                                <a href="https://github.com/c18441084/GE-Assignment">
                                    <FontAwesomeIcon icon={faGithub} />Code
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-[#c6d6b8] h-auto pl-35 pb-10 scroll-mt-20" id="skills">
                <div className="w-1/2 pt-15 pb-10">
                    <h1 className="text-2xl font-bold pb-2">
                        <FontAwesomeIcon icon={faCode} className="text-2xl pr-2 text-[#314520]" />Skills
                    </h1>
                </div>
                <div className="flex gap-8">
                    <Card className="w-35 bg-[#61dbfb]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faReact} className="text-white text-3xl" />
                            <CardTitle className="text-lg text-white">React</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#F0DB4F]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faJsSquare} className="text-white text-3xl" />
                            <CardTitle className="text-sm text-white">JavaScript</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#4B8BBE]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPython} className="text-[#FFD43B] text-3xl" />
                            <CardTitle className="text-lg text-white">Python</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#00758F]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDatabase} className="text-white text-3xl" />
                            <CardTitle className="text-lg text-white">SQL</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#E34C26]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faHtml5} className="text-white text-3xl" />
                            <CardTitle className="text-lg text-white">HTML</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#602C50]">
                        <CardHeader className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faBootstrap} className="text-white text-3xl" />
                            <CardTitle className="text-m text-white">Bootstrap</CardTitle>
                        </CardHeader>
                    </Card>

                    <Card className="w-35 bg-[#003366]">
                        <CardHeader className="flex items-center gap-3">
                            <CardTitle className="text-m text-white">Tailwind</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>

             <div className="h-auto pl-35 pb-10 scroll-mt-20" id="contact">
                <div className="w-1/2 pt-15">
                    <h1 className="text-2xl font-bold pb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl pr-2 text-[#314520]" />Contact
                    </h1>
                </div>
                <div className="flex">
                    <p>
                        I am always open to hear of any opportunities and collaborations.<br/>
                        Feel free to reach out
                    </p>
                    <div className="ml-50">
                        <FontAwesomeIcon icon={faEnvelope} className="text-m pr-2 text-[#314520]" />niallmcnamara1999@gmail.com
                        <br/>
                        <br/>
                        <FontAwesomeIcon icon={faLinkedin} className="text-m pr-2 text-[#314520]" />
                        <a href="https://www.linkedin.com/in/niall-mc-namara-8b39b4192/">
                            https://www.linkedin.com/in/niall-mc-namara-8b39b4192/
                        </a>
                        <br/>
                        <br/>
                        <FontAwesomeIcon icon={faLinkedin} className="text-m pr-2 text-[#314520]" />
                        <a href="https://github.com/c18441084/">
                            https://github.com/c18441084/
                        </a>
                    </div>
                    <div className="ml-35 w-80 space-y-5">
                        <div className="flex gap-4">                        
                            <Input className="bg-[#c6d6b8]" name="name" placeholder="Your Name"  value={emailInfo.name} onChange={handleChange}/>
                            <Input className="bg-[#c6d6b8]" name="email" placeholder ="Your Email" value={emailInfo.email} onChange={handleChange}/>
                        </div>
                        <Textarea className="bg-[#c6d6b8] h-25 " name="message" placeholder="Message..." value={emailInfo.message} onChange={handleChange}/>
                        <Button type="submit" onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faPaperPlane}/>Send
                        </Button>
                    </div>
                </div>
             </div>
        </div>
    )
}