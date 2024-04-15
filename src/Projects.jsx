import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Projects() {
  const ballsRef = useRef([]);

  // Define an array of words to display in each ball
  const words = ["Armoire", "Graphic Design", "Dima", "Efficient", "Reliable"];

  useEffect(() => {
    const balls = ballsRef.current;

    balls.forEach((ball, index) => {
      const initialX = Math.random() * (window.innerWidth - 200);
      const initialY = Math.random() * (window.innerHeight - 200);

      gsap.set(ball, { x: initialX, y: initialY });

      const speed = 75;
      let angle = Math.random() * 2 * Math.PI;
      let vx = Math.cos(angle) * speed;
      let vy = Math.sin(angle) * speed;

      let lastTime = Date.now();

      const update = () => {
        const now = Date.now();
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        let newX = parseFloat(gsap.getProperty(ball, "x")) + vx * delta;
        let newY = parseFloat(gsap.getProperty(ball, "y")) + vy * delta;

        if (newX <= 0 || newX + 200 >= window.innerWidth) {
          vx *= -1;
          newX = newX <= 0 ? 0 : window.innerWidth - 200;
        }
        if (newY <= 0 || newY + 200 >= window.innerHeight) {
          vy *= -1;
          newY = newY <= 0 ? 0 : window.innerHeight - 200;
        }

        gsap.set(ball, { x: newX, y: newY });
        requestAnimationFrame(update);
      };

      update();
    });
  }, []);

  return (
    <div className='Projects'>
      <div className='projects-title'>
        <h1>Work</h1>
      </div>
      <div className="ball-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {words.map((word, index) => (
          <div key={index} 
          ref={el => ballsRef.current[index] = el} className="ball" 
            style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white', // Text color
            fontSize: '35px' // Text size
          }}>
            {word} {/* Different word in each ball */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
