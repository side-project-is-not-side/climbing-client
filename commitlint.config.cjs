module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'build', 'style', 'test', 'docs', 'refactor']],
    'subject-case': [0],
  },
};
