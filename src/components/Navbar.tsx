import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";
import { ModeToggle } from "./elements/DarkModeToggle";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex h-[60px] items-center justify-between px-4 md:px-6 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md transition-colors ease-in-out duration-200">
            <div className="flex items-center gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800 text-xl transition-colors ease-in-out duration-200"
                        >
                            ☰
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white/80 dark:bg-black/80 backdrop-blur-lg text-black dark:text-white transition-colors ease-in-out duration-200">
                        <div className="grid gap-2 py-2">
                            {navItems.map(({ name, link }, index) => (
                                <Link
                                    key={`${name}-${index}`}
                                    to={link}
                                    className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors ease-in-out duration-200"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>

                <Link to="/" className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-300 lg:px-[200px] px-0 transition-colors ease-in-out duration-200">
                    Chat App
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <nav className="hidden lg:flex gap-6">
                    {navItems.map(({ name, link }, index) => (
                        <Link
                            key={`${name}-${index}`}
                            to={link}
                            className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-1 text-sm font-medium hover:bg-gray-200 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-black dark:hover:text-gray-300 dark:focus:bg-black dark:focus:text-gray-300 transition-colors ease-in-out duration-200"
                        >
                            {name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 lg:pr-[200px] pr-0">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="ghost" className="text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800 transition-colors ease-in-out duration-200">
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-8 h-8 text-black mx-5 transition-colors ease-in-out duration-200",
                                    userButtonPopoverCard: "bg-white/80 dark:bg-black/80 backdrop-blur-lg text-black dark:text-white transition-colors ease-in-out duration-200",
                                    userButtonPopoverActionButton: "hover:bg-gray-200 transition-colors ease-in-out duration-200",
                                    userButtonPopoverActionButtonText: "text-black dark:text-white transition-colors ease-in-out duration-200",
                                    userButtonPopoverFooter: "bg-white/80 dark:bg-black/80 dark:text-white transition-colors ease-in-out duration-200",
                                },
                            }}
                        />
                    </SignedIn>
                    <ModeToggle/>
                </div>
            </div>
        </header>
    );
}

