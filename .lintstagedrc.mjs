import path from 'path'

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`

const buildPrettierCommand = () => 'prettier --write --ignore-unknown'

const lintStagedResult = {
    '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
    '!*.{js,jsx,ts,tsx}': [buildPrettierCommand]
}

export default lintStagedResult