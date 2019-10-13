import { VesselModel } from './vessel-model';

export const vessels: VesselModel[] = [
  {
    id: 1,
    name: 'M/Y STEVE IRWIN',
    type: 'Island class patrol vessel / Flagship',
    countryOfOrigin: 'Leith. Scotland', 
    currentName: 'Named in honour of the late Australian conservationist. Steve had wanted to join Sea Shepherd on a whale defence campaign before his untimely death.',
    expedition: '2007, Operation Migaloo (Antarctic Whale Defence',
    interestingFact: 'The Steve Irwin has embarked on more ocean defence campaigns than any other current Sea Shepherd vessel.',
    vesselImg: '/assets/homepage/fleet-Steve-Irwin.jpg',
    maxPeople: 40,
    smallVessel : [{
      zodiac : 2,
      helicopter: 1
    }],
    status: 'retired'
  },
  {
    id: 2,
    name: 'M/Y SAM SIMON',
    type: 'Research/Survey Vessel',
    countryOfOrigin: 'Japan',
    currentName: 'Named after the co-creator and executive producer of "The Simpsons"',
    expedition: '2012, Operation Zero Tolerance (Antarctic Whale Defence)',
    interestingFact: 'Once a part of the Japanese whaling fleet.',
    vesselImg: '/assets/homepage/sam-simon.png',
    maxPeople: 30,
    smallVessel : [{
      zodiac : 2,
    }],
    status: 'active'
  },
  {
    id: 3,
    name: 'M/Y BOB BARKER',
    type: 'Long-Range, Ice-Class Research Vessel',
    countryOfOrigin: 'Norway',
    currentName: 'Named after American television personality and icon Bob Barker, who contributed $5.000.000 to purchase the vessel and a new helicopter.',
    expedition: '2010, Operation Waltzing Matilda (Antartic Whale Defence)',
    interestingFact: 'Confronted Sea Shepherd during its life as a Norwegian Coast Guard vessel.',
    vesselImg: '/assets/homepage/bob-barker.jpeg',
    maxPeople: 36,
    smallVessel : [{
      zodiac : 2,
    }],
    status: 'active'
  },
];
