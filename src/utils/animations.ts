export const floatingAnimation = {
    float: {
        y: [0, -10, 0],   // Vertical floating animation
        rotate: [0, 10, -10, 0],  // Rotation animation
        transition: {
            duration: 4,  // Duration of the animation
            ease: "easeInOut",  // Easing function
            repeat: Infinity,  // Loop the animation infinitely
            repeatType: "loop" as const,  // Restart from the beginning of the animation
        },
    },
};

export const glowAnimation = {
    glow: {
        filter: [
            'drop-shadow(0 0 5px rgba(0, 255, 255, 0.1))',  // Initial glow
            'drop-shadow(0 0 10px rgba(0, 255, 255, 0.15))',  // Stronger glow
            'drop-shadow(0 0 15px rgba(0, 255, 255, 0.2))',   // Strongest glow
            'drop-shadow(0 0 10px rgba(0, 255, 255, 0.15))',  // Reverse to stronger
            'drop-shadow(0 0 5px rgba(0, 255, 255, 0.1))'   // Back to initial light glow
        ],
        transition: {
            duration: 2,  // Time for one pulse cycle
            ease: 'easeInOut',
            repeat: Infinity,  // Loop indefinitely
            repeatType: 'mirror' as const,  // Smooth transition between keyframes
        },
    },
};