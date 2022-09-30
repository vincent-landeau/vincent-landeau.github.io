import gsap from "gsap";
var tl = null

export function loadCursor() {
    tl = gsap
        .to('#cursor-big', 0.2, {
            scale: 1.6
        }).reversed(true)
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHover);
}

export function loadMouseHover() {
    document.querySelectorAll("a").forEach((element) => {
        element.addEventListener("mouseover", onMouseHover);
        element.addEventListener("mouseout", onMouseHover);
    })
}

function onMouseMove(e) {
    const cursor = document.querySelector('.custom-cursor'),
        cursorBig = cursor.querySelector('#cursor-big'),
        cursorSmall = cursor.querySelector('#cursor-small');
    if (cursor.style.opacity == 0) {
        cursor.style.opacity = 1;
        gsap.to(cursorBig, 0, {
            x: e.clientX - 30,
            y: e.clientY - 30
        })
        gsap.to(cursorSmall, 0, {
            x: e.clientX - 4,
            y: e.clientY - 4
        });
        return
    }
    gsap.to(cursorBig, 0.4, {
        x: e.clientX - 30,
        y: e.clientY - 30
    });
    gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4
    });
}

function onMouseHover() {
    tl.reversed(!tl.reversed());
}