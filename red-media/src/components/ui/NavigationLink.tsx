// src/components/NavigationLink.tsx
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface NavItem {
    path: string;
    name: string;
}

interface NavigationLinkProps {
    navItem: NavItem;
    shouldBeInverted: boolean;
    onClick?: () => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ navItem, shouldBeInverted, onClick }) => {
    
    return (
        <Link
            to={navItem.path}
            className={clsx(
                'group',
                'transition-colors duration-300',
                'text-base md:text-lg lg:text-xl font-extrabold',
                shouldBeInverted ? 'text-black' : 'text-white'
            )}
            aria-label={`Navigate to ${navItem.name}`}
            onClick={onClick}
        >
            {/* Left Bracket */}
            <span
                className={clsx(
                    'transition-colors duration-300',
                    'font-extrabold',
                    'text-base md:text-lg lg:text-xl xl:text-3xl',
                    'group-hover:text-[#c9111d]',
                    shouldBeInverted ? 'text-black' : 'text-white'
                )}
            >
                [
            </span>

            {/* Navigation Item Name */}
            <span
                className={clsx(
                    'transition-colors duration-300',
                    'mx-0 xl:mx-1',
                    'font-bold text-sm md:text-base lg:text-lg xl:text-2xl',
                    shouldBeInverted
                        ? 'text-[#c9111d] group-hover:text-black'
                        : 'text-[#c9111d] group-hover:text-white'
                )}
            >
                {navItem.name}
            </span>

            {/* Right Bracket */}
            <span
                className={clsx(
                    'transition-colors duration-300',
                    'font-extrabold',
                    'text-base md:text-lg lg:text-xl xl:text-3xl',
                    'group-hover:text-[#c9111d]',
                    shouldBeInverted ? 'text-black' : 'text-white'
                )}
            >
                ]
            </span>
        </Link>
    );
};

export default NavigationLink;
