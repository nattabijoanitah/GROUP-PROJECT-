
// Static mock data for the Ihema Christian Fellowship International church website

// ---- Image imports (fixes broken production image paths) ----
import sacredImg from '../assets/sacred.jpg';
import menMinistryImg from '../assets/men-ministry.jpg';
import youthImg from '../assets/youth.jpg';
import childrenMinistryImg from '../assets/children-ministry.jpg';
import womensMinistryImg from '../assets/womens-ministry.jpg';
import marriageImg from '../assets/marriage.jpg';
import envagelismImg from '../assets/evangelism.jpg';
import sermonsHeroImg from '../assets/sermons-hero.jpg';
import sermonImg from '../assets/sermon.jpg';
import istry2Img from '../assets/ministry-photo-2.jpg';
import worshipMinistryImg from '../assets/worship-ministry.jpg';
import ministryImg from '../assets/ministry.jpg';
import aboutIhemaImg from '../assets/about-ihema.jpg';
import congregationImg from '../assets/congregation.jpg';
import youthMinistryImg from '../assets/youth-ministry.jpg';
import image3Img from '../assets/night-vigil.jpg';
import campingImg from '../assets/camping.jpg';
import prayerMinistryImg from '../assets/prayer-ministry.jpg';

export const ministriesData = [
  {
    id: 'prayer',
    name: 'Prayer Ministry',
    shortDesc:
      'Interceding for the church, our community, and the nations through fervent prayer.',
    longDesc:
      'The Prayer Ministry is the engine room of Ihema Christian Fellowship. We stand in the gap, bringing prayers of thanksgiving, petition, and intercession. We host weekly prayer lines, overnight vigils, and emergency prayer groups to support anyone going through trials.',
    leader: 'Pastor Muguba Julius',
    meetingTime: 'Tuesdays at 6:30 PM & Fridays at 9:00 PM',
    iconName: 'Flame',
    image: sacredImg
  },
  {
    id: 'worship',
    name: 'Worship Ministry',
    shortDesc:
      'Leading the congregation into the presence of God through spirit-filled praise and worship.',
    longDesc:
      'Our Worship Ministry comprises talented vocalists and instrumentalists dedicated to cultivating an atmosphere of deep adoration and celebration. We believe worship is a lifestyle, and our goal is to lead the church in giving honor and glory to God.',
    leader: 'Sister Sharon Muhumuza',
    meetingTime: 'Saturdays at 4:00 PM (Rehearsals)',
    iconName: 'Music',
    image: menMinistryImg
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    shortDesc:
      'Empowering the next generation to live passionately for Christ and impact their spheres.',
    longDesc:
      'The Youth Ministry (Ihema Firebrand Youth) is a vibrant fellowship for teens and young adults (ages 13-30). Through engaging bible studies, social events, camps, and community projects, we help young people build a solid foundation in Christ and navigate modern challenges.',
    leader: 'Pastor Mwesiga Claudia',
    image: youthImg
  },
  {
    id: 'children',
    name: "Children's Ministry",
    shortDesc:
      'Nurturing young minds in the Word of God through creative lessons and fun activities.',
    longDesc:
      "Ihema Kids is a safe, loving, and fun environment where children (ages 2-12) learn biblical truths. Our dedicated teachers use visual lessons, songs, crafts, and games to instill godly character and help kids understand God's love for them.",
    leader: 'Mrs. Miron Kirunda & Pastor Nalongo Kanyagye Peace',
    meetingTime: 'Sundays at 9:00 AM & 11:00 AM',
    iconName: 'Baby',
    image: childrenMinistryImg
  },
  {
    id: 'women',
    name: "Women's Ministry",
    shortDesc:
      'Uniting women in faith, virtue, and purpose to build strong families and communities.',
    longDesc:
      'The Daughters of Destiny (Women\'s Fellowship) provides a supportive environment for women to grow spiritually, mentally, and socially. We host breakfast fellowships, annual conferences, and mentorship sessions for single and married women alike.',
    leader: 'Mrs. Ronah Tumusiime',
    meetingTime: 'First Saturday of every month at 10:00 AM',
    iconName: 'HeartHandshake',
    image: womensMinistryImg
  },
  {
    id: 'men',
    name: "Men's Ministry",
    shortDesc:
      'Equipping men to be spiritual leaders in their homes, workplace, and the church.',
    longDesc:
      'The Men of Honor Fellowship is designed to build strong, accountable, and godly men. Through discussions, prayer breakfasts, and outdoor activities, we address topics like fatherhood, career integrity, and spiritual stewardship.',
    leader: 'Pastor Sanyu Pontius',
    meetingTime: 'Second Saturday of every month at 8:00 AM',
    iconName: 'Shield',
    image: menMinistryImg
  },
  {
    id: 'marriage',
    name: 'Marriage Ministry',
    shortDesc:
      'Strengthening marital unions through biblical counseling, retreats, and fellowships.',
    longDesc:
      'The Marriage and Family Ministry is dedicated to building strong, enduring Christian marriages. We offer pre-marital counseling, couple retreats, and interactive workshops to help spouses communicate better and keep Christ at the center of their home.',
    leader: 'Mummy Eva Kemigisha Nagawa',
    meetingTime: 'Quarterly seminars',
    iconName: 'Heart',
    image: marriageImg
  },
  {
    id: 'evangelism',
    name: 'Evangelism Ministry',
    shortDesc:
      'Reaching out with the message of hope and salvation to the lost in our local community.',
    longDesc:
      'The Evangelism and Missions Ministry coordinates outreach programs, street evangelism, prison visits, and humanitarian aid. Our mission is to practically demonstrate the love of Christ and fulfill the Great Commission.',
    leader: 'Pastor Sanyu Pontius',
    meetingTime: 'Saturdays at 11:00 AM (Outreach)',
    iconName: 'Compass',
    image: envagelismImg
  },
  {
    id: 'discipleship',
    name: 'Discipleship Ministry',
    shortDesc:
      'Guiding new converts and believers into mature, reproducing followers of Christ.',
    longDesc:
      'The Discipleship Ministry provides structured classes, including Foundation Class, Baptism Class, and Worker Training. We focus on grounding believers in essential Christian doctrines and equipping them for ministry service.',
    leader: 'Pastor Innocent Atwebembeire Mugarra',
    meetingTime: 'Sundays at 8:00 AM',
    iconName: 'BookOpen',
    image: sermonsHeroImg
  }
];

export const sermonsData = [
  {
    id: 'sermon-1',
    title: 'The Season of Divine Renovation and Favor',
    preacher: 'Pastor Abraham Ihema',
    date: 'July 19, 2026',
    category: 'Sermons',
    duration: '45 mins',
    scripture: 'Isaiah 43:18-19',
    youtubeId: 'VLtxJU9A3Uc',
    notes: [
      'Forget the former things; do not dwell on the past.',
      'God is doing a new thing! It is springing forth even now.',
      'Divine renovation requires a change of mindset and submission to the Holy Spirit.',
      "Favor is not earned; it is a product of God's covenant and grace over your life."
    ],
    image: sermonImg
  },
  {
    id: 'sermon-2',
    title: 'Walking in Unshakable Faith',
    preacher: 'Mummy Evelyn Ihema',
    date: 'July 12, 2026',
    category: 'Sermons',
    duration: '52 mins',
    scripture: 'Hebrews 11:1-6',
    youtubeId: '4gjFIlulqEM',
    notes: [
      'Faith is the substance of things hoped for, the evidence of things not seen.',
      'Without faith it is impossible to please God.',
      'Unshakable faith is tested in the valleys, not just built on the mountaintops.',
      'Guard your heart from doubt by constantly feeding on the Word of God.'
    ],
    image: istry2Img
  },
  {
    id: 'sermon-3',
    title: 'The Power of Corporate Prayer',
    preacher: 'Pastor David Okoye',
    date: 'July 5, 2026',
    category: 'Devotion',
    duration: '38 mins',
    scripture: 'Acts 12:5-12',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: [
      'When the church prays, chains are broken and gates fly open.',
      'Peter was kept in prison, but constant prayer was offered to God for him.',
      'Corporate prayer multiplies spiritual authority and brings immediate angelic intervention.',
      'Do not neglect the assembly of the saints in prayer.'
    ],
    image: worshipMinistryImg
  },
  {
    id: 'sermon-4',
    title: 'Restoring the Family Altar',
    preacher: 'Pastor Abraham Ihema',
    date: 'June 28, 2026',
    category: 'Worship',
    duration: '48 mins',
    scripture: 'Joshua 24:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: [
      'As for me and my house, we will serve the Lord.',
      'The family is the first church; when the family is strong, the church is strong.',
      'Practical steps to establish daily family devotions.',
      'Overcoming the distractions of the modern digital age.'
    ],
    image: ministryImg
  },
  {
    id: 'sermon-5',
    title: 'Living a Life of True Worship',
    preacher: 'Sister Grace Temiloluwa',
    date: 'June 21, 2026',
    category: 'Worship',
    duration: '35 mins',
    scripture: 'John 4:23-24',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: [
      'God is spirit, and those who worship Him must worship in spirit and truth.',
      'Worship is not a 20-minute segment on Sunday; it is an active daily surrender.',
      'True worship demands a clean heart and a focused mind.',
      'The benefits of cultivating a personal sanctuary of praise.'
    ],
    image: aboutIhemaImg
  }
];

export const eventsData = [
  {
    id: 'event-1',
    title: 'Annual Fire Conference 2026',
    date: 'August 14 - 16, 2026',
    time: '5:00 PM Daily',
    location: 'Main Sanctuary & Online',
    description:
      'A 3-day spiritual awakening with guest ministers, intensive prayers, and worship. Come expecting a refreshing in the Holy Ghost.',
    category: 'Conference',
    banner: congregationImg
  },
  {
    id: 'event-2',
    title: 'Youth Summer Ignite Camp',
    date: 'August 28 - 30, 2026',
    time: '9:00 AM (Friday Kickoff)',
    location: 'Grace Mountain Retreat Center',
    description:
      'An outdoor camping event for teenagers and young adults focusing on fellowship, fun, team-building, and spiritual ignition.',
    category: 'Youth',
    banner: youthMinistryImg
  },
  {
    id: 'event-3',
    title: 'Night of Unlimited Breakthroughs',
    date: 'September 4, 2026',
    time: '10:00 PM - 4:00 AM',
    location: 'Main Sanctuary',
    description:
      'Our monthly night vigil. Join us for apostolic prayers, deliverance sessions, and prophetic decrees as we cross into the new month.',
    category: 'Prayer Night',
    banner: image3Img
  },
  {
    id: 'event-4',
    title: 'Couples Dinner & Fellowship',
    date: 'September 19, 2026',
    time: '6:00 PM',
    location: 'Grand Royal Banquet Hall',
    description:
      'An elegant evening for married couples to connect, share experiences, and receive wisdom on building an unbreakable home. Registration required.',
    category: 'Marriage',
    banner: marriageImg
  }
];

export const testimoniesData = [
  {
    id: 'test-1',
    name: 'Senior Pastor Edson Twesigomwe',
    location: 'Mukono, Kampala',
    text: `For five years, I endured a serious heart condition that significantly affected my life. Throughout this period, I sought medical attention from several reputable and recommended hospitals across Uganda, hoping to find effective treatment. I was told that the severity of my heart condition was beyond what doctors in Uganda, Kenya, and even South Africa could treat.

The last doctor I consulted was at Mulago Hospital. After examining me, the doctor prescribed medication that cost approximately UGX 500,000 per week. I was also advised to save about UGX 100 million so that I could travel to India for the heart surgery I needed.

Through my wife’s encouragement and advice, I was eventually able to attend Ihema Christian Felloship International Church, and that decision became a turning point in my life. It was there that I encountered the Word of God that brings healing. God touched my life and healed my heart. I was healed without undergoing the surgery and without relying on the medication prescribed by the doctors. God Himself became my healer.

Today, I stand as a living testimony of God's healing power. What seemed impossible from a medical perspective, God made possible through His grace and mercy.

I give all the glory, honor, and praise to God for healing me and giving me a new testimony.`,
    date: 'July 20, 2026'
  },
  {
    id: 'test-2',
    name: 'Mr. Mubangizi Benon',
    location: 'Kampala, Uganda',
    text: `For 20 years, I lived without having children. In my desperation, I sought help from different traditional healers and witch doctors, hoping they would help me have children, but none could. Eventually, I became discouraged, gave up, and turned to alcohol and drunkenness. I also searched for different women, hoping one of them would be able to bear me a child, but none did.

Later, I was told about a powerful traditional healer in Mukono District, Uganda, who was believed to be able to give people children. While I was still in the process of accessing the traditional healer, I came to know about Ihema Church, where Mummy prayed for me. Through her prayers, I received my healing, and my life was transformed.

From that moment, my life changed. God blessed me with both sons and daughters, and my children became a testimony of His faithfulness and power. I encourage everyone not to put their trust in traditional healers, but to trust in God and believe in His power, even when the situation seems impossible.`,
    date: 'July 15, 2026'
  },
  {
    id: 'test-3',
    name: 'The Emmanuel  Family',
    location: 'jinja, Uganda',
    text: 'Our marriage was on the brink of divorce due to constant misunderstandings. We joined the Ihema Marriage seminars and received counseling from the Pastors. God restored our love, and our home is now filled with peace and laughter.',
    date: 'June 29, 2026'
  },
  {
    id: 'test-4',
    name: 'Sister Mary  jenipher',
    location: 'kamocha ,kampala',
    text: 'I had been looking for admission into graduate school for two years. After the prayer team joined me in prayers, I received admission with full scholarship into a top Ivy League university. Praise be to God!',
    date: 'June 18, 2026'
  }
];

export const galleryData = [
  {
    id: 'gal-3',
    category: 'Services',
    title: 'Sacred Moments',
    url: sacredImg
  },
  {
    id: 'gal-4',
    category: 'Services',
    title: 'Sermon Session',
    url: sermonsHeroImg
  },
  {
    id: 'gal-5',
    category: 'Community',
    title: 'Evangelism Outreach Group',
    url: envagelismImg
  },
  {
    id: 'gal-6',
    category: 'Community',
    title: 'Congregation Gathering',
    url: congregationImg
  },
  {
    id: 'gal-7',
    category: 'Community',
    title: 'Camping Outreach',
    url: campingImg
  },
  {
    id: 'gal-9',
    category: 'Community',
    title: "Men's Ministry",
    url: menMinistryImg
  },
  {
    id: 'gal-10',
    category: 'Community',
    title: "Women's Ministry",
    url: womensMinistryImg
  },
  {
    id: 'gal-11',
    category: 'Community',
    title: 'Youth Ministry',
    url: youthMinistryImg
  },
  {
    id: 'gal-12',
    category: 'Community',
    title: "Children's Ministry",
    url: childrenMinistryImg
  },
  {
    id: 'gal-13',
    category: 'Services',
    title: 'Worship Team',
    url: worshipMinistryImg
  },
  {
    id: 'gal-14',
    category: 'Services',
    title: 'Prayer Session',
    url: prayerMinistryImg
  },
  {
    id: 'gal-15',
    category: 'Community',
    title: 'Marriage Ministry',
    url: marriageImg
  }
];

