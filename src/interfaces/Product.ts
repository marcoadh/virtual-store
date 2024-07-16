export default interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  stock?: number;
  images: string[];
  colors: string[];
  units?: number;
  onsale?: number;
  total?: number;
}