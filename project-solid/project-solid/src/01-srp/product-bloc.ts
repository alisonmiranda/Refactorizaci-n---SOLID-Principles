
import { Mailer } from './mailer';
import { Product } from './product';
import { ProductService } from './product-service';
import { SubscriptionBloc } from './subscription-bloc';

export class ProductBloc {
  constructor(
    private readonly productService: ProductService = new ProductService(),
    private readonly mailer: Mailer = new Mailer(),
    private readonly subscriptionBloc: SubscriptionBloc = new SubscriptionBloc(),
  ) {}

  loadProduct(id: number): Product | undefined {
    return this.productService.loadProduct(id);
  }

  saveProduct(product: Product): void {
    this.productService.saveProduct(product);
  }

  notifyCustomer(email: string, message: string): void {
    this.mailer.sendEmail(email, message);
  }

  addSubscription(userId: number, plan: string): string {
    return this.subscriptionBloc.addSubscription(userId, plan);
  }
}

