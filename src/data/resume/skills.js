// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'OpenAI API',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 1,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS/SCSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'TailwindCSS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Swift',
    competency: 4,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
 
  '#f5b642',
  '#42adf5',
  '#d95050',
  
  '#b642f5',

  '#1cb519',

];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
