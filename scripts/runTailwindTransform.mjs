import { makeSdTailwindConfig } from './getTailwindConfig.mjs';
import StyleDictionaryModule from 'style-dictionary';

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: 'all',
    source: ['./tokens/global.json'],
    buildPath: '',
  }),
);

StyleDictionary.buildAllPlatforms();
