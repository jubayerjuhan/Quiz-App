export const quizzes = {
  DSA: [
    // DSA questions
    {
      question: "What does DSA stand for?",
      options: [
        "Data Structures and Algorithms",
        "Dynamic Systems Analysis",
        "Digital Signal Analysis",
        "Direct System Approach",
      ],
      answer: "Data Structures and Algorithms",
    },
    {
      question: "Which of the following is a linear data structure?",
      options: ["Array", "Graph", "Tree", "Hash Table"],
      answer: "Array",
    },
    {
      question: "Which algorithm is used for sorting?",
      options: [
        "Binary Search",
        "Depth First Search",
        "Merge Sort",
        "Dijkstra's Algorithm",
      ],
      answer: "Merge Sort",
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
      answer: "O(log n)",
    },
    {
      question: "Which data structure uses FIFO (First In, First Out)?",
      options: ["Stack", "Queue", "Graph", "Tree"],
      answer: "Queue",
    },
    {
      question: "Which of the following is a non-linear data structure?",
      options: ["Array", "Linked List", "Tree", "Stack"],
      answer: "Tree",
    },
    {
      question: "Which sorting algorithm is the fastest in average case?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Merge Sort"],
      answer: "Quick Sort",
    },
    {
      question: "What data structure is used for BFS in graph?",
      options: ["Stack", "Queue", "Heap", "Tree"],
      answer: "Queue",
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out)?",
      options: ["Queue", "Stack", "Heap", "Tree"],
      answer: "Stack",
    },
    {
      question: "Which algorithm is used to find shortest path in graph?",
      options: [
        "Binary Search",
        "Depth First Search",
        "Merge Sort",
        "Dijkstra's Algorithm",
      ],
      answer: "Dijkstra's Algorithm",
    },
  ],
  OOP: [
    // OOP questions
    {
      question: "What does OOP stand for?",
      options: [
        "Object-Oriented Programming",
        "Object-Oriented Process",
        "Object Oriented Procedure",
        "Object Operations Protocol",
      ],
      answer: "Object-Oriented Programming",
    },
    {
      question: "Which feature of OOP is used to derive a class from another class?",
      options: [
        "Encapsulation",
        "Polymorphism",
        "Inheritance",
        "Abstraction",
      ],
      answer: "Inheritance",
    },
    {
      question: "Which of the following is not a principle of OOP?",
      options: ["Encapsulation", "Polymorphism", "Interface", "Abstraction"],
      answer: "Interface",
    },
    {
      question: "Which OOP principle means representing real-world objects?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: "Abstraction",
    },
    {
      question: "Which OOP concept refers to the ability of different classes to respond to the same message?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: "Polymorphism",
    },
    {
      question: "Which feature of OOP restricts access to the inner workings of a class?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: "Encapsulation",
    },
    {
      question: "Which keyword is used to create an object in Java?",
      options: ["new", "class", "object", "create"],
      answer: "new",
    },
    {
      question: "Which of the following is not a valid access specifier in OOP?",
      options: ["private", "public", "protected", "internal"],
      answer: "internal",
    },
    {
      question: "Which OOP concept is demonstrated by a subclass overriding a method of its superclass?",
      options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
      answer: "Polymorphism",
    },
    {
      question: "What is the purpose of a constructor in a class?",
      options: [
        "To initialize an object",
        "To destroy an object",
        "To create a method",
        "To call a method",
      ],
      answer: "To initialize an object",
    },
  ],
  DBMS: [
    // DBMS questions
    {
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Database Manipulation System",
        "Data Broadcasting Management System",
      ],
      answer: "Database Management System",
    },
    {
      question: "Which of the following is a type of database model?",
      options: ["Hierarchical", "Linear", "Circular", "Triangular"],
      answer: "Hierarchical",
    },
    {
      question: "Which SQL statement is used to retrieve data from a database?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      answer: "SELECT",
    },
    {
      question: "What is the purpose of the SQL WHERE clause?",
      options: [
        "To specify the columns to be displayed",
        "To specify the tables to join",
        "To filter records",
        "To group records",
      ],
      answer: "To filter records",
    },
    {
      question: "Which of the following is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      answer: "MongoDB",
    },
    {
      question: "What is a primary key in a database?",
      options: [
        "A key used to identify a record uniquely",
        "A key used to link two tables",
        "A key used for sorting data",
        "A key used to encrypt data",
      ],
      answer: "A key used to identify a record uniquely",
    },
    {
      question: "Which SQL function is used to count the number of rows in a table?",
      options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
      answer: "COUNT()",
    },
    {
      question: "Which of the following is an example of a DDL statement in SQL?",
      options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
      answer: "CREATE",
    },
    {
      question: "What does ACID stand for in the context of databases?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Integrity, Data",
        "Application, Connection, Information, Database",
        "Association, Communication, Interaction, Dependability",
      ],
      answer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "Which of the following is used to enforce a rule in a database table?",
      options: ["Trigger", "Procedure", "Constraint", "Function"],
      answer: "Constraint",
    },
  ],
  "Circuit Analysis and Design": [
    // Circuit Analysis and Design questions
    {
      question: "What does Ohm's Law state?",
      options: [
        "V = IR",
        "P = VI",
        "I = VR",
        "V = PI",
      ],
      answer: "V = IR",
    },
    {
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      answer: "Ohm",
    },
    {
      question: "Which component stores electrical energy in an electric field?",
      options: ["Resistor", "Capacitor", "Inductor", "Transformer"],
      answer: "Capacitor",
    },
    {
      question: "What is the purpose of a diode in a circuit?",
      options: [
        "To store energy",
        "To allow current to flow in one direction",
        "To amplify signals",
        "To resist current",
      ],
      answer: "To allow current to flow in one direction",
    },
    {
      question: "What does a transistor do in a circuit?",
      options: [
        "Stores energy",
        "Regulates voltage",
        "Amplifies or switches electronic signals",
        "Measures current",
      ],
      answer: "Amplifies or switches electronic signals",
    },
    {
      question: "Which law relates to the sum of voltages around a closed loop?",
      options: ["Ohm's Law", "Kirchhoff's Voltage Law", "Faraday's Law", "Ampere's Law"],
      answer: "Kirchhoff's Voltage Law",
    },
    {
      question: "What is the function of an inductor?",
      options: [
        "To store electrical energy in a magnetic field",
        "To resist current",
        "To convert AC to DC",
        "To amplify signals",
      ],
      answer: "To store electrical energy in a magnetic field",
    },
    {
      question: "What is the SI unit of inductance?",
      options: ["Farad", "Henry", "Ohm", "Joule"],
      answer: "Henry",
    },
    {
      question: "What type of circuit allows current to flow through multiple paths?",
      options: ["Series", "Parallel", "Complex", "Open"],
      answer: "Parallel",
    },
    {
      question: "What is the purpose of a transformer?",
      options: [
        "To step up or step down AC voltage",
        "To store electrical energy",
        "To convert AC to DC",
        "To measure current",
      ],
      answer: "To step up or step down AC voltage",
    },
  ],
  "Power Systems": [
    // Power Systems questions
    {
      question: "What is the primary function of a power system?",
      options: [
        "To store energy",
        "To generate, transmit, and distribute electricity",
        "To convert DC to AC",
        "To measure electrical current",
      ],
      answer: "To generate, transmit, and distribute electricity",
    },
    {
      question: "Which component is used to increase or decrease voltage levels in power systems?",
      options: ["Resistor", "Inductor", "Transformer", "Capacitor"],
      answer: "Transformer",
    },
    {
      question: "What is the unit of electrical power?",
      options: ["Volt", "Ohm", "Watt", "Ampere"],
      answer: "Watt",
    },
    {
      question: "What does the term 'grid' refer to in power systems?",
      options: [
        "A device that converts AC to DC",
        "A network of transmission lines and substations",
        "A storage device for electrical energy",
        "A type of electrical load",
      ],
      answer: "A network of transmission lines and substations",
    },
    {
      question: "What is a substation?",
      options: [
        "A place where electricity is stored",
        "A place where voltage is stepped up or down",
        "A place where electricity is generated",
        "A place where electricity is consumed",
      ],
      answer: "A place where voltage is stepped up or down",
    },
    {
      question: "What is the purpose of a circuit breaker?",
      options: [
        "To store energy",
        "To measure current",
        "To protect an electrical circuit from damage",
        "To convert AC to DC",
      ],
      answer: "To protect an electrical circuit from damage",
    },
    {
      question: "What is the typical frequency of AC power in most countries?",
      options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
      answer: "50 Hz",
    },
    {
      question: "What is the function of a relay in power systems?",
      options: [
        "To amplify signals",
        "To switch electrical circuits on and off",
        "To store electrical energy",
        "To convert AC to DC",
      ],
      answer: "To switch electrical circuits on and off",
    },
    {
      question: "What is the unit of electrical energy?",
      options: ["Joule", "Watt", "Kilowatt-hour", "Ampere"],
      answer: "Kilowatt-hour",
    },
    {
      question: "Which type of power plant uses water to generate electricity?",
      options: ["Thermal", "Hydroelectric", "Nuclear", "Solar"],
      answer: "Hydroelectric",
    },
  ],
  "Digital Signal Processing": [
    // Digital Signal Processing questions
    {
      question: "What does DSP stand for?",
      options: [
        "Digital Signal Processing",
        "Data Signal Processing",
        "Dynamic Signal Processing",
        "Discrete Signal Processing",
      ],
      answer: "Digital Signal Processing",
    },
    {
      question: "What is the primary goal of DSP?",
      options: [
        "To store digital signals",
        "To convert analog signals to digital",
        "To analyze and modify digital signals",
        "To transmit digital signals",
      ],
      answer: "To analyze and modify digital signals",
    },
    {
      question: "Which transform is used to convert a signal from time domain to frequency domain?",
      options: ["Fourier Transform", "Laplace Transform", "Z-Transform", "Hilbert Transform"],
      answer: "Fourier Transform",
    },
    {
      question: "What is sampling in DSP?",
      options: [
        "The process of filtering a signal",
        "The process of converting analog signal to digital",
        "The process of amplifying a signal",
        "The process of modulating a signal",
      ],
      answer: "The process of converting analog signal to digital",
    },
    {
      question: "What is the Nyquist rate?",
      options: [
        "The minimum sampling rate",
        "The maximum sampling rate",
        "The rate at which signal is filtered",
        "The rate at which signal is modulated",
      ],
      answer: "The minimum sampling rate",
    },
    {
      question: "Which filter type is used to allow signals within a specific frequency range to pass?",
      options: ["Low-pass filter", "High-pass filter", "Band-pass filter", "Notch filter"],
      answer: "Band-pass filter",
    },
    {
      question: "What is quantization in DSP?",
      options: [
        "The process of filtering a signal",
        "The process of converting a signal to frequency domain",
        "The process of mapping a continuous signal to discrete values",
        "The process of modulating a signal",
      ],
      answer: "The process of mapping a continuous signal to discrete values",
    },
    {
      question: "Which of the following is a commonly used DSP algorithm?",
      options: ["FFT", "DFT", "LMS", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of an analog-to-digital converter (ADC)?",
      options: [
        "To store digital signals",
        "To convert analog signals to digital",
        "To analyze digital signals",
        "To filter digital signals",
      ],
      answer: "To convert analog signals to digital",
    },
    {
      question: "What is the purpose of a digital-to-analog converter (DAC)?",
      options: [
        "To store digital signals",
        "To convert digital signals to analog",
        "To analyze digital signals",
        "To filter digital signals",
      ],
      answer: "To convert digital signals to analog",
    },
  ],
  "Renewable Energy": [
    // Renewable Energy questions
    {
      question: "Which of the following is not a renewable energy source?",
      options: ["Solar", "Wind", "Coal", "Hydro"],
      answer: "Coal",
    },
    {
      question: "What is the primary source of solar energy?",
      options: ["The Sun", "The Moon", "The Earth", "The Wind"],
      answer: "The Sun",
    },
    {
      question: "What device is used to convert solar energy into electrical energy?",
      options: ["Solar panel", "Wind turbine", "Hydro turbine", "Geothermal plant"],
      answer: "Solar panel",
    },
    {
      question: "What is the main advantage of wind energy?",
      options: [
        "It is non-renewable",
        "It produces greenhouse gases",
        "It is renewable and produces no emissions",
        "It is expensive",
      ],
      answer: "It is renewable and produces no emissions",
    },
    {
      question: "Which country is the largest producer of wind energy?",
      options: ["USA", "China", "Germany", "India"],
      answer: "China",
    },
    {
      question: "What is geothermal energy?",
      options: [
        "Energy from the sun",
        "Energy from the wind",
        "Energy from the heat of the Earth's interior",
        "Energy from water",
      ],
      answer: "Energy from the heat of the Earth's interior",
    },
    {
      question: "Which renewable energy source uses water to generate electricity?",
      options: ["Solar", "Wind", "Geothermal", "Hydro"],
      answer: "Hydro",
    },
    {
      question: "What is biomass energy?",
      options: [
        "Energy from organic materials",
        "Energy from water",
        "Energy from wind",
        "Energy from sunlight",
      ],
      answer: "Energy from organic materials",
    },
    {
      question: "Which of the following is a disadvantage of solar energy?",
      options: [
        "It produces greenhouse gases",
        "It is non-renewable",
        "It is weather dependent",
        "It is not available in most parts of the world",
      ],
      answer: "It is weather dependent",
    },
    {
      question: "What is the main component of a wind turbine?",
      options: ["Blades", "Rotor", "Nacelle", "All of the above"],
      answer: "All of the above",
    },
  ],
  "Marketing Strategies": [
    // Marketing Strategies questions
    {
      question: "What is marketing?",
      options: [
        "Selling products",
        "Promoting products",
        "Creating products",
        "Understanding customer needs",
      ],
      answer: "Understanding customer needs",
    },
    {
      question: "What is the marketing mix?",
      options: [
        "Product, price, place, promotion",
        "Product, price, profit, promotion",
        "Product, place, profit, promotion",
        "Product, place, price, profit",
      ],
      answer: "Product, price, place, promotion",
    },
    {
      question: "What is a target market?",
      options: [
        "The market with the most customers",
        "The market with the most competitors",
        "The market a company wants to reach",
        "The market a company is already in",
      ],
      answer: "The market a company wants to reach",
    },
    {
      question: "What is a unique selling proposition (USP)?",
      options: [
        "A company's most popular product",
        "A company's main competitor",
        "A company's unique advantage",
        "A company's biggest customer",
      ],
      answer: "A company's unique advantage",
    },
    {
      question: "What is a marketing plan?",
      options: [
        "A plan to increase sales",
        "A plan to reduce costs",
        "A plan to reach marketing goals",
        "A plan to hire more employees",
      ],
      answer: "A plan to reach marketing goals",
    },
    {
      question: "What is a brand?",
      options: [
        "A company's logo",
        "A company's product",
        "A company's reputation",
        "A company's marketing strategy",
      ],
      answer: "A company's reputation",
    },
    {
      question: "What is a market segment?",
      options: [
        "A group of customers with similar needs",
        "A group of customers with different needs",
        "A group of customers with no needs",
        "A group of customers with the most needs",
      ],
      answer: "A group of customers with similar needs",
    },
    {
      question: "What is a marketing channel?",
      options: [
        "A way to reach customers",
        "A way to reach competitors",
        "A way to reach employees",
        "A way to reach suppliers",
      ],
      answer: "A way to reach customers",
    },
    {
      question: "What is a marketing strategy?",
      options: [
        "A plan to increase sales",
        "A plan to reduce costs",
        "A plan to reach marketing goals",
        "A plan to hire more employees",
      ],
      answer: "A plan to reach marketing goals",
    },
    {
      question: "What is a marketing objective?",
      options: [
        "A goal to increase sales",
        "A goal to reduce costs",
        "A goal to reach marketing goals",
        "A goal to hire more employees",
      ],
      answer: "A goal to reach marketing goals",
    },
  ],
};