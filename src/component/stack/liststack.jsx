import { SiPython, SiHtml5, SiCss3, SiBootstrap, SiPostgresql, SiMongodb, SiTensorflow, SiPandas, SiNumpy } from "react-icons/si";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MemoryIcon from '@mui/icons-material/Memory';
import StyleIcon from '@mui/icons-material/Style';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const technologyStackList = [
    {
        category: "Programming Languages",
        items: [
            {
                name: "Python",
                description: "A high-level, interpreted programming language known for its simplicity and versatility.",
                icon: <SiPython color="#3776AB" />,
                skillSet: "1 year experience",
            },
            {
                name: "JavaScript",
                description: "A high-level programming language used for building interactive and dynamic web applications.",
                icon: <CodeIcon style={{ color: '#f0db4f' }} />,
                skillSet: "1 year experience",
            },
            {
                name: "HTML5",
                description: "The standard markup language for creating modern, semantic web pages.",
                icon: <SiHtml5 color="#E34F26" />,
                skillSet: "1 year experience",
            },
            {
                name: "CSS3",
                description: "A stylesheet language used to style and layout HTML documents.",
                icon: <SiCss3 color="#1572B6" />,
                skillSet: "1 year experience",
            },
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            {
                name: "Django",
                description: "A high-level Python web framework for building secure and maintainable websites.",
                icon: <StorageIcon color="secondary" />,
                skillSet: "1 year experience",
            },
            {
                name: "React JS",
                description: "A popular JavaScript library for building component-based user interfaces.",
                icon: <WidgetsIcon color="primary" />,
                skillSet: "1 year experience",
            },
            {
                name: "Flutter",
                description: "An open-source UI toolkit by Google for building cross-platform applications.",
                icon: <PhoneIphoneIcon color="primary" />,
                skillSet: "1 year experience",
            },
            {
                name: "Bootstrap",
                description: "A CSS framework for building responsive and mobile-first web projects.",
                icon: <ViewModuleIcon color="secondary" />,
                skillSet: "1 year experience",
            },
        ],
    },
    {
        category: "Databases",
        items: [
            {
                name: "PostgreSQL",
                description: "A powerful, open-source object-relational database system.",
                icon: <SiPostgresql color="#336791" />,
                skillSet: "6 months experience",
            },
            {
                name: "MongoDB",
                description: "A NoSQL database program that uses JSON-like documents with optional schemas.",
                icon: <SiMongodb color="#47A248" />,
                skillSet: "6 months experience",
            },
        ],
    },
    {
        category: "AI & ML",
        items: [
            {
                name: "Artificial Intelligence (AI)",
                description: "Technologies and algorithms that enable machines to mimic human intelligence.",
                icon: <SmartToyIcon color="secondary" />,
                skillSet: "6 months experience",
            },
            {
                name: "LLM (Large Language Models)",
                description: "Advanced AI models trained on massive datasets to understand and generate human-like text.",
                icon: <MemoryIcon color="secondary" />,
                skillSet: "6 months experience",
            },
            {
                name: "TensorFlow",
                description: "An open-source library for machine learning and artificial intelligence.",
                icon: <SiTensorflow color="#FF6F00" />,
                skillSet: "6 months experience",
            },
            {
                name: "Pandas",
                description: "A Python library for data manipulation and analysis.",
                icon: <SiPandas color="#150458" />,
                skillSet: "6 months experience",
            },
            {
                name: "NumPy",
                description: "A Python library for numerical computing and working with large, multi-dimensional arrays.",
                icon: <SiNumpy color="#013243" />,
                skillSet: "6 months experience",
            },
        ],
    },
];

export default technologyStackList;
