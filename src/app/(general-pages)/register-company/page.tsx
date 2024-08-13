import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { CompanyInfoForm } from "./CompanyInfoForm";

export const metadata = {
  title: "Register Company",
  description: "This is a page Register Company",
};

export default function RegisterCompanyPage() {

  return (
    <>
      <div className="flex flex-row">
        <div className="h-[100vh] sm:w-1/2 sm:pt-[124px] sm:px-[112px] sm:pb-[100px]">
          <div className="flex sm:hidden flex-col justify-center items-center self-stretch bg-slate-300/80 px-10 pt-10 flex-1">
            <div className="flex flex-1 flex-col gap-4 justify-center items-center bg-white w-full rounded-ss-xl rounded-se-xl py-5">
              <div className="w-20 h-20 bg-slate-300/80 rounded-full">

              </div>
              <div>
                <span className="font-['Rethink Sans'] font-normal text-[12px] tracking-tighter leading-5 text-gray-800 flex items-center"
                >.......</span>
                <span className="font-['Rethink Sans'] font-normal text-[12px] tracking-tighter leading-5 text-gray-800 flex items-center"
                >.......</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between items-start self-stretch pt-[48px] px-[24px] pb-[52px] sm:p-0">
            <div className="flex flex-col">
              <Link href={'/register-user'}>
                <span
                  className="font-['Rethink Sans'] font-normal text-[12px] tracking-tighter leading-5 text-gray-400 flex items-center gap-1 pb-6 cursor-pointer"
                >
                  <ArrowLeft2 className="w-3" />
                  Volver
                </span>
              </Link>
              <h2
                className="text-slate-700 text-3xl font-medium leading-[104%] tracking-[-2.64px] leading-trim-both text-edge-cap space font-['Safiro'] pb-4"
              >Company info</h2>
              <h3 className="font-['Rethink Sans'] font-normal text-[16px] tracking-tighter leading-5 text-gray-500 flex items-center gap-1 pb-6"
              >Here are the details of your company or project.</h3>
            </div>
            <CompanyInfoForm />
          </div>
        </div>
        <div className="hidden sm:flex flex-col justify-center items-center self-stretch bg-slate-300/60 pt-24 pb-24 flex-1 h-[100vh]">
        </div>
      </div>
    </>
  );
}
