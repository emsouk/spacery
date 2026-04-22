'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { lieuxService, type Lieu } from '@/lib/api';
import LieuView from '@/components/lieux/lieu';

function toId(value: unknown): number {
  if (typeof value === 'string') return Number(value);
  if (Array.isArray(value) && typeof value[0] === 'string') return Number(value[0]);
  return Number.NaN;
}

export default function LieuPage() {
  const params = useParams();
  const id = useMemo(() => toId((params as Record<string, unknown>)?.id), [params]);

  const [lieu, setLieu] = useState<Lieu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchLieu = async () => {
      if (!Number.isFinite(id)) {
        setError('ID de lieu invalide.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await lieuxService.getById(id);
        if (!cancelled) setLieu(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchLieu();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Chargement du lieu...</div>
      </div>
    );
  }

  if (error || !lieu) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-8 text-center">
        <div className="text-red-500 text-xl">Erreur : {error ?? 'Lieu introuvable'}</div>
        <Link
          href="/lieux"
          className="border-2 border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition-colors text-sm font-medium"
        >
          ← Retour aux lieux
        </Link>
      </div>
    );
  }

  return <LieuView lieu={lieu} />;
}

