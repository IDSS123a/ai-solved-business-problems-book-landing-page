import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, TrendingUp, Brain, CheckCircle, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BookLandingPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-semibold">AI Solved Business Problems</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              About
            </Link>
            <Link href="#author" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              Author
            </Link>
            <Link href="#preorder" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              Pre-order
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#preorder">Pre-order Now</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">
                Available March 16, 2026
              </Badge>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Most AI books tell you what AI can do. This book shows you how to use AI.
              </h1>
              <p className="text-pretty text-xl text-muted-foreground lg:text-2xl">
                50 real business problems across 10 industries. A structured method requiring no coding. A practical
                workbook for managers.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <Link href="#preorder">Pre-order for €30</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">eBook Format</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">50 Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">No Coding Required</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent blur-2xl" />
            <div className="relative">
              <Image
                src="/images/cover-a1-upsize.png"
                alt="AI Solved Business Problems Book Cover"
                width={600}
                height={800}
                className="mx-auto w-full max-w-md rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Brain className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-balance text-3xl font-bold lg:text-5xl">
              This book doesn't teach you how to talk to AI.
            </h2>
            <p className="mt-6 text-pretty text-xl text-muted-foreground lg:text-2xl">
              It teaches you how to think like a manager in the age of AI.
            </p>
            <div className="mt-8">
              <p className="text-2xl font-semibold">Invest €30 in your managerial AI intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="about" className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-bold lg:text-5xl">
              Not theory. Not hype. Not a technical manual.
            </h2>
            <p className="text-pretty text-xl text-muted-foreground">
              A workbook for managers, owners, and leaders facing unclear processes, overwhelmed teams, and slow
              decisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">50 Real Problems</h3>
                  <p className="text-sm text-muted-foreground">
                    Across 10 industries, from unclear customer needs to inefficient processes and data overload.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Structured Method</h3>
                  <p className="text-sm text-muted-foreground">
                    Define, break down, and solve challenges with a clear framework that requires no technical
                    background.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">No Coding Required</h3>
                  <p className="text-sm text-muted-foreground">
                    No big budgets, no programming skills needed. Just practical solutions you can implement
                    immediately.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Immediate Digital Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your eBook instantly on release day, March 16, 2026, across all major platforms.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-2xl" />
              <div className="relative">
                <Image
                  src="/images/davor-20mulali-c4-87-20b-1.png"
                  alt="Davor Mulalić"
                  width={400}
                  height={500}
                  className="mx-auto w-full max-w-sm rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Author
                </Badge>
                <h2 className="text-balance text-3xl font-bold lg:text-4xl">Davor Mulalić</h2>
                <p className="text-pretty text-xl text-muted-foreground">
                  With more than 30 years of extensive experience in industry. Founder of AI Studio.
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-primary pl-6">
                <div className="space-y-2">
                  <p className="font-semibold">30+ Years of Expertise</p>
                  <p className="text-sm text-muted-foreground">
                    Three decades of solving real business problems across multiple industries.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">€30 for 30 Years of Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Learn from proven methods and real-world applications that actually work.
                  </p>
                </div>
              </div>

              <Button asChild variant="outline">
                <Link href="https://mulalic.ai-studio.wiki/" target="_blank" rel="noopener noreferrer">
                  Visit Official Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Platforms */}
      <section id="preorder" className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-bold lg:text-5xl">Pre-order Your Copy Today</h2>
            <p className="text-pretty text-xl text-muted-foreground">
              Available March 16, 2026 • eBook for €30 • All Major Platforms
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-5xl font-bold lg:text-6xl">€30</span>
                    <span className="text-xl text-muted-foreground">EUR</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Fixed price across all platforms</p>
                </div>

                <div className="space-y-4">
                  <p className="text-center font-semibold">Available on All Major Platforms:</p>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {[
                      "Amazon Kindle",
                      "Draft2Digital",
                      "Kobo",
                      "Apple Books",
                      "Google Play Books",
                      "Barnes & Noble Nook",
                    ].map((platform) => (
                      <div
                        key={platform}
                        className="flex items-center justify-center rounded-lg bg-background p-4 text-center text-sm font-medium"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm">Complete practical workbook with 50+ real business case studies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm">Lifetime access to digital edition with instant delivery on release day</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm">No coding or technical background required—practical and actionable</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <Button size="lg" className="w-full text-base">
                    Pre-order on Your Preferred Platform
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Pre-order now and receive on March 16, 2026 • Price in EUR (subject to platform currency conversion)
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-sm font-medium">Want launch day notifications?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Email updates will be available soon. Check back or follow on social media.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">AI Solved Business Problems</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link
                href="https://mulalic.ai-studio.wiki/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Official Website
              </Link>
              <span>•</span>
              <span>© 2025 Davor Mulalić</span>
              <span>•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
