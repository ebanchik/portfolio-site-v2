import PropTypes from 'prop-types'; // Import PropTypes

export function Modal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',  // Semi-transparent background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000  // High z-index to ensure it covers other content
    }}>
      <div style={{
        position: 'relative',
        padding: 20,
        width: '80vw',
        height: '70vh',
        backgroundColor: 'black',
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 10,
          right: 10,
          border: 'none',
          background: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer'
        }}>
          &times;  {/* Unicode character for "X" */}
        </button>
        <video src={videoUrl} autoPlay controls style={{ width: '1000px', height: '540px' }}>
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </div>
  );
}


Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired
};


export default Modal;