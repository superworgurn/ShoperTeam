// src/data.ts
export interface NavItem {
  id: string;
  label: string;
}

export interface VideoPlaylist {
  id: number;
  src: string;
  title: string;
  thumb?: string;
}

export interface ShowcaseItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
}

export interface BioLink {
  id: number;
  title: string;
  url: string;
  descriptionen?: string;
  descriptionth?: string;
  icon?: string;
  imageUrl?: string;
}

export interface CatShowcase {
  id: number;
  title: string;
  image: string;
}

export interface CatVideo {
  id: number;
  videoId: string;
}

// ข้อมูลเมนูนำทาง
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'videos', label: 'Videos' },
  { id: 'team', label: 'Our Team' },
  { id: 'showcase', label: 'Showcase' }
];

// ข้อมูลวิดีโอหลัก (Shoper Team)
export const videoPlaylists: VideoPlaylist[] = [
  { id: 1, src: "https://www.youtube-nocookie.com/embed/videoseries?si=wcC8vp2v_LbZlEoU&list=PLAmmJmTX1UDDS3TKjNwTZMRhE5hbMUOs0", title: "Animexo", thumb: "-OISqWP-BVs" },
  { id: 2, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9", title: "ST Showcase", thumb: "q09jB6yb96M" },
  { id: 3, src: "https://www.youtube-nocookie.com/embed/videoseries?si=sxDvlTxRvT9rRsAY&list=PLt7bGzU_AlQpcU3RqZnLOHTO_YP1Y6r4a", title: "Charifkub", thumb: "aKuPl6T-WN8" },
  { id: 4, src: "https://www.youtube-nocookie.com/embed/videoseries?si=V6Ndm2iNPTH8kzni&list=PLn9b5l_mIoawfNEkUd4yxBcsZuVndiRVo", title: "Shoper Cat", thumb: "mMt17PSufY8" },
];

// ข้อมูล Show Case (รูปภาพผลงาน)
export const showcaseItems: ShowcaseItem[] = [
  { id: 1, img: "linklift.webp", title: "LinkLift", desc: "เครื่องมือถอดรหัส URL ฟรีที่ช่วยแปลง encoded URL เป็นรูปแบบปกติพร้อมแสดงตัวอย่างหน้าเว็บ", link: "https://github.com/ShoperGamer/-LinkLift" },
  { id: 2, img: "auratime.webp", title: "AuraTime", desc: "AuraTime คือเว็บแอปพลิเคชันนาฬิกาที่ออกแบบมาอย่างสวยงามและครอบคลุมทุกฟังก์ชันการใช้งาน", link: "https://github.com/ShoperGamer/AuraTime" },
  { id: 3, img: "imageconvert.webp", title: "Simple Image Converter", desc: "เว็บแอปพลิเคชันที่สร้างขึ้นเพื่อแก้ปัญหาความยุ่งยากในการแปลงไฟล์รูปภาพและ PDF", link: "https://github.com/ShoperGamer/Simple-Image-Converter" },
  { id: 4, img: "slicepix.webp", title: "SlicePix", desc: "เว็บแอปพลิเคชันโอเพนซอร์สที่ช่วยให้คุณแบ่งภาพถ่ายออกเป็นส่วนย่อยๆ ได้อย่างง่ายดาย", link: "https://github.com/ShoperGamer/SlicePix" },
];

// ข้อมูลสมาชิกทีม
export const bioLinks: BioLink[] = [
  { id: 1, title: "Shoper Team", url: "https://www.youtube.com/@shoperteam2788", descriptionen: "- When we come together, everything is possible.-", descriptionth: "- เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -", imageUrl: "shoperteam.webp" },
  { id: 2, title: "Shoper Gamer", url: "https://shopergamer.vercel.app/", descriptionen: "- Daily learning shapes a brighter tomorrow -", descriptionth: "- การเรียนรู้ทุกวันสร้างอนาคตที่สดใสยิ่งขึ้น -", imageUrl: "shopergamer.webp" },
  { id: 3, title: "Charifkub", url: "https://charifkub.vercel.app/", descriptionen: "- On the day I achieve success, I will not forget those who have supported me -", descriptionth: "- ในวันที่ฉันประสบความสำเร็จ ฉันจะไม่ลืมคนที่ซัพพอร์ตฉัน -", imageUrl: "charifkub.webp" },
  { id: 4, title: "Shoper Cat", url: "/shopercat", descriptionen: "- The past is the most valuable lesson. -", descriptionth: "- อดีตคือบทเรียนอันล้ำค่าที่สุด -", imageUrl: "shopercat.webp" },
  { id: 5, title: "Animexo", url: "https://linkbio.co/animexo1234", descriptionen: "- Art and AI A Perfect Collaboration -", descriptionth: "- ศิลปะ และ AI ความร่วมมือที่สมบูรณ์แบบ -", imageUrl: "animexo.webp" },
  { id: 6, title: "Nature", url: "/nature", descriptionen: "- Pure Nature. Pure Moments -", descriptionth: "- สัมผัสธรรมชาติ ผ่านภาพถ่าย -", imageUrl: "nature.webp" },
  { id: 7, title: "WaterMelon", url: "/watermelon", descriptionen: "- Justice is the light that darkness cannot overcome -", descriptionth: "- ความยุติธรรมคือแสงสว่างที่ความมืดไม่สามารถเอาชนะได้ -", imageUrl: "watermelon.webp" },
  { id: 8, title: "Shoper Meme", url: "/shopermeme", descriptionen: "Funny and entertaining content", descriptionth: "เนื้อหาสนุกสนานและบันเทิง", imageUrl: "shopermeme.webp" },
  { id: 9, title: "Shoper Mini", url: "/shopermini", descriptionen: "Short format content", descriptionth: "เนื้อหารูปแบบสั้น", imageUrl: "shopermini.webp" },
  { id: 10, title: "Shoper Copyright", url: "/shopercopyright", descriptionen: "Copyright information series", descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์", imageUrl: "shopercopyright.webp" },
];

// ✅ ข้อมูลอัลบั้มรูปสัตว์เลี้ยง (ปรับ Format เป็นบรรทัดเดียว)
export const catShowcase: CatShowcase[] = [
  { id: 1, title: 'น้องแพนด้า', image: 'panda.webp'},
  { id: 2, title: 'น้องออปโป้',image: 'oppo.webp' },
  { id: 4, title: 'น้องไทเกอร์', image: 'tiger.webp'},
  { id: 5, title: 'น้องสไปร์ท',  image: 'sprite.webp'},
  { id: 6, title: 'น้องยาว', image: 'น้องยาว.webp'},
  { id: 7, title: 'น้องเยิ้ม', image: 'น้องเยิ้ม.webp'},
  { id: 8, title: 'น้องสมศรี', image: 'น้องสมศรี.webp'},
  { id: 9, title: 'น้องหมอนข้าง',  image: 'หมอนข้าง.webp'},
];

// ✅ ข้อมูลคลิป YouTube เดี่ยว (ปรับ Format เป็นบรรทัดเดียว)
export const catVideos: CatVideo[] = [
  { id: 1, videoId: '9CqJPo_ZPug'},
  { id: 2, videoId: 'fHYGAG2o18A'},
  { id: 3, videoId: 'hPpheJt-0sI'},
  { id: 4, videoId: 'w0JL30I9pT8'},
];

// ✅ ข้อมูลเพลย์ลิสต์ YouTube (แปลง URL สำหรับ embed แล้ว)
export const catPlaylists: VideoPlaylist[] = [
  { id: 1, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLn9b5l_mIoaxlp_hHFDhimq8IA-eRKMvm", title: "Shoper Cat Playlist 1" },
  { id: 2, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLn9b5l_mIoayda1Kms9MqR5k9RAHuEvPq", title: "Shoper Cat Playlist 2" },
  { id: 3, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLn9b5l_mIoayxziSSGPUK2AoK6uosgzMy", title: "Shoper Cat Playlist 3" },
  { id: 4, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLn9b5l_mIoaz--_FiBSOc-Lx770_rSBB4", title: "Shoper Cat Playlist 4" },
];