// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation เมื่อเลื่อนหน้าจอ
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// เอฟเฟกต์ปุ่ม
const button=document.querySelector(".btn");

button.addEventListener("mouseenter",()=>{
    button.style.transform="scale(1.08)";
});

button.addEventListener("mouseleave",()=>{
    button.style.transform="scale(1)";
});

// เอฟเฟกต์รูปภาพ
document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        const popup=document.createElement("div");

        popup.style.position="fixed";
        popup.style.top="0";
        popup.style.left="0";
        popup.style.width="100%";
        popup.style.height="100%";
        popup.style.background="rgba(0,0,0,.8)";
        popup.style.display="flex";
        popup.style.justifyContent="center";
        popup.style.alignItems="center";
        popup.style.zIndex="9999";

        const image=document.createElement("img");

        image.src=img.src;
        image.style.maxWidth="80%";
        image.style.maxHeight="80%";
        image.style.borderRadius="15px";

        popup.appendChild(image);

        popup.onclick=()=>{
            popup.remove();
        }

        document.body.appendChild(popup);

    });

});
