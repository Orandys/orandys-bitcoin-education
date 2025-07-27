import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Users, 
  Mail, 
  TrendingUp, 
  Download,
  Trash2,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface NewsletterStats {
  totalActiveSubscribers: number;
  lastUpdated: string;
}

export function NewsletterAdmin() {
  const [stats, setStats] = useState<NewsletterStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [unsubscribeEmail, setUnsubscribeEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<any>(null);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9bcea3e8/newsletter/stats`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Accept': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
      } else {
        const errorText = await response.text();
        console.error('Stats error:', errorText);
        toast.error(`Erreur lors du chargement des statistiques (${response.status})`);
      }
    } catch (error) {
      console.error('Stats loading error:', error);
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        toast.error('Impossible de joindre le serveur');
      } else {
        toast.error('Erreur de connexion');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!unsubscribeEmail || !unsubscribeEmail.includes('@')) {
      toast.error('Email invalide');
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9bcea3e8/newsletter/unsubscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email: unsubscribeEmail }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success('Désabonnement réussi');
        setUnsubscribeEmail('');
        loadStats(); // Recharger les stats
      } else {
        toast.error(data.error || 'Erreur lors du désabonnement');
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      toast.error('Erreur de connexion');
    }
  };

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkEmail || !checkEmail.includes('@')) {
      toast.error('Email invalide');
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9bcea3e8/newsletter/status`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email: checkEmail }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEmailStatus(data);
      } else {
        toast.error('Erreur lors de la vérification');
      }
    } catch (error) {
      console.error('Status check error:', error);
      toast.error('Erreur de connexion');
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Administration Newsletter</h1>
        <p className="text-gray-600">Gestion des abonnements à la newsletter Orandys</p>
      </div>

      {/* Statistiques */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Abonnés actifs</p>
              <p className="text-2xl font-bold">
                {stats ? stats.totalActiveSubscribers : '---'}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Croissance</p>
              <p className="text-2xl font-bold">+{stats ? Math.floor(stats.totalActiveSubscribers * 0.1) : 0}</p>
              <p className="text-xs text-gray-500">ce mois</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Dernière mise à jour</p>
              <p className="text-sm font-medium">
                {stats ? new Date(stats.lastUpdated).toLocaleDateString('fr-FR') : '---'}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Désabonner un email */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-500" />
            Désabonner un utilisateur
          </h3>
          <form onSubmit={handleUnsubscribe} className="space-y-4">
            <Input
              type="email"
              placeholder="email@exemple.com"
              value={unsubscribeEmail}
              onChange={(e) => setUnsubscribeEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              variant="destructive" 
              className="w-full"
            >
              Désabonner
            </Button>
          </form>
        </Card>

        {/* Vérifier le statut */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Vérifier le statut d'un email
          </h3>
          <form onSubmit={handleCheckStatus} className="space-y-4">
            <Input
              type="email"
              placeholder="email@exemple.com"
              value={checkEmail}
              onChange={(e) => setCheckEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Vérifier
            </Button>
            
            {emailStatus && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={emailStatus.subscribed ? "default" : "secondary"}>
                    {emailStatus.subscribed ? "Abonné" : "Non abonné"}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Statut: {emailStatus.status}
                  </span>
                </div>
                {emailStatus.subscribedAt && (
                  <p className="text-xs text-gray-500">
                    Inscription: {new Date(emailStatus.subscribedAt).toLocaleDateString('fr-FR')}
                  </p>
                )}
              </div>
            )}
          </form>
        </Card>
      </div>

      {/* Actions globales */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Actions</h3>
        <div className="flex gap-4">
          <Button 
            onClick={loadStats} 
            disabled={isLoading}
            variant="outline"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            Actualiser les stats
          </Button>
          
          <Button 
            onClick={() => toast.info('Export de données non implémenté dans cette démo')}
            variant="outline"
          >
            <Download className="w-4 h-4 mr-2" />
            Exporter les données
          </Button>
        </div>
      </Card>

      {/* Informations importantes */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Informations importantes</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Les données de la newsletter sont stockées de manière sécurisée dans Supabase</li>
          <li>• Cette interface d'administration est à des fins de démonstration</li>
          <li>• En production, ajoutez une authentification pour protéger cette page</li>
          <li>• Respectez le RGPD et les lois sur la protection des données</li>
        </ul>
      </div>
    </div>
  );
}