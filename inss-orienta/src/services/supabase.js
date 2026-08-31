import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const supabaseConfigurado = Boolean(supabaseUrl && supabaseKey);

// Sem as variáveis, a interface continua funcionando em modo de demonstração.
// A chave anon pode ficar no cliente, mas as tabelas e o Storage precisam de RLS.
export const supabase = supabaseConfigurado
  ? createClient(supabaseUrl, supabaseKey)
  : null;
