export interface Region {
  id: string;
  label: string;
  currency: string;
  symbol: string;
  exchangeRate: number; // relative to USD
  locations: string[];
}

export const REGIONS: Region[] = [
  {
    id: "us",
    label: "United States",
    currency: "USD",
    symbol: "$",
    exchangeRate: 1,
    locations: [
      "New York, NY", "San Francisco, CA", "Seattle, WA", "Austin, TX",
      "Boston, MA", "Chicago, IL", "Los Angeles, CA", "Denver, CO",
      "Portland, OR", "Atlanta, GA", "Dallas, TX", "Miami, FL",
      "Washington, DC", "Minneapolis, MN", "Phoenix, AZ", "Remote (US)",
    ],
  },
  {
    id: "in",
    label: "India",
    currency: "INR",
    symbol: "₹",
    exchangeRate: 83.5,
    locations: [
      "Bangalore", "Hyderabad", "Mumbai", "Pune", "Chennai",
      "Delhi NCR", "Kolkata", "Ahmedabad", "Remote (India)",
    ],
  },
  {
    id: "uk",
    label: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    exchangeRate: 0.79,
    locations: [
      "London", "Manchester", "Edinburgh", "Birmingham",
      "Bristol", "Cambridge", "Remote (UK)",
    ],
  },
  {
    id: "de",
    label: "Germany",
    currency: "EUR",
    symbol: "€",
    exchangeRate: 0.92,
    locations: [
      "Berlin", "Munich", "Hamburg", "Frankfurt",
      "Stuttgart", "Remote (Germany)",
    ],
  },
  {
    id: "ca",
    label: "Canada",
    currency: "CAD",
    symbol: "C$",
    exchangeRate: 1.36,
    locations: [
      "Toronto", "Vancouver", "Montreal", "Ottawa",
      "Calgary", "Remote (Canada)",
    ],
  },
];

export function convertSalary(usdAmount: number, region: Region): number {
  return Math.round(usdAmount * region.exchangeRate);
}

export function formatSalary(amount: number, region: Region): string {
  const converted = convertSalary(amount, region);
  if (converted >= 10000000) {
    return `${region.symbol}${(converted / 10000000).toFixed(1)}Cr`;
  }
  if (converted >= 100000) {
    return `${region.symbol}${(converted / 100000).toFixed(1)}L`;
  }
  if (converted >= 1000) {
    return `${region.symbol}${(converted / 1000).toFixed(0)}K`;
  }
  return `${region.symbol}${converted}`;
}

export function formatSalaryFull(amount: number, region: Region): string {
  const converted = convertSalary(amount, region);
  return `${region.symbol}${converted.toLocaleString()}`;
}
