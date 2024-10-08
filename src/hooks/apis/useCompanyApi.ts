"use client"

import { Company } from '@/src/types/companyTypes';
import { createClient } from '@/src/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// create a hook useCompanyApi that insert a new company using supabase
const useCompanyApi = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const supabase = createClient();

  const onSubmit = async (companyData: Company) => {
    setIsLoading(true);
    setError(null);

    // Get the authenticated user's session
    const { data: { session }, error, data } = await supabase.auth.getSession();

    console.log(data);

    // if (error || !session) {
    //   throw new Error('User is not authenticated');
    // }

    // const token = session.access_token; // Obtener el token de acceso del usuario
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`, // Incluir el token en el encabezado
        },
        body: JSON.stringify({
          name: companyData.companyName,
          address: companyData.companyAddress,
          phone: companyData.companyPhone,
          profile_id: "06003f17-e24b-4922-bc9e-7797d6088a43"
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      setIsLoading(false);
      router.push('/dashboard');

      return result.data;
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    };
  };

  return {
    isLoading,
    error,
    onSubmit
  };
};

export default useCompanyApi;
