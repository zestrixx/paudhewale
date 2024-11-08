const marqueeRoot = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(marqueeRoot).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content-icon");

marqueeRoot.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}