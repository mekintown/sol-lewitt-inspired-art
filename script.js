const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

const mask = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'mask'
  );

mask.setAttribute('id', 'showMask');
svg.appendChild(mask);
for (let x = 0; x < 100; x++) {
    for (let y = 1; y < 800; y += 40) {
        const maskCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        maskCircle .setAttribute('cx', x * 40);
        maskCircle .setAttribute('cy', y);
        maskCircle .setAttribute('r', 20);
        maskCircle .setAttribute('fill', 'white');
        mask.appendChild(maskCircle);
    }
}

const mask2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'mask'
  );
mask2.setAttribute('id', 'NotShowMask');
const rectFull = document.createElementNS('http://www.w3.org/2000/svg','rect');
rectFull.setAttribute('width', width)
rectFull.setAttribute('height', height)
rectFull.setAttribute('fill', "white")
mask2.appendChild(rectFull)
svg.appendChild(mask2);
for (let x = 0; x < 100; x++) {
    for (let y = 1; y < 800; y += 40) {
        const maskCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        maskCircle .setAttribute('cx', x * 40);
        maskCircle .setAttribute('cy', y);
        maskCircle .setAttribute('r', 20);
        maskCircle .setAttribute('fill', 'black');
        mask2.appendChild(maskCircle);
    }
}


for (let i = 0; i < 150; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x', i * 10);
    rect.setAttribute('width', 5);
    rect.setAttribute('height', height);
    rect.setAttribute('mask', 'url(#NotShowMask)');
    svg.appendChild(rect);
}

for (let i = 0; i < 80; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('y', i * 10);
    rect.setAttribute('width', width);
    rect.setAttribute('height', 5);
    rect.setAttribute('mask', 'url(#showMask)');
    rect.classList.add("spin")
    svg.appendChild(rect);
}

