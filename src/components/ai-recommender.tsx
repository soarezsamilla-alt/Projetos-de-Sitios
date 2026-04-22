
"use client";

import React, { useState } from 'react';
import { recommendProject, type ProjectRecommendationOutput } from '@/ai/flows/project-recommendation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, MapPin, Ruler, Target } from 'lucide-react';

export function AIRecommender() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<ProjectRecommendationOutput['recommendedProjects'] | null>(null);
  const [landSize, setLandSize] = useState('1ha');
  const [desiredOutput, setDesiredOutput] = useState('');
  const [biome, setBiome] = useState('Cerrado');

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await recommendProject({ landSize, desiredOutput, biome });
      setRecommendations(result.recommendedProjects);
    } catch (error) {
      console.error('Failed to get recommendations', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-card border-2 border-primary/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <CardHeader className="text-center pb-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-primary animate-pulse" size={24} />
          <CardTitle className="text-2xl font-black uppercase tracking-widest text-primary">Localizador de Projetos AI</CardTitle>
          <Sparkles className="text-primary animate-pulse" size={24} />
        </div>
        <CardDescription className="text-muted-foreground italic">
          Nossa Inteligência Artificial ajuda você a encontrar os projetos ideais para sua propriedade no pack.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleRecommend} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-end">
          <div className="space-y-3">
            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Ruler size={14} /> Tamanho do Terreno
            </Label>
            <Select value={landSize} onValueChange={setLandSize}>
              <SelectTrigger className="bg-background border-border h-12">
                <SelectValue placeholder="Selecione o tamanho" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.5ha">0,5 Hectare</SelectItem>
                <SelectItem value="1ha">1 Hectare</SelectItem>
                <SelectItem value="2ha">2 Hectares</SelectItem>
                <SelectItem value="3ha">3 Hectares</SelectItem>
                <SelectItem value="5ha">5 Hectares</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Target size={14} /> Vocação Desejada
            </Label>
            <Input 
              value={desiredOutput} 
              onChange={(e) => setDesiredOutput(e.target.value)}
              placeholder="Ex: Café, Hortifruti..." 
              className="bg-background border-border h-12"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <MapPin size={14} /> Bioma da Região
            </Label>
            <Select value={biome} onValueChange={setBiome}>
              <SelectTrigger className="bg-background border-border h-12">
                <SelectValue placeholder="Selecione o bioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cerrado">Cerrado</SelectItem>
                <SelectItem value="Mata Atlântica/Sul">Mata Atlântica / Sul</SelectItem>
                <SelectItem value="Semiárido/Nordeste">Semiárido / Nordeste</SelectItem>
                <SelectItem value="Amazônia/Norte">Amazônia / Norte</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-3">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full shine-effect bg-foreground text-background hover:bg-primary hover:text-black font-black uppercase tracking-[0.2em] h-14"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Mapeando Projetos...
                </>
              ) : (
                'Encontrar Projetos Recomendados'
              )}
            </Button>
          </div>
        </form>

        {recommendations && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <h4 className="text-lg font-black uppercase tracking-widest border-b border-primary/20 pb-4 text-primary flex items-center gap-2">
              <Sparkles size={18} /> Recomendações Estratégicas:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="bg-card/50 border border-primary/20 p-6 rounded-sm hover:border-primary/60 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="font-black text-foreground uppercase tracking-wider text-sm">{rec.name}</h5>
                    <span className="bg-primary/10 text-primary text-[8px] font-black px-2 py-1 rounded-sm uppercase tracking-widest">
                      {rec.category || 'Recomendado'}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {rec.reasoning}
                  </p>
                  {rec.relevanceScore && (
                    <div className="flex items-center gap-2">
                      <div className="flex-grow bg-background h-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full transition-all duration-1000" 
                          style={{ width: `${rec.relevanceScore}%` }} 
                        />
                      </div>
                      <span className="text-[10px] font-black text-primary">{rec.relevanceScore}% match</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
              Acesse esses e outros 110+ projetos garantindo seu pack abaixo.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
