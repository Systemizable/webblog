import { faCss3Alt, faHtml5, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faCloudArrowDown, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';

export const skillGroups = [
    {
        id: 'languages',
        label: 'Languages',
        skills: [
            { id: 'java', name: 'Java', icon: faJava },
            { id: 'python', name: 'Python', icon: faPython },
            { id: 'cpp', name: 'C++', icon: faCode },
            { id: 'javascript', name: 'JavaScript', icon: faJs },
        ],
    },
    {
        id: 'frontend',
        label: 'Frontend',
        skills: [
            { id: 'html', name: 'HTML', icon: faHtml5 },
            { id: 'css', name: 'CSS', icon: faCss3Alt },
            { id: 'react', name: 'React', icon: faReact },
        ],
    },
    {
        id: 'data',
        label: 'Data',
        skills: [
            { id: 'sql', name: 'SQL', icon: faServer },
            { id: 'mongodb', name: 'MongoDB', icon: faDatabase },
        ],
    },
    {
        id: 'platforms',
        label: 'Platforms',
        skills: [
            { id: 'api', name: 'REST APIs', icon: faCloudArrowDown },
            { id: 'mobile', name: 'Mobile', icon: faMobile },
        ],
    },
];

export const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);

export default skillGroups;
