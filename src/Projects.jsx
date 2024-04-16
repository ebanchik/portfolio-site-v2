import { useEffect, useRef } from 'react';

export function Projects() {
  const words = ["Armoire", "Graphic Design", "Dima", "Split", "Reliable"];
  const ballRefs = useRef([]);

  useEffect(() => {
    ballRefs.current.forEach((ball, index) => {
      let speed = 0.02;  // Speed of movement
      let angle = Math.random() * 2 * Math.PI; // Random angle in radians
      let vx = Math.cos(angle) * speed; // Velocity in x-direction
      let vy = Math.sin(angle) * speed; // Velocity in y-direction

      const updatePosition = () => {
        if (!ball.isHovering) {
          let currentX = parseFloat(ball.style.left) || 0;
          let currentY = parseFloat(ball.style.top) || 0;

          let newX = currentX + vx * 100; // Multiply by 100 for perceptible movement
          let newY = currentY + vy * 100;

          // Boundary checks
          if (newX <= 0 || newX + 200 >= window.innerWidth) {
            vx *= -1;
            newX = newX <= 0 ? 0 : window.innerWidth - 200;
          }
          if (newY <= 0 || newY + 200 >= window.innerHeight) {
            vy *= -1;
            newY = newY <= 0 ? 0 : window.innerHeight - 200;
          }

          ball.style.left = `${newX}px`;
          ball.style.top = `${newY}px`;
        }
        requestAnimationFrame(updatePosition);
      };

      updatePosition();
    });
  }, []);

  const handleMouseEnter = (index) => {
    ballRefs.current[index].isHovering = true;
  };

  const handleMouseLeave = (index) => {
    ballRefs.current[index].isHovering = false;
  };

  return (
    <div className='Projects'>
      <div className='projects-title'>
        <h1>Work</h1>
      </div>
      <div className="ball-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {words.map((word, index) => (
          <div key={index}
            ref={el => ballRefs.current[index] = el}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="ball"
            style={{
              position: 'absolute',
              left: '0px', // Initial left position
              top: '0px', // Initial top position
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              backgroundColor: 'blue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '35px',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
