import React from 'react'
import Navbar from './components/Navbar'
import All from './components/All'
import Career from './components/Career'
import CyberSecurity from './components/CyberSecurity'
import DataScience from'./components/DataScience'
import FullStackDevelopment from './components/FullStackDevelopment'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  let fullstack = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      content: "When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization? This issue is prevalent across the tech industry. We stay focused on the technical and hard skills of our potential developers, but we often forget about the necessary soft skills in full-stack developer that one would need to function properly in an organization, within a team, and across departments. So, what are these soft skills in full-stack developers that you need to factor in during the selection process? More importantly, how would you evaluate these soft skills in full-stack developers? In this blog"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
      content:"A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.Understanding these jobs helps people choose what they might like to do. It’s important for companies, too. They can put the right people in the right parts of a project. Knowing the differences helps teams work better together and gets things done faster.In this blog, we’ll look deeper into the differences between a Full Stack Developer vs Software Engineer. Knowing the difference between these tech jobs "
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      content:"In the world of system design, envision a digital skyscraper – a multifaceted structure built to withstand the demands of the modern world. Just as an architect crafts blueprints to ensure a skyscraper’s stability, a well-thought-out system design guarantees your digital applications can thrive amid the ever-evolving landscape.When demand for any application is soaring, system design architects quickly recognize the need to maintain an app’s uptime, accessibility, and capacity in the face of increased traffic. Addressing capacity planning poses a recurring challenge for engineering teams, as it involves the complex task of ensuring the availability of appropriate resources to accommodate both anticipated and unforeseen surges in traffic."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title:"Best Books to Learn Full-Stack Development",
      content:"Are you interested  Full stack development means you can build the whole shebang – from the stuff people see on a website (like buttons and images) to the hidden parts that make everything work (like databases and server programs). In simple terms, it’s about making websites do cool things.So, let’s explore these books and see how they can help you become a skilled full-stack developer. No matter if you’re new to coding or have some experience, these books have something valuable for you in your journey to becoming a full-stack developer."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      content:"In the dynamic landscape of technology,bridging the gap between front-end and back-end development. In 2024 and the upcoming years, the demand for versatile full-stack developers is at an all-time high, and product-based companies are looking for individuals who can navigate the complexities of both ends of the development spectrum.According to various reports, full-stack developers are highly paid professionals in the tech industry. And if we talk about pay, according to Ambition Box, the average pay of a full-stack developer in India is 8.8 LPA.Here, we unveil the top 10 product-based companies for full-stack developers that stand out as ideal workplaces in 2024."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title:"7 Best Full-Stack Development Online Courses",
      content:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer? If yes, you’ve come to the right place. In this comprehensive blog, you can find the list of the best full-stack development online courses available on the internet in 2024. Whether you’re a beginner or already have some programming experience, the online courses mentioned in this blog can provide you with the knowledge and skills needed to thrive as a full-stack developer.So, look no further, choose the right course from the list below, and get started!"
    }
  ]
  let datascience = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      content:"Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.While coding remains an integral part of data science, it’s not the only path to a successful career in this dynamic field. In 2024, tech companies and startups are expanding their teams to include professionals who excel in non-coding jobs in data science.In this blog, we’ll explore the top 10 non-coding jobs in data science that are in high demand this year."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title:"Impact of Certification Programs on Hiring Data Scientists",
      content:"Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today. But in this highly competitive job market, how do companies identify the best data scientists that suit specific business needs? That’s where the impact of certification programs on hiring data scientists comes in.In today’s data-driven world, the demand for data scientists is spiking. Organizations are constantly searching for data minds with the unique skills and expertise required to harness the power of data.In this blog, we will explore the impact of certification programs on hiring data scientists, delving into eight essential ."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title:"Top Product-Based Companies for Data Science Freshers",
      content:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.As a data science fresher, it’s essential to find the right company that aligns with your interests and offers the right growth opportunities. In this article, we will explore the top product-based companies for data science freshers, along with the factors to consider when choosing the right employer."

    },
    {
      image:"What is the Difference between Data Science and Data Engineering?",
      title:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      content:"India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend.Companies, big and small, are hungry for data. They want to gather it, crunch it, and use it to supercharge their businesses. And guess where a lot of this action’s happening? Tech hotspots like Bengaluru, Hyderabad, and Pune! But here’s the thing: within this exciting world of data, there are some roles that often get mixed up – like data scientists and data engineers.If you’ve been scratching your head, willing to understand the difference between data science and data engineering. "
     },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png",
      title:"Top 10 Data Science Tools in 2024",
      content:"Data Science is an in-demand profession and will continue growing in the coming years. From this, you can assume its importance, and now if you want to get into data science, you must know about the tools, skills, and frameworks required. You must begin with the skills required and for that data science tools come to the top.In this blog, we’ll be talking about the top 10 and most popular data science tools that will be immensely used by data scientists in 2024. They are the most popular ones and their usage helps data scientist perform their tasks efficiently and effectively. Let’s explore them one by one:"

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title:"Best Data Science Books to Learn in 2024",
      content:"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things. You know, like predicting what people want or finding new ways to help people. Now, if you want to become a data scientist, you might wonder where to start. It’s a big adventure, and we have a special secret weapon to help you on your journey: books. "
   }
  ]
  let cybersecurity = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.In this comprehensive guide, we will explore the various non-coding jobs in cybersecurity, the skills required for each role, and how to pursue a career in this exciting field."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title:"What Is Hacking? Types of Hacking & More",
      content:"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. For example, there are hackers who try to steal your passwords and others who fight to protect your information. Some hackers even have strong beliefs and use their skills to support their causes. It’s a bit like a digital battlefield out there.By the end of this blog, you’ll have a better understanding of what hacking is all about, why it matters, and how you can protect yourself in the digital world. So, let’s begin this journey to unravel the mysteries of hacking in a simple and understandable way."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      content:"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe. Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out! First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking.  Whether you are a business owner or an individual who uses the internet regularly you must understand these terms so that you can take the necessary precautions to protect yourself and your data. In this article, we’re going to shed light on these two security niches. To further understand the difference between cyber security and ethical hacking and which one’s better for you, we will also look at what role you can expect to play as an ethical hacker or cyber security professional."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      content:"Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform. Despite the world’s optimistic perception of modern devices, cyber threats possess an inevitable danger."
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title:"8 Different Types of Cybersecurity and Threats Involved",
      content:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you In this blog, we cover the relationships between cyber security tooling and expertise, and some on-the-job scenarios where it’s beneficial knowing how to code. and ending with some advice for all the non-programmers out there who are just starting out. So without further ado, Let’s break it down!"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      content:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and networks, effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly. Investments are flowing into this field and the market is projected to be a staggering 403 billion US dollars by 2027. This in turn has led to a spurt in demand for experts in the field of cyber security. Cybersecurity is an umbrella term that encompasses different types of security. In this article, we’re trying to deconstruct various types of cybersecurity."
    }
  ]
  let career = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title:"UI/UX Designer Job Description and Roles & Responsibilities",
      content:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade. You know what UI UX is, but do you know their roles and responsibilities? Do you know anything about the UI/UX designer job description?.It is completely fine if you don’t have answers to the above questions because most of them are there without knowing about it but it is essential to know about UI/UX designer roles and responsibilities. In this blog, we’re going to talk about UI/UX designer job descriptions and roles and responsibilities that can help you understand more about this domain and set your career path straight. So, let’s get started."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title:"Top 5 IT Jobs for Economics Students",
      content:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics. As the world becomes increasingly interconnected, businesses are relying on technology to drive growth and make data-driven decisions. This has created a high demand for professionals who possess both economic acumen and technical skills. In this article, we will explore the best IT jobs for economics students, highlighting the skills required, the potential career paths, and the benefits of pursuing a career in this field. "

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title:"Top IT Jobs for Commerce Students: A Lucrative Career Path ",
      content:"With the rapid advancement of technology, the demand for IT professionals has soared in recent years. This trend has created a unique opportunity for commerce students to explore a career in the field of IT.The intersection of commerce and technology offers a wide range of job prospects that can provide both financial stability and personal growth. In this comprehensive guide, we will be exploring some of the best yet intuitive IT jobs for commerce students, and discussing their various roles as well as skills."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title:"Automation Test Engineer Resume: 10 Important Things To Consider ",
      content:"The world is moving towards automating the testing of products in order to increase work efficiency. Those who control the automation process will have a long career journey. In order to do that, all you need to have is a professional automation test engineer resume.As you know, an automation test engineer is one who uses automated testing tools for product testing before deploying it in the real world. If you want to land that job role, prepare yourself a compelling automation test engineer resume.But if you don’t know how to build one, worry not, we got you covered. In this article, you are going to learn how to build a professional automation test engineer resume that can open up the door of opportunities for you. We also included an example automation test engineer resume in order for you to gain a better understanding. So, read till the end."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
      title:"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      content:"The world is moving towards modernization leading to an increase in the popularity of civil engineering. The field is getting competitive and it is important for you to stay ahead of the crowd to achieve big. For that, you need to have a professional and compelling civil engineer resume.Civil engineers are the building blocks of this modern society. So, it is important for recruiters to recruit talented as well as trustworthy civil engineers. In order to choose the right apple out of a big basket, the recruiters have to check your civil engineer resume. That’s why it is important for you to build a professional resume."

    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      title:"9 Best Product-Based Companies for Project Management",
      content:"In today’s tech-driven world, the demand for project managers is higher than before. The workload of every other company is exponential and they need project managers to maintain them effectively. Those product-based companies for project management are what we are going to see today. In this article, we’ll explore the product-based companies for project management that prioritize the expertise of project managers. The companies listed in this article recognize the critical importance of project managers in maintaining workflow and team collaborations effectively.Let us understand more about these product-based companies for project management by first learning about the need for project management and then we’ll learn about the top product-based companies for project management."

    }
  ]
  let all =[...fullstack,...datascience,...cybersecurity,...career];
  
  
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path='/all' element={<All cards={all}/>}/>
        <Route path='/career' element={<Career Ccards={career}/>}/>
        <Route path='/cybersecurity' element={<CyberSecurity CScards={cybersecurity}/>}/>
        <Route path='/datascience' element={<DataScience Datacards={datascience}/>}/>
        <Route path='/fullstack' element={<FullStackDevelopment FScards={fullstack}/>}/>
        <Route path='/*' element={<Navigate to='/all'/>}/>
  </Routes>
  </BrowserRouter>
  
  
  </>
}

export default App