import { CompanyInputs } from "../../types/companyTypes";
// import useCompanyApi from '../apis/useCompanyApi';

export const useSignupCompany = () => {

  // const { insertCompany } = useCompanyApi();

  const onSubmit = (data: CompanyInputs) => {
    console.log("DAAATAAAA: ");
    console.log(data);

    // insertCompany(data);
  }

  return {
    onSubmit,
  }
}