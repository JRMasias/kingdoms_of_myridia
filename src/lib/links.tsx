import { User, Castle, Sword, Crown, Pickaxe, BarChart3, Skull, Handshake, Users2 } from "lucide-react";

export const links = [
    { href: "/user", name: "Account", icon: <User size="50px" /> },
    { href: "/user/dashboard", name: "Dashboard", icon: <BarChart3 size="50px" /> },
    { href: "/user/family", name: "Family", icon: <Crown size="50px" /> },
    { href: "/user/population", name: "Population", icon: <Users2 size="50px" /> },
    { href: "/user/military", name: "Military", icon: <Sword size="50px" /> },
    { href: "/user/resources", name: "Resources", icon: <Pickaxe size="50px" /> },
    { href: "/user/properties", name: "Properties", icon: <Castle size="50px" /> },
    { href: "/user/allies", name: "Allies", icon: <Handshake size="50px" /> },
    { href: "/user/enemies", name: "Enemies", icon: <Skull size="50px" /> },
];