// import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Google, Apple } from "iconsax-react";
import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  // const handleRedirect = () => {
  //   router.push('/about'); // Redirecciona a la página '/otra-pagina'
  // };

  return (
    <div>
      {/* <a href="about">About Page</a> */}
      {/* <button onClick={handleRedirect} ></button> */}
      {/* <Link href={"about"}>
        <button className="bg-gradient-to-r from-fuchsia-700 to-blue-600 rounded-lg p-2 hover:bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-slate-400">
          ABOUT
        </button>
      </Link> */}

      <div className="flex flex-row">
        <div className="h-[100vh] md:w-1/2">
          <div className="flex flex-col flex-1 justify-between items-start self-stretch h-full pt-[100px] px-[24px] pb-[52px] sm:pt-[124px] sm:px-[112px] sm:pb-[100px]">
            <Image
              src="helloDesignLogo.svg"
              width={162}
              height={34}
              alt="Hello Design Logo"
            />


            <div className="flex flex-col gap-2">

              <div className="flex flex-col gap-10">
                {/* Group 1 */}
                <div className="flex flex-col gap-8">
                  <h1
                    className="text-slate-700 text-[44px] font-medium leading-[104%] tracking-[-2.64px] leading-trim-both text-edge-cap space font-['Safiro']"
                  >
                    We give
                    <div className="flex">
                      you welcome!
                    </div>
                  </h1>
                  <p className="self-stretch text-gray-500 leading-trim-both font-['Rethink Sans']">
                    We are delighted to have you here, we start by filling out some information.
                  </p>
                </div>

                {/* Group 2 */}
                <div className="flex flex-col w-full justify-between gap-6">
                  <Link href={'welcome'}>
                    <Button className="flex rounded-[25px] w-full sm:w- font-['Rethink Sans'] font-normal tracking-tighter text-base py-3">
                      Get started
                    </Button>
                  </Link>
                  <div className="grid">
                    <div>
                    </div>
                    <div className="divider font-['Rethink Sans'] font-[400px] text-[12px] tracking-tighter leading-5 text-gray-500">
                      Or continue with
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full gap-3">
                    <Button variant="outline" className="flex flex-1 rounded-[47px] border-gray-300 py-3 px-6">
                      <Image
                        className="mr-2"
                        src="googleVector.svg"
                        width={22.8}
                        height={22.8}
                        alt="Google icon"
                      /> Google
                    </Button>
                    <Button variant="outline" className="flex flex-1 rounded-[47px] border-gray-300 py-3 px-6">
                      <Image
                        className="mr-2"
                        src="appleVector.svg"
                        width={22.8}
                        height={22.8}
                        alt="Apple icon"
                      /> Apple
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-['Rethink Sans']">
              All rights reserved ©2023
            </p>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center self-stretch bg-slate-400 pt-24 pb-24 flex-1 h-[100vh]">
        </div>
      </div>
    </div>
  );
}
