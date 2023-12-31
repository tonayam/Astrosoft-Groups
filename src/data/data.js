// IMAGES
import sub1 from '../assets/sub-1.jpg';
import sub2 from '../assets/sub-2.jpg';
import reviewer1 from '../assets/reviewer-1.jpg';
import teamMember1 from '../assets/team-member-1.jpg';
import teamMember2 from '../assets/team-member-2.jpg';
import teamMember3 from '../assets/team-member-3.jpg';
import homeHeaderSlide1 from '../assets/home-header-slide-bg-1.jpg';
import homeHeaderSlide2 from '../assets/home-header-slide-bg-2.jpg';
import homeHeaderSlide3 from '../assets/home-header-slide-bg-3.jpg';

// ICONS
import { BsFillStarFill } from 'react-icons/bs';

export const subsidiaries = [
  {
    subImg: sub1,
    subName: `Astrosoft`,
    subBranch: `01. Software`,
    subInfo: `We craft premium designs for agencies and global brands around the globe.`,
    subPoints: [
      `Make your business visible online.`,
      `Make your business visible online.`,
      `Make your business visible online.`,
      `Make your business visible online.`,
    ],
  },
  {
    subImg: sub2,
    subName: `AstroPrints`,
    subBranch: `02. Service Industry`,
    subInfo: `We craft premium designs for agencies and global brands around the globe.`,
    subPoints: [
      `Make your business visible online.`,
      `Make your business visible online.`,
    ],
  },
  {
    subImg: sub1,
    subName: `AstroArch and Engineering`,
    subBranch: `03. Engineering`,
    subInfo: `We craft premium designs for agencies and global brands around the globe.`,
    subPoints: [
      `Make your business visible online.`,
      `Make your business visible online.`,
    ],
  },
  {
    subImg: sub2,
    subName: `AstroStudios`,
    subBranch: `03. Photography`,
    subInfo: `We craft premium designs for agencies and global brands around the globe.`,
    subPoints: [
      `Make your business visible online.`,
      `Make your business visible online.`,
    ],
  },
];

export const reviews = [
  {
    stars: [<BsFillStarFill />, <BsFillStarFill />, <BsFillStarFill />],
    comment: `I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.`,
    reviewerName: `Leonard Heiser`,
    reviewerPosition: `ceo`,
    reviewerPhoto: reviewer1,
  },
  {
    stars: [<BsFillStarFill />, <BsFillStarFill />, <BsFillStarFill />],
    comment: `I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.`,
    reviewerName: `Micheal Angelo`,
    reviewerPosition: `ceo`,
    reviewerPhoto: reviewer1,
  },
  {
    stars: [<BsFillStarFill />, <BsFillStarFill />, <BsFillStarFill />],
    comment: `I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.`,
    reviewerName: `Leonardo Davinci`,
    reviewerPosition: `Customer`,
    reviewerPhoto: reviewer1,
  },
];

export const teamMembers = [
  {
    memberImg: reviewer1,
    memberName: `John Doe`,
    memberPosition: `Co-Founder`,
    extraClass: `short`,
  },
  {
    memberImg: teamMember1,
    memberName: `John Doe`,
    memberPosition: `HOD Astrosoft`,
  },
  {
    memberImg: teamMember2,
    memberName: `John Doe`,
    memberPosition: `HOD AstroPrints`,
    extraClass: `short`,
  },
  {
    memberImg: teamMember3,
    memberName: `John Doe`,
    memberPosition: `HOD AstroArch`,
  },
  {
    memberImg: reviewer1,
    memberName: `John Doe`,
    memberPosition: `HOD AstroStudios`,
    extraClass: `short`,
  },
];

export const homeHeaderSlides = [
  {
    slideBg: homeHeaderSlide1,
    subTitle: `creative agency`,
    mainTitle: `Providing Best Digital Solutions & Grow Business.`,
    btnLabel: `Get Solutions`,
    btnLink: `/`,
  },
  {
    slideBg: homeHeaderSlide2,
    subTitle: `Engineering Consultancy`,
    mainTitle: `Providing The Best Engineering Solutions For Your Business.`,
    btnLabel: `Get Solutions`,
    btnLink: `/`,
  },
  {
    slideBg: homeHeaderSlide3,
    subTitle: `World class Printing Press`,
    mainTitle: `Providing Industry standard printing services`,
    btnLabel: `Get Solutions`,
    btnLink: `/`,
  },
];
