// Based on `web3-avatar`: https://github.com/JackHamer09/web3-avatar

export function getGradientColors(address: string) {
    const seedArr = address.match(/.{1,7}/g)?.splice(0, 5);
    const colors: string[] = [];

    seedArr?.forEach((seed) => {
        let hash = 0;
        for (let i = 0; i < seed.length; i += 1) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }

        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 255;
            rgb[i] = value;
        }
        colors.push(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    });

    return colors;
}