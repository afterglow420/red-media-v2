import { colorClassMap, sizeClassMap } from "@lib/constants/constantsUI";
import { classNames } from "@lib/tailwind/twClassMerger";
import { FC } from "react";
import { ColorClass, SizeClass } from "types/ui";

interface ButtonPropsI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode; // Can be text, elements, or an array of these
    className?: string;
    size?: SizeClass;
    icon?: React.ReactNode; // Optional icon
    colorClass?: ColorClass; // Optional color class
};

const Button: FC<ButtonPropsI> = ({
    children,
    className = '',
    size = 'md',
    icon,
    colorClass = 'info',
    ...rest
}) => {
    // Get the correct size class
    const sizeClass = sizeClassMap[size];

    // Get the correct color class
    const colorClasses = colorClassMap[colorClass];

    return (
        <button
            className={classNames(
                "inline-flex items-center justify-center rounded-md",
                sizeClass,
                colorClasses,
                className
            )}
            {...rest}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
