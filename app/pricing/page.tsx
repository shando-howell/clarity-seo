import { PricingTable } from "@clerk/nextjs";
import { Star } from "lucide-react";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your next investment.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Gain clarity on your SEO strategy with this powerful and afforable tool. Start free and scale as your
            business grows.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 shadow-2xl">
            <PricingTable newSubscriptionRedirectUrl="/dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;