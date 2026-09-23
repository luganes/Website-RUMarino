import Link from 'next/link';
import { Mail, Users, Twitter, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import { TiktokIcon } from './ui/TiktokIcon'; 

const sponsors = [
  { name: 'Logo Boeing', logoUrl: '/Boeing-White.webp', hint: 'sponsor logo', websiteUrl: 'https://www.boeing.com/' },
  { name: 'Logo Colegio', logoUrl: '/Colegio-White1.webp', hint: 'sponsor logo', websiteUrl: 'https://www.uprm.edu/portales/en/' },
  { name: 'Logo GM', logoUrl: '/GM-White.webp', hint: 'sponsor logo', websiteUrl: 'https://www.gm.com/', size: 'xlarge' },
  { name: 'Logo LM', logoUrl: '/LM_White.webp', hint: 'sponsor logo', websiteUrl: 'https://www.lockheedmartin.com/en-us/index.html/' },
  { name: 'Logo NAVSEA', logoUrl: '/Navsea_White.webp', hint: 'sponsor logo', websiteUrl: 'https://www.navsea.navy.mil/' },
  { name: 'Logo L3HARRIS', logoUrl: '/L3Harris_White.webp', hint: 'sponsor logo', websiteUrl: 'https://www.l3harris.com/' },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-blue-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/RUMARINO LOGO_WHITE_crop.webp" 
                  alt="RUMarino"
                  width={120}
                  height={120}
                  className="object-contain relative transform group-hover:scale-105 transition-transform duration-300"
                  sizes="120px"
                />
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing autonomous underwater systems for a brighter, bluer future.
            </p>
            
            <div className="pt-2">
              <a 
                href="https://tally.so/r/pbOZ8b" 
                
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00A68C] to-[#00C9A7] hover:from-[#00C9A7] hover:to-[#00A68C] text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <Users className="size-5 relative z-10" />
                <span className="relative z-10 font-medium">Join the team</span>
              </a>
              <p className="text-sm text-gray-400 mt-3 italic">
                Interested in underwater robotics? Apply now!
              </p>
            </div>
            
            <div className="flex space-x-3 pt-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/rumarino", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "https://www.instagram.com/rumarino_hydrus", color: "hover:bg-pink-600" },
                { icon: TiktokIcon, href: "https://www.tiktok.com/@rumarino", color: "hover:bg-black" },
                { icon: Facebook, href: "https://m.facebook.com/UPRMRUMarino/", color: "hover:bg-blue-700" },
                { icon: Twitter, href: "https://x.com/RUMarino_pr", color: "hover:bg-black" },
                { icon: Youtube, href: "https://www.youtube.com/@rumarinohydrus6665", color: "hover:bg-red-600" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <social.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Team', 'Competition', 'Our AUVs', 'Activities', 'Socials', 'Download TDR'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-').replace('our-', '').replace('download-', '#')}`}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4 mr-3 transition-all duration-300"></span>
                    <span>{item}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="size-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a 
                    href="mailto:rumarino.uprm@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    rumarino.uprm@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 pb-2 border-b border-white/10">
              Our Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-blue-500/30 hover:scale-105"
                >
                  <div className="relative flex items-center justify-center h-12 w-full">
                    <Image
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      fill
                      className={`object-contain object-center translate-y-3 ${
                        sponsor.name === 'Logo Colegio'
                          ? 'scale-150'
                          : 'scale-[2]'
                      }`}
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sponsor.name.replace('Logo ', '')}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} RUMarino Robotics Team. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="hidden md:inline-flex items-center">
                Made with <span className="text-white mx-1">♥</span> in Puerto Rico
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;