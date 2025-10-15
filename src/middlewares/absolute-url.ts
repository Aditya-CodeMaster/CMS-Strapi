export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.url.startsWith('/admin') || ctx.request.url.startsWith('/_')) {
      return;
    }

    if (ctx.request.url.startsWith('/uploads') || ctx.request.url.startsWith('/public')) {
      return;
    }

    if (!ctx.request.url.startsWith('/api')) {
      return;
    }

    if (ctx.status !== 200 || !ctx.body) {
      return;
    }

    const contentType = ctx.response.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      return;
    }

    if (typeof ctx.body !== 'object' || ctx.body === null || Buffer.isBuffer(ctx.body)) {
      return;
    }

    const baseUrl = process.env.PUBLIC_URL || 
                   strapi.config.get('server.url') || 
                   `${ctx.request.protocol}://${ctx.request.host}`;

    const transformUrls = (obj: any): any => {
      if (!obj || typeof obj !== 'object') {
        return obj;
      }

      if (Array.isArray(obj)) {
        return obj.map(transformUrls);
      }

      const transformed = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === 'url' && typeof value === 'string' && value.startsWith('/')) {
          transformed[key] = `${baseUrl}${value}`;
        } 
        else if (key === 'previewUrl' && typeof value === 'string' && value.startsWith('/')) {
          transformed[key] = `${baseUrl}${value}`;
        }
        else if (['formats', 'thumbnail', 'small', 'medium', 'large'].includes(key) && value) {
          transformed[key] = transformUrls(value);
        }
        else if (value && typeof value === 'object') {
          transformed[key] = transformUrls(value);
        } 
        else {
          transformed[key] = value;
        }
      }
      return transformed;
    };
    ctx.body = transformUrls(ctx.body);
  };
};

