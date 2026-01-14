export const randomText = (textLength = 10): string => {
    const chars = 'abcdefghijklmnoprstuvwxyz0123456789'
    let string = ''
    for (let i=0; i<textLength; i++) {
        string += chars[Math.floor(Math.random() * chars.length)]
    }
    return `${string}`
}