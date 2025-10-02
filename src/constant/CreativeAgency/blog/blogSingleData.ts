export interface BlogSection {
  title: string;
  content: string[];
  gallery?: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogData {
  title: string;
  date: string;
  commentsCount: number;
  category: string;
  introText: string;
  coverImage: string;
  sections: BlogSection[];
  tags: string[];
}

export const blogSingleData: BlogData = {
  title: "Asynk’s impact around all over the world",
  date: "February 12, 2025",
  commentsCount: 3,
  category: "BRANDING",
  introText: `Asynk, an IT & Marketing agency with its roots in innovation, design, and storytelling. With its commitment to excellence, Asynk is making waves not just locally but across the globe.`,
  coverImage: "/assets/imgs/blog/blog-22.webp",
  sections: [
    {
      title: "Blog Overview",
      content: [
        "At Asynk, we believe that creativity knows no borders. What started as a humble IT & Marketing agency has grown into a global presence, delivering innovative solutions to clients from all corners of the world.",
        "In a world saturated with digital content, only a few agencies manage to break through the noise and leave a lasting impression.",
      ],
      gallery: [
        "/assets/imgs/gallery/image-24.webp",
        "/assets/imgs/gallery/image-25.webp",
      ],
    },
    {
      title: "Innovative Approaches to Design",
      content: [
        "One of Asynk's key strengths is its ability to adapt to the cultural and creative demands of various markets. By understanding regional nuances, cultural aesthetics, and market trends",
        "Asynk crafts work that is not only visually stunning but also culturally relevant. This adaptability has earned Asynk a reputation for being a team that can connect with audiences anywhere in the world.",
      ],
      quote: {
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus!",
        author: "Sarah Thompson",
      },
    },
    {
      title: "Creativity Without Borders",
      content: [
        "Asynk’s impact on the world is undeniable. From international collaborations to culturally sensitive work, the team is proving that creativity knows no borders.",
        "As Asynk continues to grow and innovate, its influence will only expand, solidifying its position as a leader in the industry.",
      ],
    },
  ],
  tags: ["Branding", "Design", "Corporate"],
};

export interface Comment {
  name: string;
  date: string;
  avatar: string;
  rating: number;
  message: string;
}

export const comments: Comment[] = [
  {
    name: "Mark Patterson",
    date: "16 Feb, 2025",
    avatar: "/assets/imgs/client/client-4.webp",
    rating: 5,
    message: "As a designer, I appreciate Asynk’s commitment to sustainability and inclusivity. It is great to see an agency making such a positive impact globally!",
  },
  {
    name: "Ahmed Al-Badr",
    date: "15 Feb, 2025",
    avatar: "/assets/imgs/client/client-5.webp",
    rating: 5,
    message: "It’s amazing to see an agency with such a widespread influence. Their ability to adapt to various cultural markets shows true mastery in design. Great article!",
  },
  {
    name: "Jessica Lopez",
    date: "12 Feb, 2025",
    avatar: "/assets/imgs/client/client-6.webp",
    rating: 5,
    message: "Asynk’s approach to global design is truly inspiring! I love how they incorporate cultural nuances in their work while keeping it modern and fresh!",
  },
];
