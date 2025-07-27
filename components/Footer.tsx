import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Logo } from './ui/logo';
import {
  Mail,
  Heart,
  Shield,
  ExternalLink,
  CheckCircle,
  Bitcoin,
  Loader2,
  AlertTriangle
} from "lucide-react";
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Fonction de test de connectivité simplifiée
  const testConnection = async () => {
    try {
      console.log('Testing connection with projectId:', projectId);
      const healthUrl = `https://${projectId}.supabase.co/functions/v1/make-server-9bcea3e8/health`;
      
      console.log('Health URL:', healthUrl);
      
      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Health check successful:', data);
        toast.success('✅ Serveur accessible ! Newsletter opérationnelle.');
      } else {
        console.error('Health check failed:', response.status);
        const errorText = await response.text();
        console.error('Error response:', errorText);
        toast.error(`Serveur non accessible (${response.status})`);
      }
    } catch (error) {
      console.error('Connection test failed:', error);
      toast.error('🔥 Impossible de joindre le serveur');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = `https://${projectId}.supabase.co/functions/v1/make-server-9bcea3e8/newsletter/subscribe`;
      console.log('Attempting newsletter subscription to:', apiUrl);
      console.log('Email:', email);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        
        try {
          const errorData = JSON.parse(errorText);
          if (response.status === 409) {
            toast.warning('Cette adresse email est déjà abonnée à notre newsletter');
            setIsSubscribed(true);
            setTimeout(() => setIsSubscribed(false), 3000);
          } else {
            toast.error(errorData.error || `Erreur du serveur (${response.status})`);
          }
        } catch (parseError) {
          toast.error(`Erreur du serveur (${response.status})`);
        }
        return;
      }

      const data = await response.json();
      console.log('Success response:', data);

      setIsSubscribed(true);
      toast.success('🎉 Merci pour votre inscription à la newsletter Orandys !');
      setEmail('');
      
      // Reset après 4 secondes
      setTimeout(() => setIsSubscribed(false), 4000);

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      // Fallback avec stockage local
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        console.log('Using local fallback for newsletter');
        
        try {
          const localSubscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
          const normalizedEmail = email.toLowerCase().trim();
          
          const existingSubscriber = localSubscribers.find((sub: any) => sub.email === normalizedEmail);
          if (!existingSubscriber) {
            localSubscribers.push({
              email: normalizedEmail,
              subscribedAt: new Date().toISOString(),
              method: 'local_fallback'
            });
            localStorage.setItem('newsletter_subscribers', JSON.stringify(localSubscribers));
            
            setIsSubscribed(true);
            toast.warning('📧 Email enregistré localement - Synchronisation ultérieure');
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 4000);
          } else {
            toast.info('Email déjà enregistré localement');
          }
        } catch (localError) {
          console.error('Local storage fallback failed:', localError);
          toast.error('Service temporairement indisponible. Réessayez plus tard.');
        }
      } else {
        toast.error('Erreur inattendue. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const donationInfo = {
    bitcoin: 'bc1q8n3lzak9wrfqt73wesc94xmtvy05pe4hsgeg5q',
    buyMeACoffee: 'https://buymeacoffee.com/orandys',
    email: 'orandys.bitcoin@gmail.com'
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full">
                <Logo size="medium" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Orandys</h3>
                <p className="text-sm text-gray-400">Naviguer, apprendre, évoluer</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Formation Bitcoin complète et accessible pour comprendre 
              les enjeux monétaires et technologiques du futur.
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-400" />
              <h4 className="font-semibold">Newsletter</h4>
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <p className="text-sm text-gray-300">
                  Recevez les dernières actualités Bitcoin et nos nouveaux contenus
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit"
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-1" />
                        <span className="hidden sm:inline">...</span>
                      </>
                    ) : (
                      'S\'inscrire'
                    )}
                  </Button>
                </div>
                
                {/* Bouton de test de connexion (toujours visible pour debug) */}
                <Button 
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={testConnection}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 text-xs"
                >
                  <AlertTriangle className="w-3 h-3 mr-2" />
                  Tester la connexion serveur
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Inscription confirmée !</span>
              </div>
            )}
            
            {/* Informations sur les données */}
            <p className="text-xs text-gray-500">
              🔒 Votre email est sécurisé et ne sera jamais partagé. 
              Vous pouvez vous désabonner à tout moment.
            </p>
          </div>

          {/* Soutien et donation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <h4 className="font-semibold">Soutenir Orandys</h4>
            </div>
            
            <p className="text-sm text-gray-300">
              Aidez-nous à développer des contenus éducatifs libres et accessibles
            </p>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-gray-700 hover:bg-gray-800"
                onClick={() => {
                  navigator.clipboard.writeText(donationInfo.bitcoin);
                  toast.success('Adresse Bitcoin copiée !');
                }}
              >
                <Bitcoin className="w-4 h-4 mr-2" />
                Donation Bitcoin
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-gray-700 hover:bg-gray-800"
                onClick={() => window.open(donationInfo.buyMeACoffee, '_blank')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.766-1.589a4.92 4.92 0 0 0-1.148-.861C16.302 2.417 14.641 2 12.842 2a9.32 9.32 0 0 0-1.65.149 9.53 9.53 0 0 0-1.512.389c-2.36.763-4.006 2.411-4.006 4.925 0 .8.156 1.54.437 2.187.281.647.689 1.201 1.178 1.603.489.402 1.048.693 1.662.844.614.151 1.267.226 1.942.226.675 0 1.328-.075 1.942-.226.614-.151 1.173-.442 1.662-.844.489-.402.897-.956 1.178-1.603.281-.647.437-1.387.437-2.187 0-.318-.032-.634-.095-.947l.919-.146zm-4.216 5.585c0 .8-.156 1.54-.437 2.187-.281.647-.689 1.201-1.178 1.603-.489.402-1.048.693-1.662.844-.614.151-1.267.226-1.942.226-.675 0-1.328-.075-1.942-.226-.614-.151-1.173-.442-1.662-.844-.489-.402-.897-.956-1.178-1.603-.281-.647-.437-1.387-.437-2.187 0-2.514 1.646-4.162 4.006-4.925a9.53 9.53 0 0 1 1.512-.389A9.32 9.32 0 0 1 12.842 7c1.799 0 3.46.417 5.328 1.299.493.234.926.517 1.278.844.352.327.621.692.766 1.089.145.397.219.815.219 1.25z"/>
                </svg>
                Buy Me a Coffee
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            
            {/* Liens légaux */}
            <div className="flex flex-wrap gap-4 text-sm">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(donationInfo.email);
                  toast.success('Adresse email copiée !');
                }}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => toast.info('Conditions d\'utilisation : Usage éducatif libre')}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Conditions d'utilisation
              </button>
              <button 
                onClick={() => toast.info('Confidentialité : Données newsletter sécurisées et chiffrées')}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Confidentialité
              </button>
            </div>

            {/* Copyright et protection */}
            <div className="text-right text-sm text-gray-400">
              <div className="flex items-center justify-end gap-2">
                <Shield className="w-4 h-4" />
                <span>© 2025 Orandys - Contenu sous licence libre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message de sécurité */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 Newsletter sécurisée avec Supabase • Données chiffrées • 
            Vérifiez toujours les informations par vous-même • 
            Bitcoin est expérimental, investissez prudemment
          </p>
        </div>
      </div>
    </footer>
  );
}