'use client'

import { CompanyInputs } from "@/src/types/companyTypes";
import { UploadPhoto } from "./UploadPhoto";
import { CompanyFields } from "./CompanyFields";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";
import { useSignupCompany } from "@/src/hooks/formsSubmit/useSignupCompany";
import { Form } from "@/src/components/ui/form";

export const CompanyForm = () => {
  const form = useForm<CompanyInputs>();
  const { onSubmit } = useSignupCompany();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4 gap-y-7 w-full"
        >
          <UploadPhoto />
          <CompanyFields />

          <Button
            type="submit"
            className="rounded-[200px] px-4 py-2 sm:w-max"
          >
            Continue
          </Button>
        </form>
      </Form>
    </>
  )
}