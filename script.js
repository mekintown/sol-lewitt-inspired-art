const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

for (let i = 0; i < 150; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x', i * 10);
    rect.setAttribute('width', 5);
    rect.setAttribute('height', height);
    rect.setAttribute('mask', 'url(#inverted-mask)');
    svg.appendChild(rect);
}