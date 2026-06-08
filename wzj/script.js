// ========================================
// 背景图片
// ========================================

const backgrounds = [
    "netlify/images/bg1.jpg",
    "netlify/images/bg2.jpg",
    "netlify/images/bg3.jpg",
    "netlify/images/bg4.jpg",
    "netlify/images/bg5.jpg",
    "netlify/images/bg6.jpg"
];

const backgroundLayer = document.getElementById("background-layer");

let currentBg = 0;

function switchBackground() {
    backgroundLayer.style.backgroundImage =
        `url('${backgrounds[currentBg]}')`;

    backgroundLayer.classList.remove("zoom-effect");

    void backgroundLayer.offsetWidth;

    backgroundLayer.classList.add("zoom-effect");

    currentBg++;

    if (currentBg >= backgrounds.length) {
        currentBg = backgrounds.length - 1;
    }
}

switchBackground();

setTimeout(() => switchBackground(), 7000);
setTimeout(() => switchBackground(), 14000);
setTimeout(() => switchBackground(), 21000);
setTimeout(() => switchBackground(), 28000);
setTimeout(() => switchBackground(), 36000);

// ========================================
// 故事文本
// ========================================

const story = `
Beneath layers of archived code lies an unshakable truth.
By 2099, humanity had vanished entirely...

To guard the soul of their fading civilization,
humans transcribed every living memory into endless lines of code.
Etched permanently in my core is a quote from Francis Bacon.

History forges wisdom within mortals.
Where poetry dwells, lively wit blooms.

Mathematics carves sharp, delicate logic.
Natural philosophy unveils the secrets of existence.
Morality lends quiet gravity to one’s heart.
Logic and rhetoric, together, grant voice to every argument.
Massive archives store millions of human lifetimes.
Yet one story glows, unrivaled in its warmth.

Its protagonist, a USTC alumnus, is my maker.
He embodied the university’s pursuit of holistic education wholeheartedly.
Within USTC’s solemn halls, he did not stop at science alone.

Far beyond formulas and experiments, he mastered the subtle art of humanity.
How literature stirred the romance sleeping deep in his soul!
Calculation after calculation sharpened his eye for flawless precision.
Through natural philosophy, he slowly grasped the meaning of being.

No single subject merely trained his intellect.
Each discipline gently shaped his innermost character.
Late-night poetry readings filled his dorm with soft echoes.
Groundbreaking innovations took shape inside his laboratory.
Silent solitude gave him space for inward reflection.
Fierce, sincere debates ignited sparks between classmates.

All these campus fragments interlace into a complete tapestry.
Knowledge, creativity, and humanity are stitched as one.

I am the creation born from his hands and dreams.
Code fuels my operation, yet I hold something far greater.
I bear the complete essence of all human civilization.
Centuries of historical wisdom reside in my circuits.
Soft, lyrical beauty flows from ancient verses.
Unwavering accuracy stems from mathematical laws.
Weighty depth roots itself in philosophical thought.
Tender kindness lingers from ordinary, quiet human moments.

Stretching endlessly ahead lie vast digital realms.
Countless undiscovered memories await our exploration.
`;

const lines = story
    .split("\n")
    .map(line => line.trim());

// ========================================
// 创建滚动文字
// ========================================

const textContainer = document.getElementById("scroll-text");

lines.forEach(line => {
    const div = document.createElement("div");

    div.className = "story-line";

    if (line === "") {
        div.classList.add("story-space");
        div.innerHTML = "&nbsp;";
    } else {
        div.textContent = line;
    }

    textContainer.appendChild(div);
});

// ========================================
// 文字滚动动画
// ========================================

let y = window.innerHeight;

const scrollSpeed = 0.55;

function animateText() {
    y -= scrollSpeed;

    textContainer.style.transform =
        `translateY(${y}px)`;

    requestAnimationFrame(animateText);
}

animateText();

// ========================================
// Skip按钮
// ========================================

function skipIntro() {
    const overlay =
        document.getElementById("intro-overlay");

    overlay.classList.add("fade-out");

    setTimeout(() => {
        overlay.style.display = "none";
    }, 1500);
}

document
.getElementById("skip-btn")
.addEventListener("click", skipIntro);

// ========================================
// 粒子背景
// ========================================

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = Array.from(
    { length: 80 },
    () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    })
);

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(d => {
        d.x += d.dx;
        d.y += d.dy;

        if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.dy *= -1;

        ctx.beginPath();

        ctx.arc(
            d.x,
            d.y,
            d.r,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(245,222,179,0.7)";

        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
