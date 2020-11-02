import React from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from "./styles";

interface TDropArea {
  onUpload: any;
  multiple?: boolean;
}

const DropArea: React.FC<TDropArea> = (props) => {
  const { onUpload, multiple } = props;

  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <UploadMessage>Clique ou arraste aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte aqui</UploadMessage>;
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={ (files, event) => onUpload(files) } multiple={multiple}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  )
}

export default DropArea;