import { useEffect, useRef } from "react";
import anime from "animejs";

const Menu = () => {
const menuRef = useRef(null);

useEffect(() => {
  const menuSection = menuRef.current;
  const menuCards = menuSection.querySelectorAll(".menu-card");
  const windowHeight = window.innerHeight;

  // Set initial opacity to 0 for all menu cards
  anime.set(menuCards, { opacity: 0 });

  const fadeInElements = () => {
    menuCards.forEach((card, index) => {
      // Animate card opacity
      anime({
        targets: card,
        opacity: [0, 1],
        duration: 1000,
        delay: index * 200, // Add delay for staggered animation
        easing: "easeInQuad",
      });
    });
  };

  // Trigger the animation when the component mounts
  fadeInElements();
}, []);


  return (
    <section className="h-screen menu-section mt-8" ref={menuRef}>
      <div className="menu-card">
        <div className="menu-title">
          <h1>Cold Coffees</h1>
        </div>
        <div className="menu-items">
          <div className="menu-item">Classic Iced</div>
          <div className="menu-item">Cinnamon Caramel</div>
          <div className="menu-item">Vanilla Sweet Cream</div>
          <div className="menu-item">White Chocolate</div>
          <div className="menu-item">Dark Chocolate</div>
          <div className="menu-item">Cold Mocha</div>
        </div>
      </div>

      <div className="menu-card">
        <div className="menu-title">
          <h1>Hot Coffees</h1>
        </div>
        <div className="menu-items">
          <div className="menu-item">Dark Roast</div>
          <div className="menu-item">Decaf Roast</div>
          <div className="menu-item">Caffe Americano</div>
          <div className="menu-item">Cappucino</div>
          <div className="menu-item">Espresso Shot</div>
          <div className="menu-item">Flat White</div>
        </div>
      </div>

      <div className="menu-card">
        <div className="menu-title">
          <h1>Bakery</h1>
        </div>
        <div className="menu-items">
          <div className="menu-item">Chocolate Cake</div>
          <div className="menu-item">Choco Chunk Cookie</div>
          <div className="menu-item">Butter Crossiant</div>
          <div className="menu-item">Everything Bagel</div>
          <div className="menu-item">Blueberry Muffin</div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
