export const imageAnimation = {
    hidden: { opacity: 0, scale: 1.3 },
    show: {
        opacity: 1,
        scale: 1,
    },
};

export const headerAnimation = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

export const navbarAnimation = {
    hidden: { y: -100 },
    show: {
        y: 0,
    },
};

export const cardAnimation = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
};

export const containerTopAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export const toLeftAnimation = {
    hidden: { x: 200, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const toRightAnimation = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const blogAnimation = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const toUpAnimation = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const toDownAnimation = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
};
