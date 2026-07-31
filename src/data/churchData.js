// Static mock data for the Ihema Christian Fellowship International church website

// ---- Image imports (fixes broken production image paths) ----
import sacredImg from '../assets/sacred.png';
import menMinistryImg from '../assets/men ministry.png';
import youthImg from '../assets/youth.png';
import childrenMinistryImg from '../assets/children ministry.png';
import womensMinistryImg from '../assets/womens ministry.png';
import marriageImg from '../assets/marriage .png';
import envagelismImg from '../assets/envagelism.jpg';
import sermonsHeroImg from '../assets/sermons_hero.png';
import sermonImg from '../assets/sermon.png';
import istry2Img from '../assets/istry 2.jpg';
import worshipMinistryImg from '../assets/worship ministry.png';
import ministryImg from '../assets/ministry.png';
import aboutIhemaImg from '../assets/about ihema.jpg';
import congregationImg from '../assets/congregation.jpg';
import youthMinistryImg from '../assets/youth ministry.png';
import image3Img from '../assets/image (3).png';
import campingImg from '../assets/camping .png';
import prayerMinistryImg from '../assets/prayer ministry.jpg';

export const ministriesData = [
  {
    id: 'prayer',
    name: 'Prayer Ministry',
    shortDesc: 'Interceding for the church, our community, and the nations through fervent prayer.',
    longDesc: 'The Prayer Ministry is the engine room of Ihema Christian Fellowship. We stand in the gap, bringing prayers of thanksgiving, petition, and intercession. We host weekly prayer lines, overnight vigils, and emergency prayer groups to support anyone going through trials.',
    leader: 'Pastor David Okoye',
    meetingTime: 'Tuesdays at 6:30 PM & Fridays at 9:00 PM',
    iconName: 'Flame',
    image: sacredImg // Fallback to gathering image
  },
  {
    id: 'worship',
    name: 'Worship Ministry',
    shortDesc: 'Leading the congregation into the presence of God through spirit-filled praise and worship.',
    longDesc: 'Our Worship Ministry comprises talented vocalists and instrumentalists dedicated to cultivating an atmosphere of deep adoration and celebration. We believe worship is a lifestyle, and our goal is to lead the church in giving honor and glory to God.',
    leader: 'Sister Grace Temiloluwa',
    meetingTime: 'Saturdays at 4:00 PM (Rehearsals)',
    iconName: 'Music',
    image: menMinistryImg
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    shortDesc: 'Empowering the next generation to live passionately for Christ and impact their spheres.',
    longDesc: 'The Youth Ministry (Ihema Firebrand Youth) is a vibrant fellowship for teens and young adults (ages 13-30). Through engaging bible studies, social events, camps, and community projects, we help young people build a solid foundation in Christ and navigate modern challenges.',
    leader: 'Brother Caleb Johnson',
    meetingTime: 'Saturdays at 6:00 PM',
    iconName: 'Sparkles',
    image: youthImg
  },
  {
    id: 'children',
    name: 'Children\'s Ministry',
    shortDesc: 'Nurturing young minds in the Word of God through creative lessons and fun activities.',
    longDesc: 'Ihema Kids is a safe, loving, and fun environment where children (ages 2-12) learn biblical truths. Our dedicated teachers use visual lessons, songs, crafts, and games to instill godly character and help kids understand God\'s love for them.',
    leader: 'Sister Sarah Mensah',
    meetingTime: 'Sundays at 9:00 AM & 11:00 AM',
    iconName: 'Baby',
    image: childrenMinistryImg
  },
  {
    id: 'women',
    name: 'Women\'s Ministry',
    shortDesc: 'Uniting women in faith, virtue, and purpose to build strong families and communities.',
    longDesc: 'The Daughters of Destiny (Women\'s Fellowship) provides a supportive environment for women to grow spiritually, mentally, and socially. We host breakfast fellowships, annual conferences, and mentorship sessionsfor single and married women alike.',
    leader: 'Pastor Mrs. Evelyn Ihema',
    meetingTime: 'First Saturday of every month at 10:00 AM',
    iconName: 'HeartHandshake',
    image: womensMinistryImg
  },
  {
    id: 'men',
    name: 'Men\'s Ministry',
    shortDesc: 'Equipping men to be spiritual leaders in their homes, workplace, and the church.',
    longDesc: 'The Men of Honor Fellowship is designed to build strong, accountable, and godly men. Through discussions, prayer breakfasts, and outdoor activities, we address topics like fatherhood, career integrity, and spiritual stewardship.',
    leader: 'Elder Joseph Mwangi',
    meetingTime: 'Second Saturday of every month at 8:00 AM',
    iconName: 'Shield',
    image: menMinistryImg
  },
  {
    id: 'marriage',
    name: 'Marriage Ministry',
    shortDesc: 'Strengthening marital unions through biblical counseling, retreats, and fellowships.',
    longDesc: 'The Marriage and Family Ministry is dedicated to building strong, enduring Christian marriages. We offer pre-marital counseling, couple retreats, and interactive workshops to help spouses communicate better andkeep Christ at the center of their home.',
    leader: 'Deacon & Deaconess Alabi',
    meetingTime: 'Quarterly seminars',
    iconName: 'Heart',
    image: marriageImg
  },
  {
    id: 'evangelism',
    name: 'Evangelism Ministry',
    shortDesc: 'Reaching out with the message of hope and salvation to the lost in our local community.',
    longDesc: 'The Evangelism and Missions Ministry coordinates outreach programs, street evangelism, prison visits, and humanitarian aid. Our mission is to practically demonstrate the love of Christ and fulfill the Great Commission.',
    leader: 'Pastor Emmanuel Cole',
    meetingTime: 'Saturdays at 11:00 AM (Outreach)',
    iconName: 'Compass',
    image: envagelismImg
  },
  {
    id: 'discipleship',
    name: 'Discipleship Ministry',
    shortDesc: 'Guiding new converts and believers into mature, reproducing followers of Christ.',
    longDesc: 'The Discipleship Ministry provides structured classes, including Foundation Class, Baptism Class,and Worker Training. We focus on grounding believers in essential Christian doctrines and equipping them for ministry service.',
    leader: 'Elder Timothy Chen',
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
    youtubeId: 'VLtxJU9A3Uc', // Demo video
    notes: [
      'Forget the former things; do not dwell on the past.',
      'God is doing a new thing! It is springing forth even now.',
      'Divine renovation requires a change of mindset and submission to the Holy Spirit.',
      'Favor is not earned; it is a product of God\'s covenant and grace over your life.'
    ],
    image: sermonImg
  },
  {
    id: 'sermon-2',
    title: 'Walking in Unshakable Faith',
    preacher: 'Pastor Mrs. Evelyn Ihema',
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
    description: 'A 3-day spiritual awakening with guest ministers, intensive prayers, and worship. Come expecting a refreshing in the Holy Ghost.',
    category: 'Conference',
    banner: congregationImg
  },
  {
    id: 'event-2',
    title: 'Youth Summer Ignite Camp',
    date: 'August 28 - 30, 2026',
    time: '9:00 AM (Friday Kickoff)',
    location: 'Grace Mountain Retreat Center',
    description: 'An outdoor camping event for teenagers and young adults focusing on fellowship, fun, team-building, and spiritual ignition.',
    category: 'Youth',
    banner: youthMinistryImg
  },
  {
    id: 'event-3',
    title: 'Night of Unlimited Breakthroughs',
    date: 'September 4, 2026',
    time: '10:00 PM - 4:00 AM',
    location: 'Main Sanctuary',
    description: 'Our monthly night vigil. Join us for apostolic prayers, deliverance sessions, and prophetic decrees as we cross into the new month.',
    category: 'Prayer Night',
    banner: image3Img
  },
  {
    id: 'event-4',
    title: 'Couples Dinner & Fellowship',
    date: 'September 19, 2026',
    time: '6:00 PM',
    location: 'Grand Royal Banquet Hall',
    description: 'An elegant evening for married couples to connect, share experiences, and receive wisdom on building an unbreakable home. Registration required.',
    category: 'Marriage',
    banner: marriageImg
  }
];

export const testimoniesData = [
  {
    id: 'test-1',
    name: 'Sister Deborah Adams',
    location: 'Lagos, Nigeria',
    text: 'For 3 years, I suffered from severe spinal pains that limited my movement. During the June Night of Breakthroughs, the Pastor laid hands on me. Instantly, I felt warmth go through my spine. Today, I am completely healed and can jump, run, and lift heavy weights!',
    date: 'July 20, 2026'
  },
  {
    id: 'test-2',
    name: 'Brother David Vance',
    location: 'Houston, Texas',
    text: 'I was laid off from my job in April and struggled financially. I kept volunteering in the Church Media team and tithing faithfully. Last week, I received an unsolicited job offer from a multinational firm offering double my previous salary. God is indeed faithful!',
    date: 'July 15, 2026'
  },
  {
    id: 'test-3',
    name: 'The Alao Family',
    location: 'London, UK',
    text: 'Our marriage was on the brink of divorce due to constant misunderstandings. We joined the Ihema Marriage seminars and received counseling from the Pastors. God restored our love, and our home is now filled with peace and laughter.',
    date: 'June 29, 2026'
  },
  {
    id: 'test-4',
    name: 'Sister Mary Lin',
    location: 'Accra, Ghana',
    text: 'I had been looking for admission into graduate school for two years. After the prayer team joined me in prayers, I received admission with full scholarship into a top Ivy League university. Praise be to God!',
    date: 'June 18, 2026'
  }
];

export const galleryData = [
  { id: 'gal-3', category: 'Services', title: 'Sacred Moments', url: sacredImg },
  { id: 'gal-4', category: 'Services', title: 'Sermon Session', url: sermonsHeroImg },
  { id: 'gal-5', category: 'Community', title: 'Evangelism Outreach Group', url: envagelismImg },
  { id: 'gal-6', category: 'Community', title: 'Congregation Gathering', url: congregationImg },
  { id: 'gal-7', category: 'Community', title: 'Camping Outreach', url: campingImg },
  { id: 'gal-9', category: 'Fellowships', title: 'Men\'s Fellowship', url: menMinistryImg },
  { id: 'gal-10', category: 'Fellowships', title: 'Women\'s Fellowship', url: womensMinistryImg },
  { id: 'gal-11', category: 'Fellowships', title: 'Youth Fellowship', url: youthMinistryImg },
  { id: 'gal-12', category: 'Fellowships', title: 'Children\'s Fellowship', url: childrenMinistryImg },
  { id: 'gal-13', category: 'Fellowships', title: 'Worship Team Fellowship', url: worshipMinistryImg },
  { id: 'gal-14', category: 'Fellowships', title: 'Prayer Fellowship', url: prayerMinistryImg },
  { id: 'gal-15', category: 'Fellowships', title: 'Marriage Fellowship', url: marriageImg }
];

export const fellowshipsData = {
  men: {
    title: 'Men of Honor Fellowship',
    motto: 'Iron Sharpeneth Iron (Proverbs 27:17)',
    overview: 'The Men\'s Fellowship exists to forge strong, responsible, and spirit-filled men who act as high priests of their households and leaders in the marketplace.',
    leaderName: 'Elder Joseph Mwangi',
    leaderImage: prayerMinistryImg,
    schedule: 'Every 2nd Saturday of the Month at 8:00 AM in the Fellowship Hall.',
    activities: [
      'Monthly Breakfast Fellowship & Bible Discussions',
      'Fatherhood and Leadership Mentorship Classes',
      'Annual Men\'s Retreat & Sports Outings',
      'Community Help Initiatives & Technical Support for Church'
    ]
  },
  women: {
    title: 'Daughters of Destiny Fellowship',
    motto: 'A Woman who fears the Lord shall be praised (Proverbs 31:30)',
    overview: 'The Women\'s Fellowship gathers ladies of all ages to build virtuous characters, raise godly families, and engage in meaningful sisterly relationships.',
    leaderName: 'Pastor Mrs. Evelyn Ihema',
    leaderImage: prayerMinistryImg,
    schedule: 'Every 1st Saturday of the Month at 10:00 AM in the Main Sanctuary.',
    activities: [
      'Virtuous Woman Breakfast & Networking Sessions',
      'Maternal Care & Marriage Preparation Support',
      'Annual Daughters of Destiny Conference',
      'Benevolence Outreach to Widows and Orphans'
    ]
  },
  youth: {
    title: 'Ihema Firebrand Youth',
    motto: 'Remember your Creator in the days of your youth (Ecclesiastes 12:1)',
    overview: 'The Youth Fellowship gathers young adults and teens to cultivate dynamic spiritual lives, expresstheir talents, and develop leadership capabilities.',
    leaderName: 'Brother Caleb Johnson',
    leaderImage: prayerMinistryImg,
    schedule: 'Every Saturday at 6:00 PM in the Youth Auditorium.',
    activities: [
      'Vibrant Worship, Drama, and Poetry Nights',
      'Topic-based Panels: Career, Relationships, Faith',
      'Vlog/Media workshops and Technical Projects',
      'Summer Camps and Sports Tournaments'
    ]
  },
  children: {
    title: 'Ihema Kids Fellowship',
    motto: 'Train up a child in the way he should go (Proverbs 22:6)',
    overview: 'The Children\'s Fellowship provides structured biblical training, combining interactive storytelling, crafts, and fun to guide children towards Christ.',
    leaderName: 'Sister Sarah Mensah',
    leaderImage: prayerMinistryImg,
    schedule: 'Every Sunday at 9:00 AM & 11:00 AM (during Services).',
    activities: [
      'Puppet Shows and Animated Bible Stories',
      'Kids Choir and Instrument Lessons',
      'Annual Children\'s Day Pageant and Carols',
      'Memory Verse Challenges and Bible Trivia Games'
    ]
  }
};