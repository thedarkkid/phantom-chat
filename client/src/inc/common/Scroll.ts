export const scrollToBottom = (elementQuerySelector: string): void => {
	let element = document.querySelector(elementQuerySelector) as HTMLElement;
	element.scrollTop = element.scrollHeight;
};
