export type Project = {
  id: string
  title: string
  firm: string
  type: 'Internship' | 'Contract'
  duration: string
  pay: string
  location: string
  borough: string
  posted: string
  deadline: string
  image: string
  tags: string[]
  software: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  applicants: number
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Community Center Redesign',
    firm: 'Hollwich Kushner',
    type: 'Internship',
    duration: '3 months',
    pay: '$2,800/mo',
    location: 'Manhattan',
    borough: 'Manhattan',
    posted: '2 days ago',
    deadline: 'Aug 15, 2025',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format',
    tags: ['Civic', 'Public', 'Renovation'],
    software: ['Revit', 'AutoCAD', 'Rhino'],
    description:
      'Hollwich Kushner is seeking a motivated architecture student to join our team on a community center redesign in East Harlem. The project involves reprogramming an existing 1970s recreation facility into a multi-generational community hub with new program additions and a community garden.',
    responsibilities: [
      'Develop design drawings from schematic through design development',
      'Assist with 3D modeling and visualization for client presentations',
      'Participate in site visits and community consultation sessions',
      'Coordinate with structural and mechanical consultants',
    ],
    requirements: [
      'Currently enrolled in a CUNY architecture program (2nd year or higher)',
      'Proficiency in Revit and AutoCAD required',
      'Strong hand-drawing and communication skills',
      'Available for 3-month term starting September 2025',
    ],
    applicants: 14,
  },
  {
    id: '2',
    title: 'Mixed-Use Development Package',
    firm: 'Marvel Architects',
    type: 'Contract',
    duration: '6 weeks',
    pay: '$4,200 flat',
    location: 'Brooklyn',
    borough: 'Brooklyn',
    posted: '5 days ago',
    deadline: 'Aug 1, 2025',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    tags: ['Residential', 'Commercial', 'New Build'],
    software: ['Revit', 'SketchUp', 'Lumion'],
    description:
      'Marvel Architects is looking for a contract student to help complete a mixed-use permit package for an 8-storey building in Gowanus, Brooklyn. The project is in design development and requires additional drawing production capacity.',
    responsibilities: [
      'Produce floor plans, sections, and elevations for permit submission',
      'Coordinate with project architect on drawing standards',
      'Create 3D renderings for client presentation',
      'Update drawings based on DOB comments',
    ],
    requirements: [
      'Proficiency in Revit is essential',
      'Experience with NYC permit drawing packages preferred',
      'Able to work independently and meet deadlines',
      'Available to start immediately',
    ],
    applicants: 8,
  },
  {
    id: '3',
    title: 'Adaptive Reuse — Industrial Waterfront',
    firm: 'Studio Gang NY',
    type: 'Internship',
    duration: '4 months',
    pay: '$2,500/mo',
    location: 'Queens',
    borough: 'Queens',
    posted: '1 week ago',
    deadline: 'Aug 20, 2025',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format',
    tags: ['Heritage', 'Adaptive Reuse', 'Cultural'],
    software: ['Rhino', 'Grasshopper', 'Adobe CC'],
    description:
      'Studio Gang NY is a design-forward practice known for adaptive reuse work. We are looking for a detail-oriented student with strong visualization skills to join our team on a heritage warehouse conversion along the Long Island City waterfront.',
    responsibilities: [
      'Develop concept and schematic design drawings',
      'Create physical and digital study models',
      'Research NYC Landmarks Preservation Commission requirements',
      'Assist principal on design reviews and client meetings',
    ],
    requirements: [
      'Strong portfolio demonstrating design sensibility',
      'Rhino and Grasshopper proficiency',
      'Interest in heritage and adaptive reuse',
      'Available September–December 2025',
    ],
    applicants: 22,
  },
  {
    id: '4',
    title: 'Affordable Housing Working Drawings',
    firm: 'Dattner Architects',
    type: 'Contract',
    duration: '8 weeks',
    pay: '$3,600 flat',
    location: 'The Bronx',
    borough: 'The Bronx',
    posted: '3 days ago',
    deadline: 'Aug 10, 2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop&auto=format',
    tags: ['Residential', 'Affordable Housing', 'New Build'],
    software: ['AutoCAD', 'Revit', 'Enscape'],
    description:
      'Dattner Architects is a leading public-interest design firm seeking contract support for a 120-unit affordable housing development in Mott Haven, The Bronx. Projects are in working drawing stage and require production support.',
    responsibilities: [
      'Produce working drawings and construction details',
      'Coordinate with MEP and structural consultants on drawing packages',
      'Manage drawing file organization and BIM model',
      'Support HPD submission process',
    ],
    requirements: [
      'AutoCAD and Revit proficiency',
      'Detail drawing experience an asset',
      'Organized and reliable communicator',
      'Familiarity with NYC building code preferred',
    ],
    applicants: 6,
  },
  {
    id: '5',
    title: 'Public Waterfront Master Plan Study',
    firm: 'BIG – Bjarke Ingels NY',
    type: 'Internship',
    duration: '5 months',
    pay: '$3,200/mo',
    location: 'Manhattan',
    borough: 'Manhattan',
    posted: '4 days ago',
    deadline: 'Aug 25, 2025',
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop&auto=format',
    tags: ['Urban Design', 'Public Realm', 'Waterfront'],
    software: ['AutoCAD', 'Rhino', 'Adobe CC'],
    description:
      'BIG NY is working on a conceptual master plan study for the Lower Manhattan waterfront. We are looking for an intern interested in public realm, urban strategy, and climate-resilient design.',
    responsibilities: [
      'Conduct urban analysis and site mapping',
      'Develop design alternatives for public waterfront spaces',
      'Prepare presentation materials for city stakeholders',
      'Assist with public engagement documentation',
    ],
    requirements: [
      'Interest in urban design and public space',
      'Rhino and diagramming skills',
      'Strong graphic communication ability',
      'Available September 2025 – January 2026',
    ],
    applicants: 31,
  },
  {
    id: '6',
    title: 'Ferry Terminal Pavilion — Competition',
    firm: 'Aufgang Architects',
    type: 'Contract',
    duration: '3 weeks',
    pay: '$1,800 flat',
    location: 'Staten Island',
    borough: 'Staten Island',
    posted: '6 days ago',
    deadline: 'Jul 28, 2025',
    image: 'https://images.unsplash.com/photo-1571443128966-bd3fb8c5a2e8?w=800&h=500&fit=crop&auto=format',
    tags: ['Cultural', 'Competition', 'Civic'],
    software: ['Rhino', 'Grasshopper', 'Lumion'],
    description:
      'Aufgang Architects is entering a city-sponsored design competition for a new public pavilion at the St. George Ferry Terminal and needs additional capacity for visualization and drawing production during the intensive 3-week sprint.',
    responsibilities: [
      'Develop 3D models from concept direction',
      'Produce competition renderings and diagrams',
      'Assist with board layout and graphic design',
      'Participate in daily design reviews',
    ],
    requirements: [
      'Strong Rhino and visualization skills',
      'Able to work intensively for 3-week period',
      'Graphic design skills an asset (InDesign / Illustrator)',
      'Available immediately',
    ],
    applicants: 19,
  },
]
