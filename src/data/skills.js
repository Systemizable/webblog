import { faCss3Alt, faHtml5, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faCloudArrowDown, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';
import { allWork } from './projects';

// `matches` maps a skill onto the stack tokens used in the project data, so
// the evidence below is derived rather than hand-maintained. Change a
// project's stack and the counts here follow automatically.
const groups = [
    {
        id: 'languages',
        label: 'Languages',
        skills: [
            { id: 'java', name: 'Java', icon: faJava, matches: ['Java'] },
            { id: 'python', name: 'Python', icon: faPython, matches: ['Python'] },
            { id: 'cpp', name: 'C++', icon: faCode, matches: ['C++'] },
            { id: 'javascript', name: 'JavaScript', icon: faJs, matches: ['JavaScript'] },
        ],
    },
    {
        id: 'frontend',
        label: 'Frontend',
        skills: [
            { id: 'html', name: 'HTML', icon: faHtml5, matches: ['HTML/CSS', 'HTML'] },
            { id: 'css', name: 'CSS', icon: faCss3Alt, matches: ['HTML/CSS', 'CSS'] },
            { id: 'react', name: 'React', icon: faReact, matches: ['React'] },
        ],
    },
    {
        id: 'data',
        label: 'Data',
        skills: [
            { id: 'mongodb', name: 'MongoDB', icon: faDatabase, matches: ['MongoDB'] },
            { id: 'sql', name: 'SQL', icon: faServer, matches: ['SQL'] },
        ],
    },
    {
        id: 'platforms',
        label: 'Platforms',
        skills: [
            { id: 'api', name: 'REST APIs', icon: faCloudArrowDown, matches: ['REST APIs', 'Swagger'] },
            { id: 'mobile', name: 'Mobile', icon: faMobile, matches: ['Mobile', 'Flutter'] },
        ],
    },
];

const evidenceFor = matches =>
    allWork.filter(work => work.stack.some(tech => matches.includes(tech)));

export const skillGroups = groups.map(group => ({
    ...group,
    skills: group.skills.map(skill => ({
        ...skill,
        evidence: evidenceFor(skill.matches),
    })),
}));

export const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);

export default skillGroups;
