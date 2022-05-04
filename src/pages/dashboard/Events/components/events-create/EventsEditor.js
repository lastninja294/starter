import {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import {Controller} from 'react-hook-form';
import './EventsCreate.styles.scss';
// import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WysiwygEditor = ({control, index, ...others}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className='events-editor-box'>
      <Controller
        render={({field}) => (
          <>
            <Editor
              {...field}
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName='wrapper-class'
              editorClassName='editor-class'
              toolbarClassName='toolbar-class'
              placeholder='Enter some text...'
            />
          </>
        )}
        control={control}
        {...others}
      />
    </div>
  );
};

export default WysiwygEditor;
