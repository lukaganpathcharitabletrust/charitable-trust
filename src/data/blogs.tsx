export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Grocery Distribution Initiative',
    date: 'May 15, 2025',
    author: 'Suraj Badgujar',
    excerpt: 'Essential grocery kits distributed to destitute widows with no earning family members.',
    content: `
Erandol, Dist. Jalgaon's well-known businessman Hon. Shri Ganesh Subhash Badgujar donated ₹7000 to the trust.

From this donation, grocery items worth ₹6300 were distributed to five destitute widows from Budruk and Khurd in Pimplekothe, whose families had no earning members.

Beneficiary Women:
- Gr. Bh. Sumanbai Ramesh Badgujar
- Gr. Bh. Kewalbai Parashuram Badgujar
- Gr. Bh. Surekhabai Laxman Badgujar
- Gr. Bh. Mangalabai Santosh Badgujar
- Mrs. Kusumbai (Elder) Narayan Badgujar

🎖️ Dignitaries present:
- Mr. Suresh Shivaramsheth Mahale
- Mr. Leeladhar Dattatray Badgujar
- Mr. Nilesh Sharadrao Badgujar
- Mr. Sanjay Shivdas Badgujar
- Mr. Akshay Suresh Sheth Mahale
- Shri Omkar Sonu Badgujar, Senior Citizen
- Shri Kishore Bapurao Badgujar, Gram Panchayat Member
- Shri Ishwar Muralidhar Badgujar, Social Worker
- Mrs. Vaishali Ghanshyam Badgujar, Women's Self-Help Group, CRP
- Mrs. Rekhabai Ishwar Badgujar

All these dignitaries gave their valuable time to make the event more meaningful and memorable.
    `,
    image: '/resources/pimple1.jpeg',
    category: 'Projects',
    tags: ['Grocery Distribution', 'Economical Development', 'Health'],
  },
 
];