module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'build', 'style', 'test']],
    'subject-case': [2, 'always', ['lower-case', 'start-case']],
  },
};
