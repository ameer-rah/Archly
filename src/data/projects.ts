export type Project = {
  id: string
  title: string
  firm: string
  firmLogo?: string
  type: 'Internship' | 'Contract'
  duration: string
  pay: string
  location: string
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
    firm: 'Thornton Architects',
    type: 'Internship',
    duration: '3 months',
    pay: '$2,800/mo',
    location: 'Toronto, ON',
    posted: '2 days ago',
    deadline: 'Aug 15, 2025',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format',
    tags: ['Public', 'Civic', 'Renovation'],
    software: ['Revit', 'AutoCAD', 'Rhino'],
    description:
      'Thornton Architects is seeking a motivated architecture student to join our team on a community center redesign project in the Scarborough district. The project involves reprogramming an existing 1970s recreation facility into a multi-generational community hub with new program additions.',
    responsibilities: [
      'Develop design drawings from schematic through design development',
      'Assist with 3D modeling and visualization for client presentations',
      'Participate in site visits and community consultation sessions',
      'Coordinate with structural and mechanical consultants',
    ],
    requirements: [
      'Currently enrolled in M.Arch or B.Arch program (2nd year or higher)',
      'Proficiency in Revit and AutoCAD required',
      'Strong hand-drawing and communication skills',
      'Available for 3-month term starting September 2025',
    ],
    applicants: 14,
  },
  {
    id: '2',
    title: 'Mixed-Use Development Package',
    firm: 'Park & Associates',
    type: 'Contract',
    duration: '6 weeks',
    pay: '$4,200 flat',
    location: 'Vancouver, BC',
    posted: '5 days ago',
    deadline: 'Aug 1, 2025',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    tags: ['Residential', 'Commercial', 'New Build'],
    software: ['Revit', 'SketchUp', 'Lumion'],
    description:
      'Park & Associates is looking for a contract student to help complete a mixed-use permit package for a 6-storey building in East Vancouver. The project is in design development and requires additional drawing production capacity.',
    responsibilities: [
      'Produce floor plans, sections, and elevations for permit submission',
      'Coordinate with project architect on drawing standards',
      'Create 3D renderings for client presentation',
      'Update drawings based on city comments',
    ],
    requirements: [
      'Proficiency in Revit is essential',
      'Experience with permit drawing packages preferred',
      'Able to work independently and meet deadlines',
      'Available to start immediately',
    ],
    applicants: 8,
  },
  {
    id: '3',
    title: 'Adaptive Reuse — Warehouse District',
    firm: 'Reyes Studio',
    type: 'Internship',
    duration: '4 months',
    pay: '$2,500/mo',
    location: 'Toronto, ON',
    posted: '1 week ago',
    deadline: 'Aug 20, 2025',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format',
    tags: ['Heritage', 'Adaptive Reuse', 'Commercial'],
    software: ['Rhino', 'Grasshopper', 'Adobe CC'],
    description:
      'Reyes Studio is a design-forward practice known for adaptive reuse work. We are looking for a detail-oriented student with strong visualization skills to join our team on a heritage warehouse conversion in the Junction neighbourhood.',
    responsibilities: [
      'Develop concept and schematic design drawings',
      'Create physical and digital study models',
      'Research heritage designation requirements',
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
    title: 'Residential Infill Package',
    firm: 'Castillo + Ng Architects',
    type: 'Contract',
    duration: '8 weeks',
    pay: '$3,600 flat',
    location: 'Ottawa, ON',
    posted: '3 days ago',
    deadline: 'Aug 10, 2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop&auto=format',
    tags: ['Residential', 'Infill', 'New Build'],
    software: ['AutoCAD', 'SketchUp', 'Enscape'],
    description:
      'Castillo + Ng is a boutique residential practice seeking contract support for a series of infill homes in the Glebe neighbourhood. Projects are in working drawing stage and require production support.',
    responsibilities: [
      'Produce working drawings and details',
      'Coordinate with consultants on drawing packages',
      'Manage drawing file organization',
      'Support permit submission process',
    ],
    requirements: [
      'AutoCAD and SketchUp proficiency',
      'Detail drawing experience an asset',
      'Organized and reliable communicator',
      'Available to work remotely with weekly check-ins',
    ],
    applicants: 6,
  },
  {
    id: '5',
    title: 'Urban Design Study — Waterfront',
    firm: 'Meridian Urban Studio',
    type: 'Internship',
    duration: '5 months',
    pay: '$3,200/mo',
    location: 'Montreal, QC',
    posted: '4 days ago',
    deadline: 'Aug 25, 2025',
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop&auto=format',
    tags: ['Urban Design', 'Public Realm', 'Waterfront'],
    software: ['AutoCAD', 'ArcGIS', 'Adobe CC'],
    description:
      'Meridian Urban Studio is a planning and urban design firm working on Montreal\'s Old Port waterfront revitalization. We are looking for an intern interested in public realm and urban strategy.',
    responsibilities: [
      'Conduct urban analysis and mapping',
      'Develop design alternatives for public spaces',
      'Prepare presentation materials for city stakeholders',
      'Assist with public engagement sessions',
    ],
    requirements: [
      'Interest in urban design and public space',
      'ArcGIS or QGIS experience',
      'Bilingual (French/English) preferred',
      'Available September 2025 – January 2026',
    ],
    applicants: 31,
  },
  {
    id: '6',
    title: 'Cultural Pavilion Competition Entry',
    firm: 'Birch Workshop',
    type: 'Contract',
    duration: '3 weeks',
    pay: '$1,800 flat',
    location: 'Calgary, AB',
    posted: '6 days ago',
    deadline: 'Jul 28, 2025',
    image: 'https://images.unsplash.com/photo-1571443128966-bd3fb8c5a2e8?w=800&h=500&fit=crop&auto=format',
    tags: ['Cultural', 'Competition', 'Pavilion'],
    software: ['Rhino', 'Grasshopper', 'Lumion'],
    description:
      'Birch Workshop is entering a national competition for a temporary cultural pavilion and needs additional capacity for visualization and drawing production during the intensive 3-week sprint.',
    responsibilities: [
      'Develop 3D models from concept direction',
      'Produce competition renderings and diagrams',
      'Assist with board layout and graphic design',
      'Participate in daily design reviews',
    ],
    requirements: [
      'Strong Rhino and visualization skills',
      'Able to work intensively for 3-week period',
      'Graphic design skills an asset',
      'Available immediately',
    ],
    applicants: 19,
  },
]
