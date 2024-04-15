import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Projects() {
  const ballsRef = useRef([]);

  useEffect(() => {
    const balls = ballsRef.current;

    balls.forEach(ball => {
      const initialX = Math.random() * (window.innerWidth - 200);
      const initialY = Math.random() * (window.innerHeight - 200);

      gsap.set(ball, { x: initialX, y: initialY });

      const speed = 75; // Uniform speed for all balls
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
      <div className="ball-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} ref={el => ballsRef.current[index] = el} className="ball" style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: 'white',
            boxSizing: 'border-box'
          }}></div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
