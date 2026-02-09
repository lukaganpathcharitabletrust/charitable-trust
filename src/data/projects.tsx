export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  shortDescription: string;
  description: string;
  image: string;
  progress: number;
  raised: string;
  impact: string;
  highlights?: string[];
}


export const projects: Project[] = [
  {
    id: 1,
    title: 'Grocery Distribution Initiative',
    category: 'Economic Development',
    location: 'Pimpalkotha, Maharashtra',
    shortDescription:
      'Essential grocery kits distributed to destitute widows with no earning family members.',
    description: `
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
    highlights: [
      '5 destitute widows supported',
      '₹6,300 worth groceries distributed',
      'Community leaders participated',
    ],
    image:
      'https://images.pexels.com/photos/2962875/pexels-photo-2962875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    progress: 100,
    raised: '₹ 6,300',
    impact: '5 families',
  },
];