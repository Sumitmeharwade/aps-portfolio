import React from 'react';
import BusinessCase from './BusinessCase';
const businessCases = [
  {
    title: 'Product Search',
    useCase: 'To make the seach functionality faster for user which could include searching in categories and brands.',
    challenges: 'Large number of products make the search functionality slow.',
    marketBenefits: 'Enhanced user experience.',
    algorithm: 'Trie Data Structure',
    description: 'A Trie is a tree-like data structure used to store a dynamic set of strings where keys are usually strings. It is useful for search and filter functionalities where prefix matching is needed.',
    designTechniques: 'Prefix Tree, Efficient String Matching',
    performanceAnalysis: {
      timeComplexity: 'O(L) for insertion, deletion, and lookup operations, where L is the length of the key.',
      spaceComplexity: 'O(ALPHABET_SIZE * L) where ALPHABET_SIZE is the number of possible characters and L is the length of the key.'
    },
    codeLink: '#'
  },
  {
    title: 'Optimizing Delivery ',
    useCase: 'To get the most cost-effective way to assign delivery drivers.',
    challenges: 'Minimizing travel distance and time.',
    marketBenefits: 'Reduced delivery costs and faster delivery.',
    algorithm: 'Assignment Problem',
    description: 'The Assignment Problem is solved using dynamic programming which can be used here to optimally assign drivers to delivery routes.',
    designTechniques: 'Dynamic Programming, Hungarian Algorithm',
    performanceAnalysis: {
      timeComplexity: 'O(N^3)',
      spaceComplexity: 'O(N^2)'
    },
    codeLink: '#'
  },
  {
    title: 'Reducing waste in production process',
    useCase: 'I know this will sound funny, but with huge stakeholders in E-commerce, someone somewhere may be required to cut raw materials(maybe a rod😂) to minimize waste.',
    challenges: 'Reducing waste.',
    marketBenefits: 'reduce costs .',
    algorithm: 'Rod Cutting Problem',
    description: 'This algorithm finds the best way to cut materials to minimize waste and cost.',
    designTechniques: 'Dynamic Programming, Optimization',
    performanceAnalysis: {
      timeComplexity: 'O(N^2)',
      spaceComplexity: 'O(N)'
    },
    codeLink: '#'
  },
  {
    title: 'Product Sorting',
    useCase: 'Sorting products based on various criteria such as popularity, price, and ratings.',
    challenges: 'Fast sorting for large dataset.',
    marketBenefits: 'Enhanced user experience with faster product sorting.',
    algorithm: 'Merge sort or Quick sort',
    description: 'Merge sort and quick sort are both divide-and-conquer algorithms. Merge sort splits the array into two halves, recursively sorts each half, and then merges the sorted halves. Quick sort selects a pivot, partitions the array into subarrays based on the pivot, and recursively sorts the subarrays.',
    designTechniques: 'Divide and Conquer',
    performanceAnalysis: {
      timeComplexity: 'O(nlogn) for merge sort and quick sort in the average case, O(n^2) for quick sort in the worst case.',
      spaceComplexity: 'O(n) for merge sort and O(logn) for quick sort.'
    },
    codeLink: '#'
  },
  {
    title: 'Products data Obtimization',
    useCase: 'We can efficiently manage products data using AVL for fast retrieval.',
    challenges: 'Maintaining balance in the tree.',
    marketBenefits: 'Improved search speed .',
    algorithm: 'AVL Trees',
    description: 'Self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.',
    designTechniques: 'Rotations, Height Balancing',
    performanceAnalysis: {
      timeComplexity: 'O(log n) for insert, delete, and search operations.',
      spaceComplexity: 'O(n) for storing the tree.'
    },
    codeLink: '#'
  },
  {
    title: 'Customer Priority Queue',
    useCase: 'Customer service using priorities .',
    challenges: 'Maintaining the heap property during insertions and deletions.',
    marketBenefits: 'Easy access and service can be provided to the highest priority customer.',
    algorithm: 'Heap (intuition and design)',
    description: 'A complete binary tree where each node is greater than or equal to its children (max-heap) or less than or equal to its children (min-heap).',
    designTechniques: 'Heapify, Priority Queue Management',
    performanceAnalysis: {
      timeComplexity: 'O(log n) for insert and delete operations.',
      spaceComplexity: 'O(n) for storing the heap.'
    },
    codeLink: '#'
  },
  {
    title: 'Customer Order Management',
    useCase: 'Efficiently manage customer orders in a sequence.',
    challenges: 'Handling dynamic additions and deletions.',
    marketBenefits: 'Efficient order processing.',
    algorithm: 'Single Linked List',
    description: 'A single linked list is a linear data structure where each element points to the next, allowing for efficient insertion and deletion of elements.',
    designTechniques: 'Node Linking, Sequential Access',
    performanceAnalysis: {
      timeComplexity: 'O(1) for insertion and deletion at the head, O(n) for searching and accessing elements.',
      spaceComplexity: 'O(n) for storing n elements.'
    },
    codeLink: '#'
  },

  {
    title: 'Customer Analysis',
    useCase: 'Analyze and segment customers based on geographic locations.',
    challenges: 'Efficiently managing and querying multi-dimensional data.',
    marketBenefits: 'Improved marketing strategies based on geographic data.',
    algorithm: 'KD Tree',
    description: 'A space-partitioning data structure for organizing points in a k-dimensional space.',
    designTechniques: 'Tree Construction, Nearest Neighbor Search',
    performanceAnalysis: {
      timeComplexity: 'O(log n) for nearest neighbor search.',
      spaceComplexity: 'O(n) for storing the tree.'
    },
    codeLink: '#'
  },
  {
    title: 'Autocomplete',
    useCase: 'better user experience for product search with autocomplete suggestions.',
    challenges: 'Hard to manage large data of product names.',
    marketBenefits: 'Improved user experience with search and autocomplete.',
    algorithm: 'Trie and Radix Tree',
    description: 'Efficiently store and retrieve keys in a dataset of strings, useful for prefix-based searches.',
    designTechniques: 'Prefix Matching, Efficient Data Retrieval',
    performanceAnalysis: {
      timeComplexity: 'O(L) for insertion and search, where L is the length of the key.',
      spaceComplexity: 'O(ALPHABET_SIZE * L) for storing the tree.'
    },
    codeLink: '#'
  },
  {
    title: 'Efficient Shipping and Delivery',
    useCase: 'Optimizing shipping routes and delivery times.',
    challenges: 'Balancing cost and speed of delivery.',
    marketBenefits: 'Reduced shipping costs and faster delivery times for customers.',
    algorithm: 'A* Search',
    description: 'A* search algorithm determines the most efficient routes for shipping and delivery by considering various factors such as distance, cost, and time.',
    designTechniques: 'Graph Theory, Heuristic Search, Priority Queue',
    performanceAnalysis: {
      timeComplexity: 'O(E + V log V) where E is the number of edges and V is the number of vertices in the graph.',
      spaceComplexity: 'O(V) for storing route data and the priority queue.'
    },
    codeLink: '#'
  },

  {
    title: 'Personalized Product Recommendations',
    useCase: 'Providing personalized product recommendations to users based on their browsing history and purchase behavior.',
    challenges: 'Analyzing large amounts of user data and generating accurate recommendations.',
    marketBenefits: 'Increased customer engagement and sales through relevant product suggestions.',
    algorithm: 'Collaborative Filtering',
    description: 'Collaborative Filtering algorithms, such as user-based or item-based approaches, are well-suited for recommending products based on similarities between users or between products themselves.',
    designTechniques: 'User-Based and Item-Based Approaches',
    performanceAnalysis: {
      timeComplexity: 'O(U * P) where U is the number of users and P is the number of products.',
      spaceComplexity: 'O(U * P) for storing user-product interactions.'
    },
    codeLink: '#'
  },
  {
    title: 'Product Image and Video Compression',
    useCase: 'Reducing the size of product images and videos without compromising quality for faster loading times.',
    challenges: 'Balancing compression rate with visual quality.',
    marketBenefits: 'Faster page load times and improved user experience.',
    algorithm: 'Huffman Coding',
    description: 'Huffman coding assigns shorter codes to frequently occurring patterns in image and video data, reducing file size without significantly affecting quality.',
    designTechniques: 'Greedy Approach, Variable-Length Encoding',
    performanceAnalysis: {
      timeComplexity: 'O(nlogn) for building the Huffman tree, where n is the number of symbols.',
      spaceComplexity: 'O(n) for storing the Huffman tree and encoded data.'
    },
    codeLink: '#'
  }
  
];
const BusinessCasesList = () => (
  <div className="business-cases-list">
    
    {businessCases.map((businessCase, index) => (
      <BusinessCase
        key={index}
        title={businessCase.title}
        useCase={businessCase.useCase}
        challenges={businessCase.challenges}
        marketBenefits={businessCase.marketBenefits}
        algorithm={businessCase.algorithm}
        description={businessCase.description}
        designTechniques={businessCase.designTechniques}
        performanceAnalysis={businessCase.performanceAnalysis}
        codeLink={businessCase.codeLink}
      />
    ))}
  </div>
);

export default BusinessCasesList;
