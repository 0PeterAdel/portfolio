import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Human Resources Dataset Analysisp',
        description: `Currently collaborating with a team to analyze a comprehensive Human Resources dataset as part of a competition organized by DEPI and eYouth in partnership with the Ministry of Communications. The project is also being presented alongside other competitive projects in the same field.
        My role focuses on:
            - Data Preprocessing: Writing SQL queries for data extraction and cleaning, and utilizing Python with Pandas for data preprocessing and manipulation.
            - Visualization and Insights: Developing Power BI dashboards to visualize trends and key insights for decision-makers.
            - Forecasting Models: Assisting in the creation of predictive models using Scikit-learn to identify future trends.
        This ongoing project aims to deliver actionable insights for enhancing organizational decision-making processes, while competing at a high level within the industry.`,
        tools: ['SQL', 'Python', 'Power BI', 'Pandas', 'Matplotlib', 'Excel', 'Scikit-learn', 'Tableau'],
        role: 'Data Analyst (SQL, Python, Power BI)',
        github: 'https://github.com/0PeterAdel/Data-Dyanamos',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'CyberBrain_Model',
        description: `CyberBrain_Model is an advanced AI project focused on fine-tuning the model \`unsloth/DeepSeek-R1-Distill-Qwen-14B\` for cyber security tasks. 
        It emphasizes robust data processing and machine learning techniques using Python. 
        The project leverages PyTorch and Hugging Face Transformers for training and fine-tuning large language models, while Unsloth is used to optimize performance on devices with limited hardware resources.
        Training data, sourced from various cyber security materials, is processed into instruction-response pairs, enabling the model to address cyber security challenges efficiently and ethically.`,
        tools: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Unsloth', 'Google Colab', 'LoRA', 'Data Processing', 'Git', '...'],
        code: '',
        github: 'https://github.com/0PeterAdel/CyberBrain_Model',
        role: 'Machine Learning Engineer & Project Owner',
    },
    {
        id: 3,
        name: 'Computational Genomics',
        description: `This project focuses on classifying cancer patients using genomic mutation and DNA methylation data. 
        The primary goals include:
            - Task 1: Classifying patients based solely on mutation data.
            - Task 2: Enhancing classification by integrating mutation and methylation data.
        Leveraging GPU-accelerated computing in Google Colab, the project employs advanced feature engineering, dimensionality reduction, and machine learning models (RandomForest and XGBoost) to achieve high accuracy in cancer subtype prediction. 
        Visualizations and performance metrics (F1-Score up to 0.882) demonstrate the effectiveness of the integrated approach, offering valuable insights for personalized cancer treatment.`,
        tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'XGBoost', 'CuDF', 'Torch', 'Google Colab', 'GPU Acceleration'],
        role: 'Data Scientist & Machine Learning Engineer',
        github: 'https://github.com/0PeterAdel/Computational-Genomics',
        demo: 'https://colab.research.google.com/drive/1ipRDOFxU05ZRPBaigBNUYV7494gW3D4l?usp=sharing',
    },
    {
        id: 4,
        name: 'Okalo',
        description: 'I am currently developing Okalo, an AI-powered virtual assistant that integrates various functionalities to enhance user interaction. I am building the backend using Python with Eel for seamless communication between the frontend and backend. The project leverages AI technologies for voice recognition and text-to-speech capabilities, utilizing libraries like pyttsx3 and Speech Recognition. Additionally, I am integrating OpenAI API for advanced natural language processing. The assistant is designed to assist users efficiently and intelligently, offering a user-friendly experience with a customizable interface.',
        tools: ['python', 'JS', 'HTML', 'CSS', 'BootStrap', 'eel', 'pyttsx3', 'speech_recognition', 'OpenAI API', 'Local Ai-Models', '...'],
        code: 'https://github.com/0PeterAdel/Okalo',
        github: 'https://github.com/0PeterAdel/Okalo',
        role: 'Full-Stack Developer & Project Owner',
        demo: 'https://github.com/0PeterAdel/Okalo',
    },
    {
        id: 5,
        name: 'Brazilian E-Commerce',
        description: 'This project tackles the Brazilian E-Commerce Data Challenge by analyzing the Olist dataset to extract insights on customer behavior, sales, and delivery performance. Using Python and libraries like pandas and numpy, the data was cleaned and prepared for analysis. Key metrics such as revenue reconciliation, order status distribution, and delivery delays were calculated and visualized through an interactive Power BI dashboard. The project demonstrates skills in data cleaning, analysis, and visualization, providing actionable insights for e-commerce optimization.',
        tools: ['Python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'Jupyter Notebook', 'Power BI', 'Excel', 'Git', '...'],
        code: 'https://github.com/0PeterAdel/Brazilian-ECommerce',
        github: 'https://github.com/0PeterAdel/Brazilian-ECommerce',
        role: 'Data Analyst & Project Owner',
    },
    {
        id: 6,
        name: 'Renewable Energy Production Forecasting',
        description: "Built a machine learning model in a data science competition to predict renewable energy production. Using Python and Scikit-learn, the model was trained on economic and environmental data to create a tool supporting smarter clean energy investments.",        tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        role: 'Data Scientist / Machine Learning',
        github: 'https://www.datacamp.com/datalab/w/f20ece7a-dbe7-4c12-8cc0-b45c4adc5780',
        code: 'https://www.datacamp.com/datalab/w/f20ece7a-dbe7-4c12-8cc0-b45c4adc5780',
        demo: '', 
    },
    {
        id: 7,
        name: 'Data-Verse',
        description: `Data-Verse is an end-to-end AI data analysis agent that automates data ingestion, cleaning, pattern extraction, and predictive modeling, culminating in interactive visualizations—providing a comprehensive alternative to traditional data analysts. 
        The project integrates advanced AI techniques with a user-friendly interface, leveraging Fast API for backend processing and React with Tailwind CSS for a responsive frontend. Large Language Models (LLM) enhance the agent's ability to derive insights, making it a powerful tool for data-driven decision-making.`,
        tools: ['TypeScript', 'Python', 'JavaScript', 'CSS', 'Fast API', 'LLM', 'Vite', 'React', 'shadcn-ui', 'Tailwind CSS'],
        role: 'Full-Stack Developer & AI Engineer',
        github: '',
        code: '',
        demo: 'https://data-verse.netlify.app',
    },
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
//     image: crefin,realEstate
// },
