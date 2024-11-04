interface ArtworkType {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const artworks: ArtworkType[] = [
  {
    id: 1,
    src: '/artworks/art1.jpg', // Image of geometric pieces with blue and red elements
    alt: 'Geometric collage artwork featuring mixed materials and geometric shapes',
    width: 445,
    height: 297,
  },
  {
    id: 2,
    src: '/artworks/art2.jpg', // Image of sculptural piece with colorful elements on soil/ground
    alt: 'Sculptural installation with vibrant colors and organic forms on earthy base',
    width: 445,
    height: 297,
  },
  {
    id: 3,
    src: '/artworks/art3.jpg', // Image of spray paint can
    alt: 'Used spray paint can in artistic setting',
    width: 445,
    height: 297,
  },
  {
    id: 4,
    src: '/artworks/art4.jpg', // Image with yellow and green abstract shapes
    alt: 'Abstract painting with bold yellow and green strokes',
    width: 445,
    height: 297,
  },
  {
    id: 5,
    src: '/artworks/art5.jpg', // Image with purple minimal composition
    alt: 'Minimalist composition with purple elements',
    width: 445,
    height: 297,
  },
  {
    id: 6,
    src: '/artworks/art6.jpg', // Image with dark blue tones
    alt: 'Abstract painting in deep blue tones',
    width: 445,
    height: 297,
  },
  {
    id: 7,
    src: '/artworks/art7.jpg', // Image with multicolored vertical strokes
    alt: 'Abstract painting with vertical multicolored strokes',
    width: 445,
    height: 297,
  },
  {
    id: 8,
    src: '/artworks/art8.jpg', // Image with colorful abstract patterns
    alt: 'Vibrant abstract painting with multiple colors and organic shapes',
    width: 445,
    height: 297,
  },
  {
    id: 9,
    src: '/artworks/art9.jpg', // Image with colorful abstract patterns
    alt: 'Multiple art showcase',
    width: 445,
    height: 297,
  }
];

export default artworks;