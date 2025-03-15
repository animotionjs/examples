export function glitch(el: HTMLElement) {
	const text = el.innerText
	el.classList.add('glitch')
	el.innerHTML = `<span>${text}</span>${text}<span>${text}</span>`
}
