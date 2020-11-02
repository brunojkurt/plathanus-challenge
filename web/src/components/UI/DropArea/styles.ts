import styled, { css } from "styled-components";
import { DropzoneRootProps } from 'react-dropzone';
import { colors } from '../../../styles/global';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

interface TDropContainer extends DropzoneRootProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})<TDropContainer>`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

interface TUploadMessage {
  type?: string;
}

export const UploadMessage = styled.p<TUploadMessage>`
  display: flex;
  color: ${({type}) => type ? colors[type] :  "#999"};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;