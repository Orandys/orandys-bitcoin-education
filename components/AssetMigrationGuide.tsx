// Composant temporaire pour aider à la migration des assets
// À supprimer après la migration complète

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  AlertTriangle,
  ExternalLink
} from "lucide-react";

export function AssetMigrationGuide() {
  const figmaAssets = [
    {
      id: 'c61e6dd123bffdb74bc6b36c0f4d0f50700a8333.png',
      name: 'Logo Orandys',
      usage: 'App.tsx, OrandysHome.tsx, Footer.tsx, ContactPage.tsx',
      targetPath: '/public/orandys-logo.png',
      priority: 'HIGH'
    },
    // Ajoutez d'autres assets ici selon vos besoins
  ];

  return (
    <Card className="p-6 m-4 border-orange-200 bg-orange-50">
      <div className="flex items-start gap-4 mb-4">
        <AlertTriangle className="w-6 h-6 text-orange-600" />
        <div>
          <h3 className="font-semibold text-orange-900">Assets Figma à Migrer</h3>
          <p className="text-sm text-orange-700">
            Les assets suivants utilisent des URLs Figma et doivent être remplacés pour GitHub
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {figmaAssets.map((asset, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white rounded-lg border"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{asset.name}</span>
                <Badge
                  variant={asset.priority === 'HIGH' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {asset.priority}
                </Badge>
              </div>
              <p className="text-xs text-gray-600 mb-1">
                <strong>Utilisé dans :</strong> {asset.usage}
              </p>
              <p className="text-xs text-gray-600">
                <strong>Placer dans :</strong> {asset.targetPath}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-gray-400" />
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                {asset.id.substring(0, 8)}...
              </code>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Instructions :</h4>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Téléchargez les assets depuis Figma Make</li>
          <li>2. Placez-les dans le dossier /public/ de votre projet GitHub</li>
          <li>3. Remplacez les imports figma:asset/ par les chemins locaux</li>
          <li>4. Testez que tout fonctionne avec npm run dev</li>
          <li>5. Supprimez ce composant une fois la migration terminée</li>
        </ol>
      </div>
    </Card>
  );
}