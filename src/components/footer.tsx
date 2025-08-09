import Link from "next/link";

export default function Footer(){

    const routes = [
    {  path: "/terms-and-conditions",
      name: "Terms & Conditions"}  ,
    {  path: "/privacy-policy",
      name: "Privacy policy"}  
    ];
    return(
    <footer className="flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 mt-auto">
        <small className="text-xs">&copy; 2023 Sofront. All rights reserved.</small>

        <ul className="flex gap-x-3 sm:gap-x-8">
            {
                routes.map((route,index)=>(
                    <li className="" key={index}>
                        <Link href={route.path}>
                            { route.name }
                        </Link>
                    </li>
                ))
            }
        </ul>
    </footer>
    )
}