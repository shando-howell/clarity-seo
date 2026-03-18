"use client";

import startScraping from "@/actions/startScraping";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, BarChart3, FileText, Sparkles, Loader2 } from "lucide-react";
import ReportsTable from "@/components/ReportsTable";
import { CountrySelector } from "@/components/CountrySelector";
import { Authenticated, AuthLoading } from "convex/react";

function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("US");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt || isLoading) return;

    setIsLoading(true);
    try {
      const response = await startScraping(prompt, undefined, country);
      if (response.ok) {
        console.log(response.data);
        const snapshotId = response.data.snapshot_id;
        router.push(`/dashboard/report/${snapshotId}`);
      } else {
        console.error(response.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Create Report Section */}
          <Card className="relative overflow-hidden border-0 shadow-2xl backdrop-blur-sm">
            <CardHeader className="text-center pb-6 relative">
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Generate Report
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Enter a name, website, business, etc."
                      className="pl-14 h-14 text-base border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm w-full"
                      disabled={isLoading}
                    />
                  </div>

                  <CountrySelector
                    value={country}
                    onValueChange={setCountry}
                    disabled={isLoading}
                  />

                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      className="h-14 px-6 md:px-8 border-0 shadow-lg bg-blue-800 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group font-semibold w-full md:w-auto"
                      disabled={isLoading || !prompt.trim()}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-3" />
                          <span className="hidden lg:inline">
                            Generating Report...
                          </span>
                          <span className="lg:hidden">Generating...</span>
                        </>
                      ) : (
                        <>
                          <span className="hidden lg:inline">
                            Generate
                          </span>
                          <span className="lg:hidden">Generate</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Reports Section */}
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <CardTitle className="text-2xl">Recent Reports</CardTitle>
              </div>
              <CardDescription>
                Track the progress of your SEO analysis reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Authenticated>
                <ReportsTable />
              </Authenticated>
              <AuthLoading>
                <div className="flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                </div>
              </AuthLoading>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;