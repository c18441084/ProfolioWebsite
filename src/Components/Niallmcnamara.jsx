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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export default function Niallmcnamara(){
    return(
        <div style={{backgroundColor: "#9aa88d", minHeight: "100vh"}}>
            <div className="w-full flex justify-center border-b border-black pb-5 pt-5 bg-[#314520] text-white">
                <NavigationMenu>
                    <NavigationMenuList className="gap-8">
                        <NavigationMenuItem className="hover:text-[#314520]">
                            <NavigationMenuLink href="/" className="text-[18px]">
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hover:text-[#314520]">
                            <NavigationMenuLink href="/" className="text-[18px]">
                                CV
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hover:text-[#314520]">
                            <NavigationMenuLink href="/" className="text-[18px]">
                                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hover:text-[#314520]">
                            <NavigationMenuLink href="/" className="text-[18px]">
                                Projects
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hover:text-[#314520]">
                            <NavigationMenuLink href="/" className="text-[18px]">
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="absolute left-200 hover:text-[#314520]"> 
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <NavigationMenuLink href = "https://github.com/c18441084">
                                        <FontAwesomeIcon icon={faGithub} className="text-lg"/>
                                    </NavigationMenuLink>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>        
                            </TooltipProvider>                    
                        </NavigationMenuItem>
                        <NavigationMenuItem className="absolute left-210 hover:text-[#314520]"> 
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <NavigationMenuLink href = "https://www.linkedin.com/in/niall-mc-namara-8b39b4192/">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="text-lg"/>
                                    </NavigationMenuLink>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>        
                            </TooltipProvider>                    
                        </NavigationMenuItem>

                    </NavigationMenuList>
                    {/* <NavigationMenuList>
                        <NavigationMenuItem className="justify-inbetween">
                            <NavigationMenuLink href = "https://github.com/c18441084">
                                <FontAwesomeIcon icon={faGithub}/>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList> */}
                </NavigationMenu>
            </div>
            <br/>
        </div>
    )
}