import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Import the icon for source code

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      style={{ height: '700px',width:'70%' }} // Set the height of the editor container
      modules={{
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
          {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean'],
          [{ 'source': 'code' }] // Add the source code button to the toolbar
        ]
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
      theme="snow" // Use the snow theme for a cleaner look
    />
  );
};

export default RichTextEditor;
