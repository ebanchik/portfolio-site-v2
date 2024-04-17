import { useEffect, useRef, useState } from 'react';
import { Modal } from './Modal'

export function Projects() {
  const ballRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  // Define an array of objects, each with word and optional videoUrl
  const balls = [
    { id: 1, word: "Armoire", videoUrl: null },
    { id: 2, word: "Graphic Design", videoUrl: "path/to/video1.mp4" },
    { id: 3, word: "Dima", videoUrl: null },
    { id: 4, word: "Split", videoUrl: "path/to/video2.mp4" },
  ];

  useEffect(() => {
    ballRefs.current.forEach((ball, index) => {
      let speed = 0.02;
      let angle = Math.random() * 2 * Math.PI;
      let vx = Math.cos(angle) * speed;
      let vy = Math.sin(angle) * speed;

      const updatePosition = () => {
        if (!ball.isHovering) {
          let currentX = parseFloat(ball.style.left) || 0;
          let currentY = parseFloat(ball.style.top) || 0;
          let newX = currentX + vx * 100;
          let newY = currentY + vy * 100;

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
    ballRefs.current[index].style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (index) => {
    ballRefs.current[index].isHovering = false;
    ballRefs.current[index].style.transform = 'scale(1)';
  };

  const handleBallClick = (videoUrl) => {
    if (videoUrl) {
      setCurrentVideoUrl(videoUrl);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl('');
  };

  return (
    <div className='Projects'>
      <div className='projects-title'>
        <h1>Work</h1>
      </div>
      <div className="ball-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {balls.map((ball, index) => (
          <div key={ball.id}
            ref={el => ballRefs.current[index] = el}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleBallClick(ball.videoUrl)}
            className="ball"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
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
              boxSizing: 'border-box',
              transition: 'transform 0.5s'
            }}>
            {ball.word}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} videoUrl={currentVideoUrl} />
      )}
    </div>
  );
}

export default Projects;
