export type DivisionDocsModule = {
  name: string;
  image: string;
  alt: string;
  summary: string;
  /** Where the card links to. Use '#' as a placeholder until you have real docs. */
  href: string;
};

export type DivisionDocs = {
  slug: string;
  /** Small eyebrow label shown above the big title, e.g. "Software Division". */
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  /** Optional primary button (e.g. software's "Open Sphinx Docs"). Omit to hide it. */
  docsHref?: string;
  docsButtonLabel?: string;
  modules: DivisionDocsModule[];
};

export const divisionDocs: DivisionDocs[] = [
  {
    slug: 'software',
    eyebrow: 'Software Division',
    title: 'SOFTWARE DOCUMENTATION',
    description:
      'Technical overview of the RUMarino Autonomy Stack: the open-source software system that connects perception, simulation, mission execution, control, hardware bridges, and data workflows for autonomous underwater vehicles.',
    heroImage: '/autonomy-docs/_images/simulation_image.png',
    heroAlt: 'RUMarino autonomy stack simulation',
    docsHref: '/software/docs',
    docsButtonLabel: 'Open Sphinx Docs',
    modules: [
      {
        name: 'Data Engine',
        image: '/autonomy-docs/_images/data-engine.jpeg',
        alt: 'Data Engine user interface',
        summary:
          'Full-stack dataset management and labeling for faster perception training, with human-in-the-loop workflows and foundation-model assistance.',
        href: '/software/docs?doc=data-engine.html',
      },
      {
        name: 'Sim2Real Tools',
        image: '/autonomy-docs/_images/sim2real.jpeg',
        alt: 'Stonefish simulation environment',
        summary:
          'Domain randomization, calibration-aware testing, and repeatable evaluation utilities that reduce the gap between simulation and pool testing.',
        href: '/software/docs?doc=sim2real-tools.html',
      },
      {
        name: 'Simulation Integrations',
        image: '/auv/proteus_simulation.webp',
        alt: 'Underwater simulation scene',
        summary:
          'Stonefish scenarios for Hydrus, Proteus, BlueROV2, and Girona500 that make end-to-end mission testing possible before hardware runs.',
        href: '/software/docs?doc=simulation-integrations.html',
      },
      {
        name: 'Controllers and Planners',
        image: '/autonomy-docs/_images/simulation_image.png',
        alt: 'Autonomous navigation simulation',
        summary:
          'Mission logic, planning, and vehicle control components built as simple, testable blocks for both simulated and real AUVs.',
        href: '/software/docs?doc=ros-packages.html',
      },
      {
        name: 'Perception',
        image: '/autonomy-docs/_images/orb_slam.png',
        alt: 'ORB-SLAM map viewer',
        summary:
          'Visual odometry, SLAM, inertial fusion, object detection, and learned models that turn camera and IMU streams into actionable state.',
        href: '/software/docs?doc=perception.html',
      },
      {
        name: 'Blender-Stonefish Integration',
        image: '/autonomy-docs/_images/blender_before.png',
        alt: 'Blender scene for simulation authoring',
        summary:
          'A reproducible authoring pipeline for exporting simulation assets, AUV models, and underwater environments from Blender into Stonefish.',
        href: '/software/docs?doc=blender-stonefish-integration.html',
      },
    ],
  },
  {
    slug: 'electrical',
    eyebrow: 'Electrical Division',
    title: 'ELECTRICAL DOCUMENTATION',
    description:
      'Technical overview of the electrical systems that power Hydrus: custom PCBs, power distribution, sensor wiring, and hardware integration for reliable underwater operation.',
    heroImage: '/members/Electrical_Team2025.webp',
    heroAlt: 'Electrical division team photo',
    modules: [
      {
        name: 'Power Distribution',
        image: '/auv/electrical.webp',
        alt: 'Power distribution hardware',
        summary:
          'How battery power is distributed, monitored, and protected across thrusters, computers, and sensors. Replace this card with your real docs link.',
        href: '#',
      },
      {
        name: 'Custom PCBs',
        image: '/members/Electrical_Team2025.webp',
        alt: 'Custom circuit boards',
        summary:
          'Overview of in-house board designs, bring-up procedure, and testing checklist. Point this card to your schematics or docs when ready.',
        href: '#',
      },
      {
        name: 'Sensor Wiring & Integration',
        image: '/auv/hydrus.webp',
        alt: 'AUV sensor integration',
        summary:
          'Wiring maps, connector standards, and sensor integration notes so every component communicates flawlessly underwater.',
        href: '#',
      },
    ],
  },
  {
    slug: 'mechanical',
    eyebrow: 'Mechanical Division',
    title: 'MECHANICAL DOCUMENTATION',
    description:
      'Technical overview of the mechanical design behind Hydrus: chassis, sealing, hydrodynamics, fabrication, and assembly for depth-ready vehicles.',
    heroImage: '/members/Mechanical_Team2025.webp',
    heroAlt: 'Mechanical division team photo',
    modules: [
      {
        name: 'Hull & Chassis',
        image: '/auv/hydrus_model1.webp',
        alt: 'AUV hull model',
        summary:
          'Frame design, material choices, and structural decisions that keep Hydrus robust and hydrodynamic. Link your CAD or build docs here.',
        href: '#',
      },
      {
        name: 'Sealing & Waterproofing',
        image: '/auv/hydrus_photo_1.webp',
        alt: 'AUV hardware close-up',
        summary:
          'O-rings, penetrators, pressure testing, and pool-test checklist before any deployment.',
        href: '#',
      },
      {
        name: 'Fabrication & Assembly',
        image: '/auv/proteus_cover.webp',
        alt: 'Vehicle assembly',
        summary:
          'Shop workflows, 3D-printing and machining notes, and step-by-step assembly guides for new members.',
        href: '#',
      },
    ],
  },
  {
    slug: 'management',
    eyebrow: 'Management Division',
    title: 'MANAGEMENT DOCUMENTATION',
    description:
      'How RUMarino runs: strategy, operations, sponsorships, outreach, and competition logistics that keep all technical divisions moving together.',
    heroImage: '/members/management_team2025.webp',
    heroAlt: 'Management division team photo',
    modules: [
      {
        name: 'Operations & Strategy',
        image: '/members/management_team2025.webp',
        alt: 'Management team',
        summary:
          'Season planning, timelines, budgets, and decision-making process. Link your handbook or drive docs here.',
        href: '#',
      },
      {
        name: 'Sponsorships & Outreach',
        image: '/company_night.webp',
        alt: 'Outreach event',
        summary:
          'Sponsor packages, outreach activities, and media kit so the team stays funded and visible.',
        href: '#',
      },
      {
        name: 'Competition Logistics',
        image: '/auv/auv_depths.webp',
        alt: 'Competition vehicle',
        summary:
          'Travel, shipping, rules compliance, and on-site checklists for RoboSub and other competitions.',
        href: '#',
      },
    ],
  },
];

export const getDivisionDocsBySlug = (slug: string) => {
  return divisionDocs.find((docs) => docs.slug === slug);
};
