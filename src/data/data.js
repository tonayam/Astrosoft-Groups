// IMAGES
import sub1 from '../assets/sub-1.jpg';
import sub2 from '../assets/sub-2.jpg';
import reviewer1 from '../assets/reviewer-1.jpg';

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
