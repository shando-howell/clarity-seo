import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

export default async function Home() {
  // Get user ID from auth
  const { userId } = await auth();

  return (
    <div>
      {/* Header section */}
      <div className="py-24 text-foreground items-center text-center">
        <h1 className="text-4xl lg:text-6xl py-4">See what&apos;s <span className="bg-yellow-300 p-2">working</span> for you.</h1>
        <h2 className="text-2xl lg:text-4xl py-2 underline">
          Gain clarity.
        </h2>
        <div className="py-6 px-10 lg:px-60">
          <p className="text-base lg:text-2xl">
            Generate comprehensive SEO reports with accurate data that you can use to 
            level up your digital marketing.
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

      {/* Powered by Section */}
      <div className="p-12 bg-foreground items-center text-center text-3xl text-background">
        <h2>Powered by Perplexity and OpenAI</h2>
      </div>

      {/* Benefits section */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="p-12">
          <h3 className="text-4xl text-foreground text-bold">
            Delivers the insights
            you need to outrank your competitors.
          </h3>
          <div className="space-y-5 py-10">
            <div className="flex items-center gap-2 text-xl">
              <Check className="w-4 h-4 text-green-600"/>
              <span>Comprehensive SERP Analysis</span>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <Check className="w-4 h-4 text-green-600"/>
              <span>Insights On Keyword Ranking</span>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <Check className="w-4 h-4 text-green-600"/>
              <span>Competitor Analysis</span>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <Check className="w-4 h-4 text-green-600"/>
              <span>Chat With AI About Your Report</span>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <Check className="w-4 h-4 text-green-600"/>
              <span>Get Actionable Recommendations</span>
            </div>
          </div>
        </div>
        <div className="sm:py-2 lg:p-12">
          <Image src="/assets/images/Business-Meeting.jpg" className="rounded-4xl" height="900" width="600" alt="Business meeting" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center text-foreground text-xl py-4">
        <p>Clarity SEO &copy; 2026</p>
      </div>
    </div>
  ) 
}
