import React from "react";

interface GridBackgroundProps {
    children: React.ReactNode;
}

export default function GridBackground({ children }: GridBackgroundProps) {
    return (
        <div className=" h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            {children}
        </div>
    );
}
