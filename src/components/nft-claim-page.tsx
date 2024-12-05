import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function NFTClaimPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-6 mx-auto">
        {/* Main Action Button */}
        <div className="flex justify-end mb-8">
          <Button variant="outline" size="lg">
            Connect Wallet
          </Button>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="relative aspect-square w-full max-w-md rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="NFT Preview"
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="text-center space-y-6 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Exclusive NFT Collection
            </h1>
            <p className="text-muted-foreground text-lg">
              Join our exclusive community by claiming this unique NFT. Be part of something extraordinary and unlock premium benefits.
            </p>
            <Button size="lg">
              Claim NFT
            </Button>
          </div>
        </div>

        {/* Creator Info */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About the Creator</h2>
            <p className="text-muted-foreground">
              Created by a renowned digital artist with over a decade of experience in digital art and blockchain technology. Each piece is carefully crafted to ensure uniqueness and value.
            </p>
          </CardContent>
        </Card>

        {/* Features and Benefits */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Exclusive Access</h3>
              <p className="text-muted-foreground">
                Get VIP access to upcoming events and private community channels.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Holder Rewards</h3>
              <p className="text-muted-foreground">
                Earn special rewards and tokens just for holding the NFT.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">Community Perks</h3>
              <p className="text-muted-foreground">
                Join an exclusive community of collectors and creators.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

