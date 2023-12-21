import { Fragment } from 'react';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
// import {
// darcula,
// nnfxDark,
// monokai
// irBlack,
// vs2015,
// stackoverflowDark,
// oneDark
// } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ICodeProps extends SyntaxHighlighterProps {}

export default function Code({ className, ...props }: ICodeProps) {
  return (
    <Fragment>
      <SyntaxHighlighter
        // language={'javascript'}
        language={'typescript'}
        PreTag='div'
        // style={stackoverflowDark}
        {...props}
      />
    </Fragment>
  );
}
