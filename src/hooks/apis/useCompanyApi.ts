import { useState } from 'react';
import { CompanyInputs } from '@/src/types/companyTypes';
import { createClient } from '@/src/utils/supabase/server';

// create a hook useCompanyApi that insert a new company using supabase
const useCompanyApi = () => {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertCompany = async (companyData: CompanyInputs) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.from('companies').insert(companyData);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, insertCompany };
};

export default useCompanyApi;
