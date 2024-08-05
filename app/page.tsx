import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  // const handleRedirect = () => {
  //   router.push('/about'); // Redirecciona a la página '/otra-pagina'
  // };

  return (
    <div className="flex flex-col items-center p-24">
      <span>Hello World!</span>
      {/* <a href="about">About Page</a> */}
      {/* <button onClick={handleRedirect} ></button> */}
      <Link href={"about"}>
        <button className="bg-gradient-to-r from-fuchsia-700 to-blue-600 rounded-lg p-2 hover:bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-slate-400">
          ABOUT
        </button>
      </Link>

      {2 + 2}
    </div>
  );
}
