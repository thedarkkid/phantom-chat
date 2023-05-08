export const randomHexString = (size: number): String => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
