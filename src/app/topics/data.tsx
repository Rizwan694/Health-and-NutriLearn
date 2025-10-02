import React from 'react';
import { AdultRequirementsChart } from '@/components/charts/adult-requirements-chart';
import { ChildRequirementsChart } from '@/components/charts/child-requirements-chart';

type Topic = {
  title: string;
  content: React.ReactNode;
};

export const TOPICS: Record<string, Topic> = {
  'food-introduction': {
    title: 'What is Food?',
    content: (
      <>
        <h3 className="font-headline">Definition and Introduction</h3>
        <p>Food is any substance consumed to provide nutritional support for an organism. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.</p>
        <p>Historically, humans secured food through two methods: hunting and gathering and agriculture. Today, the majority of the food energy required by the ever-increasing population of the world is supplied by the food industry.</p>
      </>
    ),
  },
  'food-importance': {
    title: 'Importance of Food',
    content: (
      <>
        <h3 className="font-headline">Why is Food Essential?</h3>
        <p>Food is fundamental for life. It provides the energy for everything we do, from moving and thinking to repairing tissues and fighting off infections. Here are the key reasons why food is so important:</p>
        <ul>
          <li><strong>Energy:</strong> Food is the primary source of energy for the body's functions.</li>
          <li><strong>Growth and Repair:</strong> Nutrients like protein are the building blocks for new cells and tissues, helping us grow and repair our bodies.</li>
          <li><strong>Maintaining Body Functions:</strong> Vitamins and minerals are crucial for a vast range of activities, including metabolism, nerve function, and producing hormones.</li>
          <li><strong>Protection from Diseases:</strong> A healthy diet boosts the immune system and can reduce the risk of chronic diseases like heart disease, diabetes, and cancer.</li>
        </ul>
      </>
    ),
  },
  'food-constituents': {
    title: 'Constituents of Food',
    content: (
      <>
        <p>Food is composed of several key constituents that are vital for our health.</p>
        <h4 className="font-headline">Carbohydrates</h4>
        <p>The main source of energy for the body. They are found in foods like bread, rice, potatoes, and fruits.</p>
        <h4 className="font-headline">Fats</h4>
        <p>An essential part of the diet, providing energy and helping to absorb certain vitamins. Found in oils, butter, nuts, and fatty fish.</p>
        <h4 className="font-headline">Proteins</h4>
        <p>The building blocks of the body, essential for growth, repair, and immune function. Found in meat, fish, eggs, dairy, beans, and lentils.</p>
        <h4 className="font-headline">Vitamins</h4>
        <p>Organic compounds needed in small quantities for various metabolic processes. Examples include Vitamin A, C, D, E, K, and B-complex vitamins.</p>
        <h4 className="font-headline">Minerals</h4>
        <p>Inorganic elements required for health, such as calcium for bones, iron for blood, and potassium for nerve function.</p>
        <h4 className="font-headline">Fiber</h4>
        <p>A type of carbohydrate that the body can't digest. It's important for digestive health. Found in whole grains, fruits, and vegetables.</p>
        <h4 className="font-headline">Water</h4>
        <p>Essential for almost every function in the body, including regulating temperature and transporting nutrients.</p>
      </>
    ),
  },
  'food-classification': {
    title: 'Classification of Food',
    content: (
      <>
        <p>Foods can be classified based on their primary function in the body.</p>
        <h4 className="font-headline">Energy-Giving Foods</h4>
        <p>These foods are rich in carbohydrates and fats. They provide the fuel your body needs for daily activities. Examples include cereals, sugars, oils, and root vegetables.</p>
        <h4 className="font-headline">Body-Building Foods</h4>
        <p>Rich in proteins, these foods help in building and repairing body tissues. They are crucial for growth, especially in children and adolescents. Examples include milk, meat, fish, eggs, and pulses.</p>
        <h4 className="font-headline">Protective Foods</h4>
        <p>These foods are rich in vitamins, minerals, and fiber. They protect the body from diseases and help maintain a strong immune system. Examples include fruits, vegetables, and leafy greens.</p>
      </>
    ),
  },
  'balanced-diet': {
    title: 'Balanced Diet',
    content: (
      <>
        <h3 className="font-headline">Definition and Introduction</h3>
        <p>A balanced diet is a diet that contains differing kinds of foods in certain quantities and proportions so that the requirement for calories, proteins, minerals, vitamins and alternative nutrients is adequate and a small provision is reserved for additional nutrients to endure the short length of leanness.</p>
        <p>In addition, a balanced diet ought to offer bioactive phytochemicals like dietary fiber, antioxidants and nutraceuticals that have positive health benefits. A balanced diet should offer around 60-70% of total calories from carbohydrates, 10-12% from proteins and 20-25% of total calories from fat.</p>
      </>
    ),
  },
  'food-energy': {
    title: 'Food Energy Measurements',
    content: (
      <>
        <h3 className="font-headline">Kilocalorie or Calorie</h3>
        <p>The energy that food provides is measured in kilocalories, often simply called "calories." A kilocalorie (kcal) is the amount of heat required to raise the temperature of 1 kilogram of water by 1 degree Celsius.</p>
        <p>Nutrient labels on food packaging list the calorie content to help consumers manage their energy intake. The number of calories a person needs depends on their age, gender, size, and activity level.</p>
      </>
    ),
  },
  'daily-requirements-adults': {
    title: 'Daily Average Requirements for Adults',
    content: (
      <>
        <p>The daily calorie requirement for adults varies significantly based on gender, age, and physical activity level. The chart below provides an estimated average requirement.</p>
        <AdultRequirementsChart />
      </>
    ),
  },
  'daily-requirements-children': {
    title: 'Daily Average Requirements for Children',
    content: (
      <>
        <p>Children's nutritional needs change as they grow. Adequate energy is crucial for their development. The chart shows average daily calorie requirements for children and adolescents.</p>
        <ChildRequirementsChart />
      </>
    ),
  },
  'food-spoilage': {
    title: 'Spoilage of Food',
    content: (
      <>
        <h3 className="font-headline">How Food is Spoiled</h3>
        <p>Food spoilage is the process where a food product becomes unsuitable for ingestion by the consumer. The cause of such a process is due to many outside factors as a side-effect of the type of product it is, as well as how the product is packaged and stored.</p>
        <p>Spoilage can be caused by:</p>
        <ul>
          <li><strong>Microorganisms:</strong> Bacteria, yeasts, and molds grow on food and break it down.</li>
          <li><strong>Enzymes:</strong> Natural enzymes in food can cause it to ripen and then decay (e.g., a banana turning brown).</li>
          <li><strong>Oxidation:</strong> Exposure to air can cause fats to become rancid and vitamins to be lost.</li>
          <li><strong>Physical Damage:</strong> Bruising or breaking the skin of fruits and vegetables allows microorganisms to enter.</li>
        </ul>
      </>
    ),
  },
  'food-preservation': {
    title: 'Preservation of Food',
    content: (
      <>
        <h3 className="font-headline">How Food Can Be Preserved</h3>
        <p>Food preservation involves treating and handling food to stop or slow down spoilage, loss of quality, edibility, or nutritional value. Common methods include:</p>
        <ul>
          <li><strong>Refrigeration and Freezing:</strong> Low temperatures slow the growth of microorganisms.</li>
          <li><strong>Canning:</strong> Heating food to kill microorganisms and then sealing it in an airtight container.</li>
          <li><strong>Drying (Dehydration):</strong> Removing water from food inhibits the growth of bacteria, yeasts, and molds.</li>
          <li><strong>Salting and Pickling:</strong> Using salt or acidic solutions like vinegar to create an environment where microbes cannot thrive.</li>
          <li><strong>Fermentation:</strong> Using beneficial microorganisms to preserve food and create new flavors (e.g., yogurt, kimchi).</li>
        </ul>
      </>
    ),
  },
  'health-introduction': {
    title: 'Human Health',
    content: (
      <>
        <h3 className="font-headline">Definition and Introduction</h3>
        <p>Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity. This holistic view emphasizes that health is a positive concept, focusing on social and personal resources, as well as physical capacities.</p>
        <p>Good health is maintained and improved not only through the advancement and application of health science, but also through the efforts and intelligent lifestyle choices of the individual and society.</p>
      </>
    ),
  },
  'diseases-introduction': {
    title: 'Understanding Diseases',
    content: (
      <>
        <h3 className="font-headline">Definition and Introduction</h3>
        <p>A disease is a particular abnormal condition that negatively affects the structure or function of all or part of an organism, and that is not immediately due to any external injury. Diseases are often known to be medical conditions that are associated with specific signs and symptoms.</p>
        <p>Understanding the causes and classifications of diseases is the first step toward prevention and treatment.</p>
      </>
    ),
  },
  'disease-classification': {
    title: 'Classification of Diseases',
    content: (
      <>
        <p>Diseases can be broadly classified into several categories. Here we focus on two major types related to nutrition and transmission.</p>
        <h4 className="font-headline">Deficiency Diseases</h4>
        <p>These diseases are caused by the lack of certain essential nutrients in the diet. They are not communicable.</p>
        <ul>
          <li><strong>Night Blindness/Poor Vision:</strong> Caused by a deficiency of Vitamin A.</li>
          <li><strong>Extreme Weakness (Beriberi):</strong> Caused by a deficiency of Vitamin B1.</li>
          <li><strong>Retarded Growth:</strong> Can be caused by a general lack of protein and calories.</li>
          <li><strong>Anemia:</strong> Often caused by an iron deficiency.</li>
          <li><strong>Weak Bones (Rickets/Osteoporosis):</strong> Caused by a deficiency of Vitamin D and Calcium.</li>
          <li><strong>Swollen Gums/Scurvy:</strong> Caused by a deficiency of Vitamin C.</li>
        </ul>
        <h4 className="font-headline">Communicable Diseases</h4>
        <p>These diseases are caused by pathogens (like bacteria, viruses, fungi, or parasites) and can be spread from one person or organism to another.</p>
        <ul>
          <li><strong>Typhoid:</strong> A bacterial infection spread through contaminated food and water.</li>
          <li><strong>Tuberculosis:</strong> A bacterial infection of the lungs, spread through the air.</li>
          <li><strong>Common Cold & Influenza:</strong> Viral infections spread through respiratory droplets.</li>
        </ul>
      </>
    ),
  },
  'disease-prevention': {
    title: 'How to Save from Diseases',
    content: (
      <>
        <h3 className="font-headline">Prevention is Better Than Cure</h3>
        <p>This famous saying holds true for health. Preventing diseases is far more effective and less costly than treating them. Key prevention strategies include:</p>
        <ul>
          <li><strong>Balanced Diet:</strong> Consuming whole, balanced foods provides the nutrients your body needs to fight infection and function correctly.</li>
          <li><strong>Regular Exercise:</strong> Physical activity strengthens the immune system, improves cardiovascular health, and maintains a healthy weight.</li>
          <li><strong>Personal Hygiene:</strong> Simple acts like regular hand washing can prevent the spread of many communicable diseases.</li>
          <li><strong>Healthy Habits:</strong> Getting enough sleep, managing stress, and avoiding harmful substances are crucial for overall health.</li>
          <li><strong>Sanitation:</strong> Clean living conditions, safe water, and proper waste disposal in the community prevent the spread of pathogens.</li>
        </ul>
      </>
    ),
  },
  'health-hazards': {
    title: 'Health Hazards',
    content: (
      <>
        <p>Certain lifestyle choices pose significant risks to health. It's important to be aware of these hazards.</p>
        <h4 className="font-headline">Smoking</h4>
        <p>Smoking tobacco is a leading cause of preventable death worldwide. It is a major risk factor for heart attacks, strokes, chronic obstructive pulmonary disease (COPD), and numerous cancers, including lung, throat, and bladder cancer. There is no safe level of tobacco use.</p>
        <h4 className="font-headline">Drug Addiction</h4>
        <p>Drug addiction, or substance use disorder, is a disease that affects a person's brain and behavior and leads to an inability to control the use of a legal or illegal drug or medicine. Substances like alcohol, opioids, and stimulants can cause serious health problems, damage relationships, and lead to overdose and death.</p>
        <h4 className="font-headline">Alcohol Abuse</h4>
        <p>Excessive alcohol consumption can lead to chronic diseases such as liver cirrhosis, pancreatitis, various cancers, and high blood pressure. It also impairs judgment and coordination, increasing the risk of accidents and injuries.</p>
        <h4 className="font-headline">Poor Diet and Obesity</h4>
        <p>A diet high in processed foods, sugar, and unhealthy fats contributes to obesity, type 2 diabetes, heart disease, and certain types of cancer. Obesity is a major health hazard that puts a strain on virtually every system in the body.</p>
        <h4 className="font-headline">Lack of Physical Activity</h4>
        <p>A sedentary lifestyle is a significant risk factor for many chronic diseases. Regular physical activity helps maintain a healthy weight, strengthens the cardiovascular system, improves mental health, and reduces the risk of conditions like heart disease, diabetes, and osteoporosis.</p>
      </>
    ),
  },
};
