import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PropTable = ({ name }) => {
  if (!name) return null;

  const global = useGlobalData();
  const propDocs = global['docusaurus-plugin-react-docgen-typescript']?.default;

  console.log(propDocs);
  const props = propDocs.find((obj) => {
    console.log(obj);
    return obj.displayName === name;
  })?.props;

  if (props?.length < 1) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td>
                <code>{key}</code>
              </td>
              <td>
                <code>{props[key].type?.name}</code>
              </td>
              <td>
                {props[key].defaultValue && (
                  <code>{props[key].defaultValue.value}</code>
                )}
              </td>
              <td>{props[key].required ? 'Yes' : 'No'}</td>
              <td>
                <ReactMarkdown skipHtml={false} remarkPlugins={[remarkGfm]}>
                  {props[key].description}
                </ReactMarkdown>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { PropTable };
