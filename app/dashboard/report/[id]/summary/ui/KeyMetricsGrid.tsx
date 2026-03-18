"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, Target, Users } from "lucide-react";
import { SeoReport } from "@/lib/seoSchema";

interface KeyMetricsGridProps {
  seoReport: SeoReport;
}

export function KeyMetricsGrid({ seoReport }: KeyMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Keywords Found */}
      <Card className="relative overflow-hidden border group">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {seoReport?.keywords?.content_keywords?.length ?? 0}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Keywords Found
              </div>
            </div>
          </div>
          <div className="flex-1">
            {seoReport?.keywords?.content_keywords &&
            seoReport.keywords.content_keywords.length > 0 ? (
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto">
                {seoReport.keywords.content_keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                  >
                    {keyword.keyword}
                  </Badge>
                ))}
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                No keywords found
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Total Sources */}
      <Card className="relative overflow-hidden border">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {seoReport?.inventory?.total_sources ?? 0}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Total Sources
              </div>
            </div>
          </div>
          <div className="flex-1">
            {seoReport?.inventory?.unique_domains &&
            seoReport.inventory.unique_domains.length > 0 ? (
              <div className="space-y-1 max-h-24 overflow-y-auto">
                {seoReport.inventory.unique_domains.map((domain, index) => (
                  <div
                    key={index}
                    className="text-xs text-muted-foreground truncate px-2 py-1 rounded"
                  >
                    {domain}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                No domains found
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Unique Domains */}
      <Card className="relative overflow-hidden border group hover:shadow-md transition-all duration-300">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {seoReport?.inventory?.unique_domains?.length ?? 0}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Unique Domains
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-1 max-h-24 overflow-y-auto">
            {Object.entries(seoReport?.inventory?.source_types || {})
              .filter(
                ([, sources]) => Array.isArray(sources) && sources.length > 0
              )
              .map(([type, sources]) => (
                <div
                  key={type}
                  className="flex items-center justify-between text-xs px-2 py-1 rounded"
                >
                  <span className="capitalize text-muted-foreground">
                    {type.replace(/_/g, " ")}
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
                  >
                    {sources.length}
                  </Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitors */}
      <Card className="relative overflow-hidden border group hover:shadow-md transition-all duration-300">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {seoReport?.competitors?.length ?? 0}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Competitors
              </div>
            </div>
          </div>
          <div className="flex-1">
            {seoReport?.competitors && seoReport.competitors.length > 0 ? (
              <div className="space-y-1 max-h-24 overflow-y-auto bg-background">
                {seoReport.competitors.map((competitor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs px-2 py-1 rounded"
                  >
                    <span className="truncate flex-1 mr-2 font-medium">
                      {competitor.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                    >
                      {Math.round(
                        competitor.strength_score < 1
                          ? competitor.strength_score * 100
                          : competitor.strength_score
                      )}
                      %
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                No competitors found
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}