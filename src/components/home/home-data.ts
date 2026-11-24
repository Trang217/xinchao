export interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
}

export interface FoodCategory {
  name: string;
  image: string;
  count: string;
}

export interface Review {
  name: string;
  location: string;
  quote: string;
}

export const featuredDishes: Dish[] = [
  {
    name: "Phở Bò",
    description: "Slow-simmered beef broth, rice noodles, fresh herbs.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=960&q=85",
    tag: "Guest favorite",
  },
  {
    name: "Bún Bò Huế",
    description: "A bold, fragrant Hue-style broth with a gentle warmth.",
    price: "$17",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=960&q=85",
    tag: "A little spice",
  },
  {
    name: "Bánh Mì",
    description: "Crisp baguette, lemongrass chicken, pickled vegetables.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=960&q=85",
    tag: "Made to order",
  },
  {
    name: "Gỏi Cuốn",
    description: "Fresh rice paper rolls, garden herbs, peanut dipping sauce.",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=960&q=85",
    tag: "Fresh & light",
  },
];

export const foodCategories: FoodCategory[] = [
  {
    name: "Noodle soups",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85",
    count: "12 comforting bowls",
  },
  {
    name: "Rice & plates",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85",
    count: "Made for sharing",
  },
  {
    name: "Fresh rolls",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85",
    count: "Rolled fresh daily",
  },
  {
    name: "Something sweet",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85",
    count: "A lovely little finish",
  },
];

export const reviews: Review[] = [
  {
    name: "Maya R.",
    location: "A neighborhood regular",
    quote:
      "The kind of pho that makes you slow down and savor every spoonful. The herbs are so fresh, and everyone made us feel right at home.",
  },
  {
    name: "Daniel K.",
    location: "Here for the bánh mì",
    quote:
      "That first crunch of the baguette says it all. Bright, balanced, and honestly one of the best lunches in the neighborhood.",
  },
  {
    name: "Linh P.",
    location: "A taste of home",
    quote:
      "XinChao gets the little things right—the broth, the fresh greens, the warmth. It feels like being welcomed to someone’s table.",
  },
];
