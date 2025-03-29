export interface Dataset {
  title: string;
  description: string;
  fileSize: string;
  format: string;
  downloadUrl: string;
  lastUpdated: string;
}

export const datasets: Dataset[] = [
  {
    title: "Galaxy Formation Simulation Data",
    description:
      "High-resolution cosmological simulation data of galaxy formation in the early universe. Includes dark matter distribution, gas density, and star formation rates across multiple redshifts.",
    fileSize: "2.5 GB",
    format: "HDF5",
    downloadUrl: "/data/galaxy_formation_simulation.h5",
    lastUpdated: "2023-12-15",
  },
  {
    title: "Star Formation Rate Catalogs",
    description:
      "Comprehensive catalog of star formation rates for 10,000 galaxies in the local universe. Includes multi-wavelength observations and derived physical properties.",
    fileSize: "850 MB",
    format: "CSV",
    downloadUrl: "/data/star_formation_catalog.csv",
    lastUpdated: "2023-11-20",
  },
  {
    title: "AGN Feedback Analysis Results",
    description:
      "Analysis results from our study of AGN feedback effects on galaxy evolution. Contains derived quantities, statistical analyses, and visualization data.",
    fileSize: "1.2 GB",
    format: "FITS",
    downloadUrl: "/data/agn_feedback_analysis.fits",
    lastUpdated: "2023-10-05",
  },
];
