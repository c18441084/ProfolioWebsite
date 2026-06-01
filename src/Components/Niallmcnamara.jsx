import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCode, faGraduationCap, faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons';
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
                                <NavigationMenuLink href="#about-me">
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/">
                                    CV
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/">
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/">
                                    Skills
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/">
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
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-[#314520]" />Education
                        </p>
                        <p className="text-sm pl-9">
                            Technolgical University Dublin
                        </p>
                    </a>
                    <br />
                    <p className="font-bold">
                            <FontAwesomeIcon icon={faCode} className="text-2xl text-[#314520]" />Interests
                    </p>
                    <p className="text-sm pl-9 w-90">
                        Software Development, Full Stack Development,
                    </p>
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