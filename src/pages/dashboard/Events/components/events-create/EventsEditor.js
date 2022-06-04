import {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import {Controller} from 'react-hook-form';
import './EventsCreate.styles.scss';
// import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WysiwygEditor = ({control,placeholder,errors,allerrors, name, ...others}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=''
        render={({field}) => (
          <>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
              }}>
              deccription
              <div className='events-editor-box'>
                <Editor
                  {...field}
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName='wrapper-class'
                  editorClassName='editor-class'
                  toolbarClassName='toolbar-class'
                  placeholder={placeholder}
                />
              </div>
            </label>
          </>
        )}
        {...others}
      />
      {allerrors && (
        <p style={{fontSize: '12px', color: 'red'}}>
          {errors?.message || "I Barcha maydonlar to'ldirilishi lozim !"}
        </p>
      )}
    </>
  );
};

export default WysiwygEditor;
