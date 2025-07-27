import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware CORS
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Logger simple (remplace le middleware défaillant)
app.use('*', async (c, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${c.req.method} ${c.req.url} - ${c.res.status} (${ms}ms)`);
});

// Créer le client Supabase avec gestion d'erreur
let supabase;
try {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
  } else {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('Supabase client initialized successfully');
  }
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
}

// Route racine
app.get('/make-server-9bcea3e8/', (c) => {
  return c.json({ 
    message: 'Orandys Newsletter Server',
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: ['/newsletter/subscribe', '/newsletter/unsubscribe', '/newsletter/stats', '/newsletter/status']
  });
});

// Route de test de santé
app.get('/make-server-9bcea3e8/health', (c) => {
  return c.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    server: 'Orandys Newsletter API',
    version: '1.0.0',
    environment: {
      supabaseUrl: Deno.env.get('SUPABASE_URL') ? 'configured' : 'missing',
      supabaseKey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ? 'configured' : 'missing'
    }
  });
});

// Route de test simple sans dépendances
app.post('/make-server-9bcea3e8/test', async (c) => {
  try {
    const body = await c.req.json();
    console.log('Test endpoint called with:', body);
    
    return c.json({
      success: true,
      message: 'Test endpoint working',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return c.json({
      success: false,
      error: error.message
    }, 500);
  }
});

// Route pour s'abonner à la newsletter
app.post('/make-server-9bcea3e8/newsletter/subscribe', async (c) => {
  console.log('Newsletter subscription request received');
  
  try {
    // Vérifier le Content-Type
    const contentType = c.req.header('content-type');
    console.log('Content-Type:', contentType);
    
    let requestBody;
    try {
      requestBody = await c.req.json();
      console.log('Request body:', requestBody);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return c.json({ error: 'Corps de requête JSON invalide' }, 400);
    }
    
    const { email } = requestBody;
    
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.log('Invalid email provided:', email);
      return c.json({ error: 'Email invalide' }, 400);
    }

    // Normaliser l'email
    const normalizedEmail = email.toLowerCase().trim();
    console.log('Normalized email:', normalizedEmail);
    
    // Vérifier si l'email existe déjà
    const existingSubscriber = await kv.get(`newsletter:${normalizedEmail}`);
    console.log('Existing subscriber check:', existingSubscriber ? 'found' : 'not found');
    
    if (existingSubscriber) {
      console.log('Email already subscribed:', normalizedEmail);
      return c.json({ 
        error: 'Cette adresse email est déjà abonnée à la newsletter',
        subscribed: true 
      }, 409);
    }

    // Créer l'abonnement
    const subscription = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'orandys-website',
      preferences: {
        bitcoinNews: true,
        courseUpdates: true,
        generalNews: true
      }
    };

    console.log('Creating subscription:', subscription);

    // Sauvegarder dans la base de données
    await kv.set(`newsletter:${normalizedEmail}`, subscription);
    console.log('Subscription saved to KV store');
    
    // Ajouter à la liste globale des abonnés
    const subscribersList = await kv.get('newsletter:subscribers_list') || [];
    if (!subscribersList.includes(normalizedEmail)) {
      subscribersList.push(normalizedEmail);
      await kv.set('newsletter:subscribers_list', subscribersList);
      console.log('Added to subscribers list, total:', subscribersList.length);
    }

    console.log(`Newsletter subscription successful: ${normalizedEmail}`);
    
    return c.json({ 
      success: true,
      message: 'Abonnement réussi à la newsletter Orandys',
      email: normalizedEmail
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    console.error('Error stack:', error.stack);
    
    return c.json({ 
      error: 'Erreur lors de l\'abonnement à la newsletter',
      details: error.message,
      type: error.constructor.name
    }, 500);
  }
});

// Route pour se désabonner de la newsletter
app.post('/make-server-9bcea3e8/newsletter/unsubscribe', async (c) => {
  try {
    const { email } = await c.req.json();
    
    if (!email || !email.includes('@')) {
      return c.json({ error: 'Email invalide' }, 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    
    // Vérifier si l'abonnement existe
    const subscription = await kv.get(`newsletter:${normalizedEmail}`);
    
    if (!subscription) {
      return c.json({ 
        error: 'Cette adresse email n\'est pas abonnée à la newsletter' 
      }, 404);
    }

    // Marquer comme désabonné au lieu de supprimer
    const unsubscribedData = {
      ...subscription,
      status: 'unsubscribed',
      unsubscribedAt: new Date().toISOString()
    };

    await kv.set(`newsletter:${normalizedEmail}`, unsubscribedData);
    
    // Retirer de la liste active des abonnés
    const subscribersList = await kv.get('newsletter:subscribers_list') || [];
    const updatedList = subscribersList.filter((email: string) => email !== normalizedEmail);
    await kv.set('newsletter:subscribers_list', updatedList);

    console.log(`Newsletter unsubscription: ${normalizedEmail}`);
    
    return c.json({ 
      success: true,
      message: 'Désabonnement réussi de la newsletter Orandys'
    });

  } catch (error) {
    console.log('Newsletter unsubscription error:', error);
    return c.json({ 
      error: 'Erreur lors du désabonnement',
      details: error.message 
    }, 500);
  }
});

// Route pour obtenir les statistiques de la newsletter (sans exposer les emails)
app.get('/make-server-9bcea3e8/newsletter/stats', async (c) => {
  try {
    const subscribersList = await kv.get('newsletter:subscribers_list') || [];
    
    return c.json({
      success: true,
      stats: {
        totalActiveSubscribers: subscribersList.length,
        lastUpdated: new Date().toISOString()
      }
    });

  } catch (error) {
    console.log('Newsletter stats error:', error);
    return c.json({ 
      error: 'Erreur lors de la récupération des statistiques',
      details: error.message 
    }, 500);
  }
});

// Route pour vérifier le statut d'un email
app.post('/make-server-9bcea3e8/newsletter/status', async (c) => {
  try {
    const { email } = await c.req.json();
    
    if (!email || !email.includes('@')) {
      return c.json({ error: 'Email invalide' }, 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const subscription = await kv.get(`newsletter:${normalizedEmail}`);
    
    if (!subscription) {
      return c.json({ 
        subscribed: false,
        message: 'Email non abonné'
      });
    }

    return c.json({
      subscribed: subscription.status === 'active',
      status: subscription.status,
      subscribedAt: subscription.subscribedAt,
      preferences: subscription.preferences
    });

  } catch (error) {
    console.log('Newsletter status check error:', error);
    return c.json({ 
      error: 'Erreur lors de la vérification du statut',
      details: error.message 
    }, 500);
  }
});

// Gestionnaire d'erreur global
app.onError((err, c) => {
  console.error('Global error handler:', err);
  return c.json({
    error: 'Erreur interne du serveur',
    message: err.message
  }, 500);
});

// Gestionnaire pour les routes non trouvées
app.notFound((c) => {
  return c.json({
    error: 'Route non trouvée',
    path: c.req.url
  }, 404);
});

Deno.serve(app.fetch);