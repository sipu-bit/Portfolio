import React from 'react';
import { ColorPicker } from '../ui/color';
import { IconType } from 'react-icons';

interface HeadingProps {
    text: string;
    className?: string;
    icon?: IconType;
}

const Heading1: React.FC<HeadingProps> = ({ text, className = "", icon: Icon }) => {
    return (
        <h1 style={{ color: ColorPicker.secondary }} className={`text-3xl items-center flex gap-2.5 tracking-wider font-bold  ${className}`}>
            <span>{Icon && <Icon size={28} />}</span>
            <span>{text}</span>
        </h1>
    )
}

export default Heading1;