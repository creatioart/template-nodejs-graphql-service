import {withFilter} from 'graphql-subscriptions';
import {ResourceLocator} from '../../../../locator/resource.locator.js';

/**
 * Empty Subscription Resolvers
 */
export const emptyResolvers: any = {
  subscribe: withFilter(
    () => ResourceLocator.SubscriptionPubSubClient()
                         .asyncIterableIterator('EMPTY'),
    async () => {
      return false;
    }
  ),
  resolve: async () => {
    return undefined;
  },
};
