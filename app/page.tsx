import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link"

export default async function Home() {
  // Get user ID from auth
  const { userId } = await auth();

  return (
    <div>
      {/* Header section */}
      <div className="py-24 text-foreground items-center text-center">
        <h1 className="text-6xl py-4">Gain clarity in your keyword strategy.</h1>
        <h2 className="text-4xl py-2">Know what is working for you.</h2>
        <div className="py-6 px-60">
          <p className="text-2xl">
            Generate comprehensive SEO reports with accurate data that you can use to level up your online presence.
          </p>
        </div>
        <div className="items-center text-center py-12">
          {userId ? 
            <Link href="/dashboard" className="bg-foreground px-24 py-4 text-background">
              Generate A Report
            </Link>
          : <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard"}
              forceRedirectUrl={"/dashboard"}
            >
                <button className="bg-foreground px-24 py-4 text-background">
                  Sign In
                </button>
            </SignInButton>
          }
        </div>
      </div>
    </div>
  ) 
}
