import { useState } from "react";

// interface for NavLink array
interface NavLink {
    id: string;
    label: string;
    href: string;
}

export default function NavBar2() {
    // set active tab in state for conditional styling
    const [activeTab, setActiveTab] = useState<string>('');
    // state for mobile nav manu
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

    // list of nav link objects - TODO: figure out if it's single page sections or swap of components for site nav
    const navLinks: NavLink[] = [
        {id: 'about', label: 'About', href: '#about'},
        {id: 'skills', label: 'Skills', href: '#skills'},
        {id: 'projects', label: 'Projects', href: '#projects'},
        {id: 'contact', label: 'Contact', href: '#contact'}
    ]

    function handleActiveTab(tabId: string) {
        console.log('Active tab clicked', tabId);
        // set the active tab for styling purposes
        setActiveTab(tabId);
        // and also close the mobile menu if on small screen
        setMobileNavOpen(false);
    }

    function handleHomeClick() {
        // reset it so no tabs show
        setActiveTab('');
        setMobileNavOpen(false);
        // scroll to the top
        window.scrollTo(0, 0);
    }

    return (
        <div className="w-full flex justify-center fixed top-2 z-100">
            <nav className="flex flex-row justify-center items-center backdrop-blur-[1px] backdrop-saturate-200 rounded-2xl gap-10 px-6 py-3 border-2 border-coffee/20 bg-cream/40 shadow-3d relative">
                {/* name */}
                <div className="">
                    <a href="#" className="text-pomegranate text-2xl md:text-3xl font-semibold" onClick={handleHomeClick}>Magali Lapu</a>
                </div>
                {/* nav links - desktop */}
                <div className="hidden sm:flex flex-row justify-center text-xl md:text-2xl gap-4">
                    {navLinks.map((item) => (
                        <a href={item.href} key={item.id} className="nav-link" onClick={() => handleActiveTab(`#${item.id}`)} aria-current={activeTab === `#${item.id}` ? 'page' : undefined}>
                            <div className={`flex justify-center rounded-lg p-1.5 text-lg md:text-2xl transition-all duration-200
                                ${activeTab === `#${item.id}`
                                    ? 'bg-cactus/80 text-cream font-medium'
                                    : 'hover:bg-pomegranate/20'
                                }
                            `}>
                                {item.label}
                            </div>
                        </a>
                    ))}
                </div>

                {/* hidden button for hamburger - clicking it reverses current state */}
                <button className="sm:hidden text-coffee text-2xl cursor-pointer flex flex-col justify-center items-center pt-1" aria-label="toggle nav menu" onClick={() => setMobileNavOpen((prev) => !prev)}>
                    {/* toggle the x button */}
                    {mobileNavOpen ? 
                        <i className="bi bi-x-lg"></i> :
                        <i className="bi bi-list"></i>
                    }
                </button>

                {/* mobile menu dropdown */}
                {mobileNavOpen && (
                    <div className="absolute top-full left-0 right-0 px-6 py-3 mt-2 flex flex-col rounded-2xl border-2 border-coffee/20 bg-cream/90 backdrop-blur-3xl shadow-3d">
                        {navLinks.map((item) => (
                            <a href={item.href} key={item.id} className="nav-link" onClick={() => handleActiveTab(`#${item.id}`)} aria-current={activeTab === `#${item.id}` ? 'page' : undefined}>
                                {/* make sure the active tab doesn't persist when mobile nav is open again by checking condition */}
                                <div className={`flex justify-center rounded-lg p-1.5 text-lg md:text-2xl transition-all duration-200 active:bg-cactus/80 active:text-cream active:font-medium
                                hover:bg-pomegranate/60`}>
                                    {item.label}
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    )
}