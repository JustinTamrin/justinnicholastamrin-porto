import type { ButtonColorVariant } from '$lib/components/colors';
import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';

export const githubLink = 'https://github.com/ikhsan3adi/';
export const linkedInLink = 'https://www.linkedin.com/in/ikhsan-satriadi/';
export const whatsappLink = 'https://wa.me/62895338593923';
export const emailLink = 'mailto:justintamrin888@gmail.com';

export const socials = [
  {
    social: 'Github',
    name: '@ikhsan3adi',
    link: 'https://github.com/JustinTamrin',
    colorVariant: { key: 'github' } as ButtonColorVariant,
    icon: Github
  },
  {
    social: 'LinkedIn',
    name: 'Ikhsan Satriadi',
    link: 'https://www.linkedin.com/in/justin-nicholas-tamrin-562b5b297/',
    colorVariant: { key: 'linkedIn' } as ButtonColorVariant,
    icon: LinkedIn
  },
  {
    social: 'Instagram',
    name: '@justnich_t',
    link: 'https://www.instagram.com/justnich_t/',
    colorVariant: { key: 'instagram' } as ButtonColorVariant,
    icon: Instagram
  }
  // {
  //   social: 'Showwcase',
  //   name: '@ikhsan3adi',
  //   link: 'https://www.showwcase.com/ikhsan3adi',
  //   colorVariant: { key: 'telegram' } as ButtonColorVariant,
  //   icon: Showwcase
  // },
  // {
  //   social: 'Medium',
  //   name: 'Ikhsan Satriadi',
  //   link: 'https://medium.com/@ikhsan3adi',
  //   colorVariant: { key: 'medium' } as ButtonColorVariant,
  //   icon: Medium
  // }
];
