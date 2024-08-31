'use client'

import { Company } from "@/src/types/companyTypes";
import { UploadPhoto } from "./UploadPhoto";
import { CompanyFields } from "./CompanyFields";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/src/components/ui/form";
import useCompanyApi from "@/src/hooks/apis/useCompanyApi";

export const CompanyForm = () => {
  const formCompany = useForm<Company>({
    defaultValues: {
    companyName: '',
    companyAddress: '',
    companyPhone: undefined,
  }});
  const { onSubmit } = useCompanyApi();

  return (
    <>
      <Form {...formCompany}>
        <form
          onSubmit={formCompany.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4 gap-y-7 w-full"
        >
          {/* <UploadPhoto /> */}
          <CompanyFields control={formCompany.control} />

          <Button
            type="submit"
            className="col-span-12 rounded-[200px] px-4 py-2 sm:w-max"
          >
            Continue
          </Button>
        </form>
      </Form>
    </>
  )
}