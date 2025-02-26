import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 2,
        name: 'Human Resources Dataset Analysisp',
        description: `Currently collaborating with a team to analyze a comprehensive Human Resources dataset as part of a competition organized by DEPI and eYouth in partnership with the Ministry of Communications. The project is also being presented alongside other competitive projects in the same field.
        My role focuses on:
            - Data Preprocessing: Writing SQL queries for data extraction and cleaning, and utilizing Python with Pandas for data preprocessing and manipulation.
            - Visualization and Insights: Developing Power BI dashboards to visualize trends and key insights for decision-makers.
            - Forecasting Models: Assisting in the creation of predictive models using Scikit-learn to identify future trends.
        This ongoing project aims to deliver actionable insights for enhancing organizational decision-making processes, while competing at a high level within the industry.`,
        tools: ['SQL', 'Python', 'Power BI', 'Pandas', 'Matplotlib', 'Excel', 'Scikit-learn', 'Tableau'],
        role: 'Data Analyst (SQL, Python, Power BI)',
        link: 'https://github.com/0PeterAdel/Data-Dyanamos',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Okalo',
        description: 'I am currently developing Okalo, an AI-powered virtual assistant that integrates various functionalities to enhance user interaction. I am building the backend using Python with Eel for seamless communication between the frontend and backend. The project leverages AI technologies for voice recognition and text-to-speech capabilities, utilizing libraries like pyttsx3 and Speech Recognition. Additionally, I am integrating OpenAI API for advanced natural language processing. The assistant is designed to assist users efficiently and intelligently, offering a user-friendly experience with a customizable interface.',
        tools: ['python', 'JS', 'HTML', 'CSS', 'BootStrap', 'eel', 'pyttsx3', 'speech_recognition', 'OpenAI API', 'Local Ai-Models', '...'],
        code: '',
        link: 'https://github.com/0PeterAdel/Okalo',
        role: 'Full-Stack Developer & Project Owner',
        demo: '',
        image: realEstate,
    },

    {
        name: 'CyberBrain_Model',
        tools: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Unsloth', 'Google Colab', 'LoRA', 'Data Processing', 'Git'],
        myRole: 'Machine Learning Engineer & Project Owner',
        link: 'https://github.com/0PeterAdel/CyberBrain_Model',
        description: `CyberBrain_Model is an advanced AI project focused on fine-tuning the model \`unsloth/DeepSeek-R1-Distill-Qwen-14B\` for cyber security tasks. 
        It emphasizes robust data processing and machine learning techniques using Python. 
        The project leverages PyTorch and Hugging Face Transformers for training and fine-tuning large language models, while Unsloth is used to optimize performance on devices with limited hardware resources.
        Training data, sourced from various cyber security materials, is processed into instruction-response pairs, enabling the model to address cyber security challenges efficiently and ethically.`
    };
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
