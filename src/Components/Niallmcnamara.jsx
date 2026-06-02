import { NavigationMenu,
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/Components/ui/badge';
import { Button } from "@/components/ui/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCode, faDownload, faFile, faGraduationCap, faLocationDot, faUserTie, faWrench } from '@fortawesome/free-solid-svg-icons';
import FindMyOwner from '../../public/Images/FindMyOwner.png';
export default function Niallmcnamara(){
    return(
        <div style={{ backgroundColor: "#d5e6c5", minHeight: "100vh" }}>
            <div className="w-full border-b bg-[#314520] text-white px-1 py-1">

                <div className="flex items-center justify-between">

                    <h1 className="text-l ml-50">
                        Niall Mc Namara
                    </h1>

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
                                <NavigationMenuLink href="/" className="hover:text-[#314520]">
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="hover:text-[#314520]">
                                    Skills
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="hover:text-[#314520]">
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div className="pt-10 pb-5 bg-[#9aa88d]">
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
                    <div className="flex gap-6 ">
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
            <div className="flex pt-5 pb-5 scroll-mt-1" id="about-me">
                <div className="w-1/2 pl-35">
                    <h1 className="text-2xl font-bold pb-2">
                        <FontAwesomeIcon icon={faUserTie} className="text-2xl pr-2 text-[#314520]" />About
                    </h1>
                    <p className="pl-9">
                        I am a Computer Science graduate, obtaining my degree from Technological 
                        University Dublin, in 2022. I enjoy turning real world problems into 
                        applications and enjoy working on group projects and being a team player.
                        I enjoy programming because I enjoy challenges and making a 
                        difference to a project. Outside of programming, I enjoy football, darts,
                        going to the gym and socializing with friends.
                    </p>
                </div>
                <div className="pl-35">
                    <p className="font-bold">
                        <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-[#314520]" /> Location
                    </p>
                    <p className="text-sm pl-9">
                        Harolds Cross,<br />
                        Dublin
                    </p>
                    <br />
                    <a href="https://www.tudublin.ie/">
                        <p className="font-bold">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-[#314520] pr-2" />Education
                        </p>
                        <p className="text-sm pl-10">
                            Technolgical University Dublin
                        </p>
                    </a>
                    <br />
                    <p className="font-bold">
                            <FontAwesomeIcon icon={faCode} className="text-2xl text-[#314520] pr-2" />Interests
                    </p>
                    <p className="text-sm pl-10 w-90">
                        Software Development, Full Stack Development,
                    </p>
                </div>
            </div>


            <div className="flex bg-[#c6d6b8]" id="cv">
                <div className="w-1/2 pl-35 pt-10 pb-10">
                    <h1 className="text-2xl font-bold pb-2">
                        <FontAwesomeIcon icon={faFile} className="text-2xl pr-2 text-[#314520]" />CV
                    </h1>
                    <p>You can download and view my CV be clicking the link. </p>
                </div>
                <div>
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
            <div className="w-full pt-5 pb-10 pl-35 pr-35">
                <h1 className="text-2xl font-bold pb-7">
                    <FontAwesomeIcon icon={faWrench} className="text-2xl pr-2 text-[#314520]" />Projects
                </h1>
                <div className="flex flex-wrap gap-30">
                    <Card className="w-90">
                        <img src={FindMyOwner} />
                        <CardHeader>
                            <CardTitle className="font-bold text-lg">Find My Owner</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>A full stack web application with intention to aid lost and found 
                                pets. User authenication, real-time updates and image recognition.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3 pb-3">
                                <Badge className="bg-[#0574FF] text-sm">React</Badge>
                                <Badge className="bg-[#0574FF] text-sm">React Router Dom</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Firebase</Badge>
                                <Badge className="bg-[#0574FF] text-sm">AWS</Badge>
                                <Badge className="bg-[#0574FF] text-sm">API</Badge>
                                <Badge className="bg-[#0574FF] text-sm">Bootstrap</Badge>
                            </div>
                            <Button>
                                <a href="https://github.com/c18441084/FinalYearProject">
                                    <FontAwesomeIcon icon={faGithub} />Code
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="w-90">
                        <CardHeader className="text-center">
                            <CardTitle>Photography Website</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="w-90">
                        <CardHeader className="text-center">
                            <CardTitle>Find My Owner</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            {/* <div className="pt-6 flex justify-center items-center">
                <Card className="w-275">
                    <CardHeader className="flex justify-center items-center">
                        <CardTitle className="font-bold text-2xl">Niall Mc Namara</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-6">
                            <Card className="w-80">
                                <CardHeader className="flex justify-center items-center">
                                    <CardTitle>Languages</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card className="w-80">
                                <CardHeader className="flex justify-center items-center">
                                    <CardTitle>About</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card className="w-80">
                                <CardHeader className="flex justify-center items-center">
                                    <CardTitle>Education</CardTitle>
                                </CardHeader>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div> */}
        </div>
    )
}