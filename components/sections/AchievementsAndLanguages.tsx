import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function AchievementsAndLanguages() {
    return (
        <div className="w-full px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Logros e Idiomas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="flex flex-col h-fit shadow-lg">
                        <CardHeader>
                            <CardTitle>Logros destacados</CardTitle>
                        </CardHeader>
                        <div className="p-6 pt-3">
                            <ul className="list-disc list-inside space-y-2  text-sm text-gray-200">
                                <li>🏆 Certificado de participación en el Hackathon Mercosur 2024.</li>
                                <li>💼 Becado de Itaipu y estudiante de la Universidad Autónoma de Asunción.</li>
                                <li>📜 Certificación de inglés nivel B1 (Intermedio) por EF SET.</li>
                            </ul>
                        </div>
                    </Card>
                    <Card className="flex flex-col h-fit shadow-lg">
                        <CardHeader>
                            <CardTitle>Idiomas</CardTitle>
                        </CardHeader>
                        <div className="p-6 pt-3">
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Badge>
                                        🇪🇸 Español (Nativo)
                                    </Badge>
                                </li>
                                <li>
                                    <a
                                        href="https://cert.efset.org/es/A5H4DB"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-fit"
                                    >
                                        <Badge className="block break-words whitespace-normal max-w-full gap-2">
                                            <span className="flex items-center gap-2 flex-wrap"></span>
                                            🇬🇧 Inglés (B1 - Intermedio, certificado EF SET)
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 text-purple-400 transition-colors group-hover:text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <title>Ver certificado</title>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Badge>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AchievementsAndLanguages; 