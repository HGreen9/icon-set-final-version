// ✅ gsap loaded? 
console.log( gsap );

gsap.from ("#right-sword", {
  x: 50,
  delay: 1.5,
  ease: "back",
  durration: 2.5
});
gsap.from ("#left-sword", {
  x: -50,
  delay: 1.5,
  ease: "back",
  durration: 2.5
});

gsap.from ("#shield", {
  opacity: 0,
  ease: "bounce",
  scale: 5,
  delay: 2.5,
  durration: 1
});

gsap.from ("#scroll", {
  opacity: 0,
  y: -40,
  ease: "bounce",
  delay: 3.5,
  durration: 1,
  rotate: -30
});

gsap.from ("#potion", {
  opacity: 0,
  x: -50,
  delay: 4.5,
  durration: 1
});
gsap.to ("#potion", {
 rotate: 95,
  delay: 5,
    fill: "lightblue",
  durration: 2
});

gsap.to (".liquid", {
  delay: 5.5,
    opacity: 0
});

gsap.from ("#castle", {
    opacity: 0,
    delay: 6.5,
 });

gsap.to ("#castle", {
  delay: 7,
  scale: 5,
  duration: 1.5, 
 });
gsap.to ("#castle", {
  delay: 7.5,
  y: 500,
  opacity: 0,
  duration: 0.5, 
 });

gsap.to ("#castle", {
  y: 1,
  scale: 1,
  delay: 8,
  opacity: 100, 
 });

gsap.from ("#magic-wand",{
  opacity: 0,
  delay: 8.5,
  rotate: -90,
  durration: 2, 
  ease: "elastic"
});
gsap.to ("#magic-wand",{
 rotate: 90,
  durration: 2,
  ease: "elastic",
  delay: 9
});

gsap.from("#sparkle", {
  opacity: 0,
  scale: 2,
  delay: 10,
  repeat: 2,
  durration: 2
});

gsap.from("#crown", {
 opacity: 0,
  delay: 11.5,
  durration: 3
});

gsap.to("#crown", {
 x: -40,
  opacity: 0,
  delay: 12,
    durration: 2
});

gsap.to("#crown", {
 x: 1,
  opacity: 100,
  delay: 13,
    durration: 2
});

gsap.from("#sprout", {
  opacity: 0,
  y: 70,
  ease: "bounce",
  durration: 4,
  delay: 14
});