import React from 'react'
import { ColorPicker } from '../../styles/color';

interface SubHeadingProps {
  text: string;
  className?: string;
}

const Heading2: React.FC<SubHeadingProps> = ({ text, className = ""  }) => {
  return (
     <h1 style={{ color: ColorPicker.secondary }} className={`text-2xl font-semibold tracking-tight ${className}`}>
      {text}
    </h1>
  )
}

export default Heading2;