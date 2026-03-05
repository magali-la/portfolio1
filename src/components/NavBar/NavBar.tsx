import { useState } from "react"

// interface for NavLink array
interface NavLink {
    id: string;
    label: string;
    href: string;
}

export default function NavBar() {
    // set active tab in state for conditional styling
    const [activeTab, setActiveTab] = useState<string>('');

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
    }

    function handleHomeClick() {
        // reset it so no tabs show
        setActiveTab('');
    }

    return (
        <nav className="md:h-[10vh] max-w-full px-4 bg-amber-50 flex flex-col gap-4 md:flex-row items-start md:items-end justify-between" role="navigation">
            {/* name section */}
            <div className="text-nowrap self-center">
                <a href="#" className="text-pomegranate text-4xl" onClick={handleHomeClick}>Magali Lapu</a>
            </div>

            {/* nav links mapped */}
            <div className="grid grid-cols-4 gap-0 h-full items-end w-full md:w-[75%]" role="navigation" aria-label="navigation links">
                {navLinks.map((item) => (
                    <a href={item.href} key={item.id} className="nav-link" onClick={() => handleActiveTab(`#${item.id}`)} aria-current={activeTab === `#${item.id}` ? 'page' : undefined}>
                        <div className={`flex justify-center pb-1 md:pb-2 rounded-t-lg text-lg md:text-2xl h-[50%] transition-all duration-200
                            ${activeTab === `#${item.id}`
                                ? 'bg-pomegranate text-white font-medium pt-2'
                                : 'hover:bg-pomegranate/20 hover:pt-0.5'
                            }
                        `}>
                            {item.label}
                        </div>
                    </a>
                ))}
            </div>
        </nav>
    )
}