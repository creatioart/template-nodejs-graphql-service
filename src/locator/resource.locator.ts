import 'reflect-metadata';

import {Container} from 'typedi';
import {PubSubEngine} from 'graphql-subscriptions';

/**
 * Resource Locator
 */
export class ResourceLocator {
  /**
   * I18n
   */
   public static I18n(): any {
    if (this.i18n) {
      return this.i18n;
    } else {
      this.i18n = Container.get('I18n');
      return this.i18n;
    }
  }

  /**
   * Subscription PubSub Client
   */
  public static SubscriptionPubSubClient(): PubSubEngine {
    if (this.subscriptionPubSubClient) {
      return this.subscriptionPubSubClient;
    } else {
      this.subscriptionPubSubClient = Container.get<PubSubEngine>('SubscriptionPubSubClient');
      return this.subscriptionPubSubClient;
    }
  }

  /**
   * Clean the Locator
   */
  public static clean(): void {
    this.i18n = undefined;
    this.subscriptionPubSubClient = undefined;
  }

  private static i18n: any;

  private static subscriptionPubSubClient: PubSubEngine | undefined;
}
