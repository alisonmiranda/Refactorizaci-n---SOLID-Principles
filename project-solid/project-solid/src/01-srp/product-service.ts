import { Product } from './product';

export class ProductService {
  private products: Product[] = [];

  loadProduct(id: number): Product | undefined {
    console.log(`Cargando producto con ID: ${id} desde el inventario del parque...`);
    return this.products.find((product) => product.id === id);
  }

  saveProduct(product: Product): void {
    console.log(`Guardando el producto ${product.name} en la base de datos de la reserva...`);
    this.products.push(product);
  }
}
