const eslint = `
/* eslint-disable react/prop-types */
`;

const template = (variables, { tpl }) => {
  return tpl`
${eslint}
${variables.imports};
${`\n`}
${variables.interfaces};
${`\n`}

const ${variables.componentName} = (${variables.props}) => (
  
  ${variables.jsx}
);


${variables.exports};
`;
};

module.exports = template;
