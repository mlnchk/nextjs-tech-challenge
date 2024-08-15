export const products = [
  { id: 1, name: "Residential Proxies", price: 50 },
  { id: 2, name: "Data Scraping API", price: 100 },
  { id: 3, name: "Mobile Proxies", price: 75 },
];

export type Product = (typeof products)[number];
