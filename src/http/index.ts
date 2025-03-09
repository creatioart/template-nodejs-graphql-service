import {Application} from 'express';
import {registerHealthRouter} from './server/health.router.js';

/**
 * Register Application Routers
 * @param app Express
 * @returns None
 */
export function registerApplicationRouters(app: Application) {
  // Register Health Router
  registerHealthRouter(app);
}
