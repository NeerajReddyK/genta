interface ExhibitionsData {
  title: string,
  imageUrl: string,
  imageAlt: string,
  titleFromDate?: string,
  titleToDate?: string,
  exhibitionFromDate?: string,
  exhibitionToDate?: string,
  address: string,
  startTime: string,
  endTime: string
}

export const exhibition: ExhibitionsData = {
  title: "INTERRELATIONSHIPS",
  imageUrl: "/Exhibitions-hero.jpg",
  imageAlt: "Art by one of our artists",
  titleFromDate: "18.12.2024",
  titleToDate: "05.01.2025",
  exhibitionFromDate: "18.12.2024",
  exhibitionToDate: "23.12.2024",
  address: "75-1, Samcheong-ro, Jongno-gu, Seoul",
  startTime: "10:00 ",
  endTime: " 19:00"
}

// export default exhibition;