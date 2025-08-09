import { ReactNode } from "react";

type ContainerProps = {
    children : ReactNode;
}

export default function Container({children}:ContainerProps){
    return <div className="flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[2%]">{children}</div>
}