export class SubscriptionBloc {
  addSubscription(userId: number, plan: string): string {
    console.log(`Suscribiendo al usuario ${userId} al plan ${plan}.`);
    return `Usuario ${userId} suscrito al plan ${plan}.`;
  }
}
