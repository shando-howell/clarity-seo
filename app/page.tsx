import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link"

export default async function Home() {
  // Get user ID from auth
  const { userId } = await auth();

  return (
    <div>
      <div className="sm:py-2 py-1 sm:text-6xl text-4xl text-foreground items-center text-center sm:m-16 m-12">
        <h1>Gain SEO Clarity</h1>
      </div>
      <div className="items-center text-center sm:py-4 py-2">
        {userId ? 
          <Link href="/dashboard" className="bg-foreground p-4 text-background">
            Generate A Report
          </Link>
        : <SignInButton
            mode="modal"
            fallbackRedirectUrl={"/dashboard"}
            forceRedirectUrl={"/dashboard"}
          >
              <button className="bg-foreground p-4 text-background">
                Sign In
              </button>
          </SignInButton>
        }
      </div>
    </div>
  ) 
}
