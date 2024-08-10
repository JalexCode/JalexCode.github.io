import ReactDOM from 'react-dom';

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageSrc}
          alt="Modal Content"
          className="max-w-full max-h-[90vh] rounded-2xl"
        />
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;