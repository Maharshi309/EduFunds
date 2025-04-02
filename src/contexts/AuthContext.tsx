import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<{
    error: Error | null;
    user: User | null;
  }>;
  signIn: (email: string, password: string) => Promise<{
    error: Error | null;
    user: User | null;
  }>;
  signOut: () => Promise<void>;
  updateProfile: (data: {
    first_name?: string;
    last_name?: string;
    address?: string;
    contact_number?: string;
    city?: string;
    state?: string;
    avatar_url?: string;
  }) => Promise<{
    error: Error | null;
    user: User | null;
  }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for confirmation hash in the URL
    const handleEmailConfirmation = async () => {
      const hash = window.location.hash.substring(1);
      if (hash.includes('access_token') || hash.includes('error_code')) {
        const { data, error } = await supabase.auth.exchangeCodeForSession(hash);
        if (error) {
          console.error('Error confirming email:', error);
        } else if (data?.session) {
          // Successfully confirmed email, redirect to login page with success message
          window.location.href = '/login?confirmed=true';
        }
      }
    };

    handleEmailConfirmation();

    // Get session from storage and set state if exists
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // If user just signed in, redirect to home page
        if (event === 'SIGNED_IN' && session) {
          // Check if we're on the login or register page to avoid redirect loops
          if (window.location.pathname.includes('/login') || window.location.pathname.includes('/register')) {
            window.location.href = '/';
          }
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
          emailRedirectTo: `${window.location.origin}/login?confirmed=true`,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.user) {
        // Insert profile data into profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              name,
              avatar_url: null,
              updated_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          throw profileError;
        }
      }

      return { user: data.user, error: null };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return { user: data.user, error: null };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const updateProfile = async (data: {
    first_name?: string;
    last_name?: string;
    address?: string;
    contact_number?: string;
    city?: string;
    state?: string;
    avatar_url?: string;
  }) => {
    try {
      if (!user) throw new Error('User not authenticated');

      const updates = {
        id: user.id,
        ...data,
        updated_at: new Date().toISOString(),
      };

      const { data: updatedProfile, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return { user: updatedProfile, error: null };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { user: null, error: error as Error };
    }
  };

  const value = {
    session,
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 