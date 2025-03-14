function LinkArrow({strokeColor, width, height}: {
    strokeColor: string, 
    width?: number | string,
    height?: number | string
}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 24" 
            width={width ?? 48} 
            height={height ?? 24}
            stroke={strokeColor} 
            strokeWidth="2" 
            strokeLinecap="round"
        >
            <line x1="26" y1="1" x2="46" y2="1"/>
            <line x1="46" y1="22" x2="46" y2="1"/>
            <line x1="5" y1="23" x2="23" y2="23"/>
            <line x1="23" y1="24" x2="46" y2="1"/>
        </svg>
    )
}

export { LinkArrow }
