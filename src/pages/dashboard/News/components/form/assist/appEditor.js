import React, { useState } from 'react'
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, ContentState, convertFromHTML} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../index.scss';
const AppEditor = ({
  control,
  error,
  defaultValue,
  name,
  label,
  ...editorProps
}) => {
  // newsDataId.post_description JSON.parsga beriladi
  const postHtml = JSON.parse(defaultValue);
  const html = draftToHtml(postHtml);

  // handle Editor Defaul value
  const [state, setState] = useState({
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(html)),
    ),
  });
  // Editor onChange value
  const editorValue = (e) => {
    const htmlEdit = draftToHtml(e);
    setState({
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(htmlEdit)),
      ),
    });
  };
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{required: true}}
        render={({field}) => {
          return (
            <>
              <label
                style={{
                  display: 'inline-block',
                  marginTop: '15px',
                  fontSize: '16px',
                }}>
                {label}
              </label>
              <Editor
                {...field}
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                defaultEditorState={state.editorState}
                onContentStateChange={editorValue}
                {...editorProps}
              />
              {error && (
                <p style={{color: 'red', fontSize: '12px', margin: '0'}}>
                  * {error?.message || 'This field is required to be filled'}
                </p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default AppEditor

AppEditor.propTypes = {
  control: PropTypes.object,
  error: PropTypes.object,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};