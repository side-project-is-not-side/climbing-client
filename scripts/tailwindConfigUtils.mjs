import { camelCase } from 'change-case';

export const addHyphen = (str) => {
  return str.endsWith('-') ? str : `${str}-`;
};

export const makeSdObject = (obj, keys, value) => {
  const lastIndex = keys.length - 1;
  for (let i = 0; i < lastIndex; ++i) {
    const key = camelCase(keys[i]);
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  if (keys[lastIndex] === 'DEFAULT') {
    obj[keys[lastIndex]] = value;
  } else {
    obj[camelCase(keys[lastIndex])] = value;
  }
};

export const getConfigValue = (value, defaultValue) => {
  if (value === undefined) {
    return defaultValue;
  }

  return value;
};

export const joinSpace = (value, type, space = ' '.repeat(4)) => {
  if (type !== 'all') {
    return value;
  }
  return space + value;
};

export const unquoteFromKeys = (json, type) => {
  const result = json.replace(/"(\\[^]|[^\\"])*"\s*:?/g, (match) => {
    if (/[0-9]/.test(match) && /[a-zA-Z]/.test(match)) {
      return match;
    }
    if (/:$/.test(match)) {
      return joinSpace(match.replace(/^"|"(?=\s*:$)/g, ''), type);
    }

    return match;
  });

  return result.replace(/}/g, (match) => joinSpace(match, type));
};

export const getTemplateConfigByType = (type, content, darkMode, tailwindContent, plugins) => {
  const getTemplateConfig = () => {
    let config = `{
  content: [${tailwindContent}],
  darkMode: ${`"${darkMode}"`},
  theme: {
    extend: ${unquoteFromKeys(content, type)},
  },`;

    if (plugins.length > 0) {
      config += `\n plugins: [${plugins}]`;
    }

    config += '\n}';

    return config;
  };

  const configs = `import type { Config } from 'tailwindcss';\n\n
   const config: Config = ${getTemplateConfig()}\n\n
   export default config;
   `;

  return configs;
};
