import React, { useState, DragEvent, ChangeEventHandler, ChangeEvent} from 'react';
import PropTypes from 'prop-types';
import './Dropzone.css';

type DropzoneProps = {
  id: string,
  onFileUpload: (file: File) => void 
}

export const Dropzone = ({ id, onFileUpload } : DropzoneProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const onDragEnterOverHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHighlighted(true);
  };

  const onDragLeaveHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHighlighted(false);
  };

  const onDropHandler = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHighlighted(false);
    onFileUpload(e.dataTransfer.files[0]);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    onFileUpload(e.target.files[0]);
  }

  return (
    <form
      onDragEnter={onDragEnterOverHandler}
      onDragOver={onDragEnterOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <input
        id={id}
        type="file"
        accept="text/plain, application/zip"
        hidden={true}
        onChange={onChangeHandler}
      />
      <label htmlFor={id} className={`dropzone-label ${isHighlighted ? 'highlight': '' }`}>
        <p>
          Click here to upload a chat export file or drag and drop it onto the dashed region
          (supported format: <span style={{color: 'red'}}>txt</span>)
        </p>
      </label>
    </form>
  );
};

Dropzone.propTypes = {
  id: PropTypes.string.isRequired,
  onFileUpload: PropTypes.func.isRequired,
};
