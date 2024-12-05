'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { thirdwebClient as client } from "./client"
import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { useEffect } from "react";
import { claimTo } from "thirdweb/extensions/erc721";

export default function NFTClaimPage() {
  const account = useActiveAccount();


  const contract = getContract({
    client: client,
    chain: ethereum,
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || ''
  });

  const { data: contractMetadata, isLoading, error } = useReadContract(
    getContractMetadata,
    {
      contract: contract
    }
  );

  useEffect(() => {
    if (error) {
      console.error("Contract error:", error);
    }
    if (contractMetadata) {
      console.log("Contract metadata:", contractMetadata);
    }
  }, [error, contractMetadata]);

  return (
    <div className="min-h-screen relative">
      <div className="gradient-container">
        <div className="gradient-bg" />
      </div>
      <div className="container px-4 py-6 mx-auto content-container text-white relative z-10">
        {/* Main Action Button */}
        <div className="flex justify-end mb-8">
          <ConnectButton client={client} />
        </div>

        {/* Hero Section - Now centered */}
        <div className="flex flex-col items-center mb-12 space-y-6 text-center">
          <div className="relative aspect-square w-full max-w-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            {contractMetadata?.image ? (
              <MediaRenderer
                client={client}
                src={contractMetadata.image}
                width="400"
                height="400"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #fff",
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <Image
                src="/quirkylotl.png"
                alt="Quirkylotl NFT Preview"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            )}
          </div>
          <div className="text-center space-y-6 max-w-2xl">
            <h1 className="text-4xl font-bubble animate-bounce sm:text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text hover:from-indigo-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-1000">
              Quirkylotl NFT
            </h1>
            <p className="text-black text-lg animate-fadeIn">
              "Become a proud member of the Quirkylotl family by claiming your very own unique axolotl NFT. Dive into an extraordinary underwater world and unlock exclusive perks as part of our vibrant community!"
            </p>
            {/* <Button 
              size="lg" 
              className="relative animate-none bg-gradient-to-r from-purple-500 to-pink-500 
                hover:from-pink-500 hover:to-purple-500 transition-all duration-300
                border-2 border-transparent hover:border-white
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-purple-400 before:via-pink-500 before:to-purple-400 
                before:animate-glow before:blur-xl before:opacity-75 before:-z-10"
            >
              Claim NFT
            </Button> */}
            <TransactionButton
              transaction={() => claimTo({
                contract: contract,
                to: account?.address as string,
                quantity: BigInt(1),
              })}
              onTransactionConfirmed={async() => alert("Transaction confirmed")}
            >
              Claim 1 NFT
            </TransactionButton>
          </div>
        </div>

        {/* Creator Info - Centered */}
        <Card className="mb-12 max-w-3xl mx-auto backdrop-blur-sm bg-white/10">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bubble mb-4 text-black">About Dr. Quirkylotl</h2>
            <p className="text-black">
              Greetings, fellow adventurers! I'm Dr. Quirkylotl, the quirky mind behind the Quirkylotls NFT project. Inspired by the whimsical charm of axolotls and a love for fostering creativity, I've crafted this unique collection to bring joy, community, and exclusive perks to collectors around the globe.  

              With a passion for blending art, fun, and utility, I aim to create more than just an NFT project — it's an ever-evolving underwater world where imagination thrives and connections flourish.  

              Join me, Dr. Quirkylotl, on this exciting journey, and let's make waves together!
            </p>
          </CardContent>
        </Card>

        {/* Features and Benefits - Already grid-centered */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              title: "Exclusive Access",
              description: "Get VIP access to upcoming events and private community channels."
            },
            {
              title: "Holder Rewards",
              description: "Earn special rewards and tokens just for holding the NFT."
            },
            {
              title: "Community Perks",
              description: "Join an exclusive community of collectors and creators."
            }
          ].map((feature, index) => (
            <Card key={index} className="transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-white/10">
              <CardContent className="p-6 space-y-2 text-center">
                <h3 className="text-xl font-bubble text-black">{feature.title}</h3>
                <p className="text-black">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

