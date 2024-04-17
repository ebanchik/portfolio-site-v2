import PropTypes from 'prop-types'; // Import PropTypes

export const Modal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        position: 'relative',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        padding: 20,
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20 }}>Close</button>
        <video src={videoUrl} controls autoPlay style={{ width: '100%', height: '100%' }}></video>
      </div>
    </div>
  );
};

// Define prop types for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string
};

export default Modal;
``
