import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropzone.css';

const preventDefaults = e => {
  e.preventDefault();
  e.stopPropagation();
};

export const Dropzone = ({ id, onFileUpload }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const onDragEnterOverHandler = e => {
    preventDefaults(e);
    setIsHighlighted(true);
  };

  const onDragLeaveHandler = e => {
    preventDefaults(e);
    setIsHighlighted(false);
  };

  const onDropHandler = e => {
    preventDefaults(e);
    setIsHighlighted(false);
    onFileUpload(e.dataTransfer.files[0]);
  };

  const onChangeHandler = e => onFileUpload(e.target.files[0]);

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
          (supported format: <span style={{color: 'red'}}>txt</span>
)
        </p>
      </label>
    </form>
  );
};

Dropzone.propTypes = {
  id: PropTypes.string.isRequired,
  onFileUpload: PropTypes.func.isRequired,
};
