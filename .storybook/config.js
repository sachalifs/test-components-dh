import requireContext from 'require-context.macro';

// const req = require.context('../src', true, /\.stories\.js$/); <-- replaced
const req = requireContext('../src', true, /\.stories\.(js|mdx)$/);