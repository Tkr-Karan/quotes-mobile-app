export const ITEMS_DATA = [
  {
    id: "1",
    name: "The journey of a thousand miles begins with a single step",
    author: "Lao Tzu",
    category: "Inspiration",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b", // Beach
    gradient: ["#FF6B6B", "#FF8E53"],
  },
  {
    id: "2",
    name: "In the middle of difficulty lies opportunity",
    author: "Albert Einstein",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f", // Mountain
    gradient: ["#4ECDC4", "#44A08D"],
  },
  {
    id: "3",
    name: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
    category: "Career",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945", // Luxury
    gradient: ["#FF9A8B", "#FF6A88"],
  },
  {
    id: "4",
    name: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
    category: "Life",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", // Heritage
    gradient: ["#A8FF78", "#78FFD6"],
  },
  {
    id: "5",
    name: "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739", // Beach Villa
    gradient: ["#667eea", "#764ba2"],
  },
  {
    id: "6",
    name: "It does not matter how slowly you go as long as you do not stop",
    author: "Confucius",
    category: "Perseverance",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974", // Hill Station
    gradient: ["#F093FB", "#F5576C"],
  },
  {
    id: "7",
    name: "The purpose of our lives is to be happy",
    author: "Dalai Lama",
    category: "Happiness",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", // New image
    gradient: ["#4FACFE", "#00F2FE"],
  },
  {
    id: "8",
    name: "Life is what happens to you while you're busy making other plans",
    author: "John Lennon",
    category: "Life",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", // Nature
    gradient: ["#43E97B", "#38F9D7"],
  },
  {
    id: "9",
    name: "The only impossible journey is the one you never begin",
    author: "Tony Robbins",
    category: "Action",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Forest
    gradient: ["#FA709A", "#FEE140"],
  },
  {
    id: "10",
    name: "Don't count the days, make the days count",
    author: "Muhammad Ali",
    category: "Time",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", // Landscape
    gradient: ["#A3B1F6", "#6964DE"],
  },
];

export const CATEGORIES_FILTER = ITEMS_DATA.map((item) => item.category);

export const ALL_CATEGORIES = ["All", ...CATEGORIES_FILTER];

console.log(ALL_CATEGORIES, "CATEGORIES");
