export const generateRandomAnimation = () => {
    const randomX = Math.random() * (300 - (-300) + 1) + (-300);
    const randomY = Math.random() * (300 - (-300) + 1) + (-300);

    const mainDuration = 0.3;
    const randomDelayMain = Math.random() * (1.5 - (0.5) + 1) + (0.5)

    const opacityDelay = 1 + mainDuration + randomDelayMain


    return {
        x: [randomX, 0],
        y: [randomY, 0],
        opacity: [1, 0, 1],
        transition: { delay: randomDelayMain, duration: mainDuration, ease: "easeIn", opacity: { duration: 0.2, delay: opacityDelay } }
    }
}