import {
  addHyphen,
  getConfigValue,
  getTemplateConfigByType,
  makeSdObject,
  unquoteFromKeys,
} from './tailwindConfigUtils.mjs';

const formatTokens = (tokens, type, isVariables, prefix) => {
  const allTokenObj = tokens.reduce((acc, cur) => {
    if (cur.attributes === undefined) {
      throw new Error(`Token ${cur.name} has no attributes`);
    }

    if (cur.attributes.category === type || type === 'all') {
      if (isVariables) {
        acc[cur.path.join('.')] = prefix ? `var(--${addHyphen(prefix) + cur.name})` : `var(--${cur.name})`;
      } else {
        acc[cur.path.join('.')] = cur.value;
      }
    }

    return acc;
  }, {});

  const result = {};
  Object.keys(allTokenObj).forEach((key) => {
    const keys = key.split('.').filter((k) => k !== type);
    makeSdObject(result, keys, allTokenObj[key]);
  });

  return JSON.stringify(result, null, 2);
};

const getTailwindFormat = ({ dictionary: { allTokens }, type, isVariables, prefix, tailwind }) => {
  const content = formatTokens(allTokens, type, isVariables, prefix);

  if (type === 'all') {
    const darkMode = getConfigValue(tailwind?.darkMode, 'class');

    const tailwindContent = getConfigValue(
      Array.isArray(tailwind?.content) ? tailwind?.content.map((content) => `"${content}"`) : tailwind?.content,
      [
        `"./pages/**/*.{js,ts,jsx,tsx,mdx}"`,
        `"./components/**/*.{js,ts,jsx,tsx,mdx}"`,
        `"./app/**/*.{js,ts,jsx,tsx,mdx}"`,
      ],
    );

    const plugins = getConfigValue(
      tailwind?.plugins?.map((plugin) => {
        return `require("@tailwindcss/${plugin}")`;
      }),
      [],
    );

    const configs = getTemplateConfigByType(type, content, darkMode, tailwindContent, plugins);

    return configs;
  } else {
    return `module.exports = ${unquoteFromKeys(content)}`;
  }
};

export const makeSdTailwindConfig = ({
  type,
  formatType = 'ts',
  isVariables = false,
  source,
  transforms,
  buildPath,
  prefix,
  tailwind,
}) => {
  if (type === undefined) {
    throw new Error('type is required');
  }

  return {
    source: getConfigValue(source, ['tokens/**/*.json']),
    format: {
      tailwindFormat: ({ dictionary }) => {
        return getTailwindFormat({
          dictionary,
          formatType,
          isVariables,
          prefix,
          type,
          tailwind,
        });
      },
    },
    platforms: {
      [type !== 'all' ? `tailwind/${type}` : 'tailwind']: {
        transforms: getConfigValue(transforms, ['attribute/cti', 'name/cti/kebab']),
        buildPath: getConfigValue(buildPath, 'build/web/'),
        files: [
          {
            destination: 'tailwind.config.ts',
            format: 'tailwindFormat',
          },
        ],
      },
    },
  };
};
