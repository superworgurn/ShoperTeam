// src/Data.ts

export interface NavItem {
  id: string;
  label: string;
}

export interface VideoPlaylist {
  id: number;
  src: string;
  title: string;
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

// ข้อมูลเมนูนำทาง
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'videos', label: 'Videos' },
  { id: 'team', label: 'Our Team' },
  { id: 'showcase', label: 'Showcase' }
];

// ข้อมูลวิดีโอ
export const videoPlaylists: VideoPlaylist[] = [
  { id: 1, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLAmmJmTX1UDA60iCwln4FqAgXAQHybelq", title: "Shoper Team Playlist 1" },
  { id: 2, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9", title: "Shoper Team Playlist 2" },
  { id: 3, src: "https://www.youtube-nocookie.com/embed/videoseries?si=sxDvlTxRvT9rRsAY&list=PLt7bGzU_AlQpcU3RqZnLOHTO_YP1Y6r4a", title: "Shoper Team Playlist 3" },
  { id: 4, src: "https://www.youtube-nocookie.com/embed/videoseries?si=3pStiVZr90z8H5MH&list=PLn9b5l_mIoaxlp_hHFDhimq8IA-eRKMvm", title: "Shoper Team Playlist 4" },
  { id: 5, src: "https://www.youtube-nocookie.com/embed/videoseries?si=q7EtbOGAZnOoNZ35&list=PLn9b5l_mIoayda1Kms9MqR5k9RAHuEvPq", title: "Shoper Team Playlist 5" },
  { id: 6, src: "https://www.youtube-nocookie.com/embed/videoseries?si=TELh_VWQi1WJ1Xf7&list=PLn9b5l_mIoaz--_FiBSOc-Lx770_rSBB4", title: "Shoper Team Playlist 6" },
];

// ข้อมูล Show Case (รูปภาพผลงาน)
export const showcaseItems: ShowcaseItem[] = [
  { id: 1, img: "https://yt3.ggpht.com/hC9DiDdv01lCi-DwWHyK3Y7USE2CaCw2Wp1PxHELWdUudpfaIGIh4ST-H7aCDEKzwze7xlrn7E7oBVs=s870-c-fcrop64=1,46000000b9ffffff-nd-v1-rwa", title: "LinkLift", desc: "เครื่องมือถอดรหัส URL ฟรีที่ช่วยแปลง encoded URL เป็นรูปแบบปกติพร้อมแสดงตัวอย่างหน้าเว็บ ✨ คุณสมบัติ🔓 ถอดรหัส URL ที่ถูกเข้ารหัส👀 แสดงพรีวิวเว็บไซต์ก่อนเข้าชม📱 ออกแบบมาให้ใช้งานง่ายทั้งบนมือถือและเดสก์ท็อป🌐 รองรับสองภาษา (ไทยและอังกฤษ)🔒 ปลอดภัย 100% - ไม่มีการเก็บข้อมูล URL📋 คัดลอก URL หลังถอดรหัสได้ทันที", link:"https://github.com/ShoperGamer/-LinkLift"},
  { id: 2, img: "https://yt3.ggpht.com/eKJHphggazTNduWB1GH3sVAkkylMSuW0tGlYf2f_1KtXvItCGgU1Gr2B78xIjuEYn55VYnyeWk2W0g=s1600-nd-v1-rwa", title: "AuraTime", desc: "AuraTime คือเว็บแอปพลิเคชันนาฬิกาที่ออกแบบมาอย่างสวยงามและครอบคลุมทุกฟังก์ชันการใช้งาน ไม่ว่าจะเป็นการตั้งปลุกในชีวิตประจำวัน, การจับเวลาทำงาน, หรือดูเวลาทั่วโลก โปรเจกต์นี้สร้างขึ้นด้วย HTML, CSS, และ JavaScript ล้วนๆ ทำให้เป็นโปรเจกต์ที่เบา, รวดเร็ว, และสามารถเปิดใช้งานได้บนทุกเว็บเบราว์เซอร์โดยไม่ต้องติดตั้งอะไรเพิ่มเติม", link:"https://github.com/ShoperGamer/AuraTime" },
  { id: 3, img: "https://yt3.ggpht.com/XzPyHnUhKTJ5yD8tVTNZaesv_YzYpSAU6ZmRd-rVsVyvvPvPK7-LDLLWqN_p045Pj4cMaqFavbyl=s1600-rw-nd-v1", title: "Simple Image Converter", desc: "ยินดีต้อนรับสู่ Simple Image Converter! 👋 โปรเจกต์นี้คือเว็บแอปพลิเคชันที่สร้างขึ้นเพื่อแก้ปัญหาความยุ่งยาก, ข้อจำกัด, และการสิ้นเปลืองทรัพยากรและเวลาในการแปลงไฟล์รูปภาพและ PDF 🚀 ด้วย Simple Image Converter คุณสามารถแปลงรูปภาพเป็นนามสกุลต่างๆ หรือรวมรูปภาพและ PDF หลายไฟล์ให้เป็น PDF เดียวได้อย่างง่ายดายและรวดเร็ว", link: "https://github.com/ShoperGamer/Simple-Image-Converter"},
  { id: 4, img: "https://yt3.ggpht.com/4ed5k4p9IIcDhWZiOqSvQqADRHR1ihVp3ZXlJTCNKaywqo8dtyTooLdomE5g0OEOdTy90TMoVlHmwg=s880-c-fcrop64=1,44460000bbb9ffff-rw-nd-v1", title: "SlicePix", desc: "เว็บแอปพลิเคชันโอเพนซอร์สที่ช่วยให้คุณ ✂️ แบ่งภาพถ่ายออกเป็นส่วนย่อย ๆ ได้อย่างง่ายดายและรวดเร็ว ไม่ว่าจะเป็นการสร้างภาพ Grid สำหรับ Instagram หรือเตรียมภาพสำหรับเว็บไซต์", link: "https://github.com/ShoperGamer/SlicePix" },
];

// ข้อมูลสมาชิกทีม
export const bioLinks: BioLink[] = [
  { id: 1, title: "Shoper Team", url: "https://www.youtube.com/@shoperteam2788", descriptionen: "- When we come together, everything is possible.-", descriptionth: "- เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -", imageUrl: "shoperteam.webp" },
  { id: 2, title: "Shoper Gamer", url: "https://shopergamer.vercel.app/", descriptionen: "- Daily learning shapes a brighter tomorrow -", descriptionth: "- การเรียนรู้ทุกวันสร้างอนาคตที่สดใสยิ่งขึ้น -", imageUrl: "shopergamer.webp" },
  { id: 3, title: "Charifkub", url: "https://charifkub.vercel.app/", descriptionen: "- On the day I achieve success, I will not forget those who have supported me -", descriptionth: "- ในวันที่ฉันประสบความสำเร็จ ฉันจะไม่ลืมคนที่ซัพพอร์ตฉัน -", imageUrl: "charifkub.webp" },
  { id: 4, title: "Shoper Cat", url: "https://linkbio.co/shopercat", descriptionen: "- The past is the most valuable lesson. -", descriptionth: "- อดีตคือบทเรียนอันล้ำค่าที่สุด -", imageUrl: "shopercat.webp" },
  { id: 5, title: "Animexo", url: "https://linkbio.co/animexo1234", descriptionen: "- Art and AI A Perfect Collaboration -", descriptionth: "- ศิลปะ และ AI ความร่วมมือที่สมบูรณ์แบบ -", imageUrl: "animexo.webp" },
  { id: 6, title: "Nature", url: "https://bsky.app/profile/naturexo.bsky.social", descriptionen: "- Pure Nature. Pure Moments -", descriptionth: "- สัมผัสธรรมชาติ ผ่านภาพถ่าย -", imageUrl: "nature.webp" },
  { id: 7, title: "WaterMelon", url: "https://www.blockdit.com/watermelonxo", descriptionen: "- Justice is the light that darkness cannot overcome -", descriptionth: "- ความยุติธรรมคือแสงสว่างที่ความมืดไม่สามารถเอาชนะได้ -", imageUrl: "watermelon.webp" },
  { id: 8, title: "Shoper Meme", url: "https://youtube.com/playlist?list=PLwAlfD3gBZEyvyvuB-9ehJWoLLJt_nmkq&si=3VS7rpFB463LwWS_", descriptionen: "Funny and entertaining content", descriptionth: "เนื้อหาสนุกสนานและบันเทิง", imageUrl: "shopermeme.webp" },
  { id: 9, title: "Shoper Mini", url: "https://youtube.com/playlist?list=PLwAlfD3gBZEwc0E89YmCJC9n4JHd3QJgk&si=qMNpGo8z0iZoHWf7", descriptionen: "Short format content", descriptionth: "เนื้อหารูปแบบสั้น", imageUrl: "shopermini.webp" },
  { id: 10, title: "Shoper Copyright 1", url: "https://youtube.com/playlist?list=PLwAlfD3gBZEwqLcY2Qe_o4k-u3KKat5P5&si=CSSaRwWA-AbeC4In", descriptionen: "Copyright information series", descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์", imageUrl: "shopercopyright.webp" },
  { id: 11, title: "Shoper Copyright 2", url: "https://youtube.com/playlist?list=PLwAlfD3gBZEw4yhsKnu8X3q8T0JZXkkOA&si=xbTWo6rfuUzsb4xO", descriptionen: "Copyright information series", descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์", imageUrl: "shopercopyright.webp" },
  { id: 12, title: "Shoper Copyright 3", url: "https://youtube.com/playlist?list=PLwAlfD3gBZExFLNjlzuaFT7p91Jcx3QB5&si=Q0nczxvVV6RQ8lRA", descriptionen: "Copyright information series", descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์", imageUrl: "shopercopyright.webp" }
];