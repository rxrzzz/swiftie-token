import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useLottie } from "lottie-react";
import homeAnimation from "../openinglottie.json";
import Link from "next/link";
import { useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const options = {
    animationData: homeAnimation,
    loop: true,
  };
  const { View: home } = useLottie(options);
  const mobileMenu = useRef<HTMLDivElement | null>(null);

  const showMenu = () => {
    if (mobileMenu.current) {
      mobileMenu.current.classList.toggle("hidden");
    }
  };

  const hideMenu = () => {
    if (mobileMenu.current) {
      mobileMenu.current.classList.toggle("hidden");
    }
  };
  return (
    <>
      <Head>
        <title>Swifite Token</title>
        <meta name="description" content="Launch website for Swiftie Token" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/swiftie.jpg" />
      </Head>
      <div className="w-full   bg-fixed bg-[#31349E] py-2 lg:py-24">
        <main className="w-[95%] lg:w-9/12 mx-auto text-white ">
          <nav className="fixed top-8 flex justify-between lg:w-9/12 w-[95%] ">
            <Link href="/" className="flex items-center">
              <Image
                src="/swifite.jpg"
                alt="Swiftie Token"
                height={40}
                width={40}
                className="mr-2"
              />
              <h1 className="text-xl font-medium font-nippo">Swiftie </h1>
            </Link>
            <div className=" hidden md:flex">
              <Link
                href="https://t.me/swiftiechat"
                className="border p-1 bg-white flex items-center justify-center text-[#31349E] font-nippo mr-4"
              >
                Join On Telegram
              </Link>
              <Link
                href="https://twitter.com/swiftieexchange"
                className="border p-1 bg-white flex items-center justify-center text-[#31349E] font-nippo mr-4"
              >
                Join On Twitter
              </Link>
              <Link
                href="https://t.me/swiftieann"
                className="border p-1 bg-white flex items-center justify-center text-[#31349E] font-nippo "
              >
                Join Announcement Channel
              </Link>
            </div>
            <button
              className="font-nippo text-xl lg:hidden block"
              onClick={showMenu}
            >
              MENU
            </button>
            <div
              className="fixed inset-0 z-[99] bg-[#31349E] font-nippo hidden"
              ref={mobileMenu}
            >
              <button
                className="font-bold font-array text-3xl mt-20 mb-10 w-fit ml-4"
                id="close"
                onClick={hideMenu}
              >
                X
              </button>
              <div className="flex flex-col">
                <Link
                  href="#tokenomics"
                  onClick={hideMenu}
                  className="mr-4  text-2xl ml-4 transition-colors duration-300 link"
                >
                  Tokenomics
                </Link>
                <Link
                  href="#roadmap"
                  onClick={hideMenu}
                  className="transition-colors ml-4  text-2xl duration-300 link"
                >
                  Q1 Roadmap
                </Link>
                <Link
                  href="https://twitter.com/swiftieexchange"
                  onClick={hideMenu}
                  className="transition-colors  text-2xl ml-4 duration-300 link"
                >
                  Follow On Twitter
                </Link>

                <Link
                  href="https://t.me/swiftiechat"
                  onClick={hideMenu}
                  className="transition-colors  text-2xl ml-4 duration-300 link"
                >
                  Join on Telegram
                </Link>
                <Link
                  href="https://t.me/swiftieann"
                  onClick={hideMenu}
                  className="transition-colors  text-2xl ml-4 duration-300 link"
                >
                  Join Announcement Channel
                </Link>
              </div>
            </div>
          </nav>
          <section className="flex flex-wrap justify-between w-full ">
            <div className="lg:w-5/12 w-full  font-satoshi mt-36">
              <h1 className="lg:text-6xl  md:text-5xl text-5xl font-bold font-nippo max-w-2xl">
                Defi At It&apos;s <span className="underline">Seamless</span>{" "}
                Form.
              </h1>
              <h2 className="lg:text-3xl text-xl font-bold  mt-4 lg:max-w-xl">
                The CeFi experience made simpler on the DeFi ecosystem.
              </h2>
              <p className="lg:text-xl text-md my-4 max-w-lg font-medium">
                Swiftie Exchange is an on-chain crypto trading and liquidity hub
                that allows you Trade, earn, and win crypto on the
                decentralized platform.
              </p>
              <Link
                download
                href="/whitepaper.pdf"
                className="bg-white  text-[#31349E]  p-2 lg:text-xl text-md font-medium"
              >
                Read Whitepaper
              </Link>
            </div>
            <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
              <Image
                alt="Swiftie Token"
                src="/set.jpg"
                height={1000}
                width={1000}
              />
            </div>
          </section>
          <section className="flex  flex-wrap justify-between w-full pt-8 lg:pt-24">
            <div className="lg:w-4/12 w-full">
              <h2 className="text-4xl mb-6 font-bold font-nippo">
                No Limits To Swiftie Exchange
              </h2>
            </div>
            <div className="lg:w-3/12 w-full pb-4 lg:mt-0 mt-4 mb-8">
              <h3 className="lg:max-w-xs font-nippo text-2xl font-bold  mb-2">
                Swap, Earn, and Build in DeFi Without Limits
              </h3>
              <p className="lg:max-w-xs font-satoshi lg:text-lg text-md font-medium">
                Trade easily. No Registration, No Difficulty. Swap/Trade tokens
                of your choice with a system built with you in mind,
                with the best UX.
              </p>
              <button className="bg-white  text-[#31349E] font-satoshi mt-3 p-2 text-md font-medium">
                Swap Now
              </button>
            </div>
            <div className="lg:w-3/12 w-full  mt-0 pb-4 ">
              <h3 className="lg:max-w-xs font-nippo text-2xl font-bold mb-2">
                Earn passive income with crypto tokens
              </h3>
              <p className="lg:max-w-xs font-satoshi lg:text-lg text-md font-medium">
                Earn swap fees and farm rewards by depositing tokens and
                providing liquidity with the highest capital efficiency.
              </p>
              <Link
                href="https://t.me/swiftiechat"
                className="bg-white  text-[#31349E] font-satoshi  mt-3 p-2 text-md font-medium"
              >
                Connect Wallet
              </Link>
            </div>
          </section>
        </main>

        <section className=" bg-[url('/wave.svg')] w-full bg-cover ">
          <div className="lg:w-9/12 w-[95%]  grid  grid-cols-1 lg:grid-cols-2 gap-10  py-36 mx-auto">
            <div className="p-4 pt-8  font-satoshi  border shadow-2xl bg-[#31349E]  text-white ">
              <h1 className="font-bold font-nippo  text-2xl lg:text-3xl mb-6">
                Our Mission
              </h1>
              <p className="block mb-2 font-medium lg:text-xl text-md">
                Blockchain and decentralized systems are constantly disrupting
                the traditional way of doing business. From finance to the
                gaming industry, blockchain has found a way to improve current
                business models and created countless ways to
                utilize these spaces.
              </p>
              <p className="block mb-2 font-medium lg:text-xl text-md">
                Swiftie Exchange provides an expansive network of income-
                generating platforms for users. Within the platform, SWIFTIE
                holders will be able to earn rewards from staking, farming, and
                play-to-earn gaming. The platform also offers a “Swap” feature
                with one of the lowest transaction fees in the market today and
                an upcoming NFT  marketplace.
              </p>
            </div>
            <div className="p-4 pt-8  font-satoshi  border shadow-2xl bg-[#31349E]  text-white ">
              <h1 className="font-bold font-nippo  text-2xl lg:text-3xl mb-6">
                Our Goal
              </h1>
              <p className="block mb-2 font-medium lg:text-xl text-md">
                Our goal is to create a system of value for all the members of
                our community and the holders of our token, with utilities that
                continuously add value to our ecosystem and disrupt the crypto
                space in a very positive way.
              </p>
              <p className="block mb-2 font-medium lg:text-xl text-md">
                Swiftie Exchange primary goal is to have one million people gain
                financial freedom.With a high APY of 25,000%, our staking pool
                can generate an incredible 100x on your investments over a
                period of 365days. By holding SWIFTIE, you can earn a reward for
                every transaction done on the Swiftie ecosystem forever
              </p>
            </div>
          </div>
        </section>
        <main className="w-[95%] lg:w-9/12 mx-auto text-white pt-12 lg:pt-24">
          <section className=" grid-cols-details lg:grid">
            <div className="md:sticky left-12   top-10   md:h-[30vh] max-w-sm ">
              <h1 className="lg:text-6xl font-bold text-4xl mr-8 font-nippo mb-8 lg:mb-0">
                SWIFTIE ECOSYSTEM
              </h1>
            </div>
            <section className=" mx-auto ">
              <div className="max-w-xl ml-auto mb-12">
                <h1 className="lg:text-3xl text-2xl uppercase font-nippo mb-2 font-bold">
                  SWIFTIE SWAP
                </h1>
                <p className="font-satoshi text-md lg:text-xl mb-4">
                  Swiftie Exchange is using a PancakeSwap router which is an
                  Automated Market Maker (AMM). Swiftie Exchange is also built
                  on BSC (Binance Smart chain), so users will be trading with a
                  majority of BEP-20 tokens.
                </p>
              </div>
              <div className="max-w-xl ml-auto mb-12">
                <h1 className="lg:text-3xl text-2xl uppercase font-nippo mb-2 font-bold">
                  Yield Farming
                </h1>
                <p className="font-satoshi text-md lg:text-xl mb-4">
                  Users can only swap tokens on the exchange if there is enough
                  liquidity for those token pairs. If nobody has added much
                  liquidity for the tokens or tokens users want to swap, it will
                  be difficult, expensive, or impossible to do so. Providing
                  liquidity will get users LP Tokens. Liquidity providers can
                  use their LP tokens to farm other tokens. For providing
                  liquidity to the exchange, liquidity providers earn rewards in
                  the form of trading fees.
                </p>
              </div>
              <div className="max-w-xl ml-auto mb-12">
                <h1 className="lg:text-3xl text-2xl uppercase font-nippo mb-2 font-bold">
                  Staking
                </h1>
                <p className="font-satoshi text-md lg:text-xl mb-4">
                  Staking allows users to Earn SWIFTIE by simply depositing
                  their tokens in the Staking Pool. It is much simpler than
                  farming because, unlike the farms, you only need to stake one
                  token to start earning: usually SWIFTIE. The APY rate is
                  currently at 25,000%, the rate drops as the staking pool
                  increases to create better stability of the token and to
                  reduce an oversupply of the SWIFTIE token. As we progress
                  different types of staking pools will be created to optimize
                  and support the system Liquidity provided by investors can be
                  withdrawn without a lockup period. LP token pairs can be
                  converted back to single tokens and will immediately reflect
                  in the users wallet. Several farms will be included with the
                  development of the project and new pairs will be introduced to
                  the platform  over time
                </p>
              </div>
              <div className="max-w-xl ml-auto mb-12">
                <h1 className="lg:text-3xl text-2xl uppercase font-nippo mb-2 font-bold">
                  P2E Games
                </h1>
                <p className="font-satoshi text-md lg:text-xl mb-4">
                  Swiftie Exchange offers unique features that will transform
                  the P2E sector allowing members to play avatars games, build
                  virtual worlds, and collect rare, high, valuable NFT to sell
                  on our marketplace.
                </p>
              </div>
              <div className="max-w-xl ml-auto mb-12">
                <h1 className="lg:text-3xl text-2xl uppercase font-nippo mb-2 font-bold">
                  Swiftie Token
                </h1>
                <p className="font-satoshi text-md lg:text-xl mb-4">
                  SWIFTIE is SWIFTIE Exchange&apos;s native BEP20 token
                  empowering the Swiftie Exchange ecosystem. SWIFTIE token is
                  designed to facilitate the decentralized governance of the
                  protocol. As such, holders of SWIFTIE tokens accrue voting
                  rights proportional to their holdings. The SWIFTIE token is a
                  utility token used to provide liquidity, stake, and farm on
                  the Swiftie platform.
                </p>
              </div>
              <div className="max-w-xl ml-auto mb-12">{home}</div>
            </section>
          </section>
          <section className="my-16 flex justify-center items-center">
            <div className="max-h-[900px] xl:p-72 rounded-full lg:p-44 md:p-24 p-12  max-w-[900px] bg-white text-[#31349E] border  ">
              <div className=" font-satoshi text-center" id="tokenomics">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-nippo lg:mb-8 mb-4">
                  Tokenomics
                </h1>
                <p className="lg:text-xl md:text-lg text-md">
                  The SWIFTIE token has a total supply of 20,000,000 SWIFTIE
                  tokens. This is a substantial proportion and amount of tokens
                  and it is hard to plan out all the incentive programs at
                  first. As our platform continues to grow, users increase and
                  more product feature mature, the subject of value
                  encapsulation will become more.
                </p>
              </div>
            </div>
          </section>
          <section
            className="font-satoshi text-xl text-left my-32"
            id="roadmap"
          >
            <h1 className="mb-8 text-4xl font-bold  font-nippo">Roadmap</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
              <div className=" py-8 px-4 shadow-xl  bg-white text-[#31349E]">
                <h1 className="uppercase font-nippo text-3xl font-bold mb-2">
                  q4 2022
                </h1>
                <ul className="text-sm font-bold capitalize [&>li]:mb-2 mt-8">
                  <li> TOKEN CREATION</li>
                  <li>PRESALE ON PINKSALE</li>
                  <li>TOKEN LISTING </li>
                  <li>DEX MAINNET LAUNCH</li>
                  <li>OPEN POOL FARM & STAKE</li>
                  <li>LISTING ON COINMARKETCAP  & COINGECKO</li>
                  <li>CERTIK AUDIT</li>
                </ul>
              </div>
              <div className=" py-8 px-4 shadow-xl  bg-white text-[#31349E]">
                <h1 className="uppercase font-nippo text-3xl font-bold mb-2">
                  q1 2023
                </h1>
                <ul className="text-sm font-bold capitalize [&>li]:mb-2 mt-8">
                  <li> GLOBAL CAMPAIGN & MARKETING</li>
                  <li>LISTING ON MAJOR EXCHANGE ( BINANCE, KUCOIN, GATE)</li>
                  <li>VI APP</li>
                </ul>
              </div>
              <div className=" py-8 px-4 shadow-xl  bg-white text-[#31349E]">
                <h1 className="uppercase font-nippo text-3xl font-bold mb-2">
                  q2 2023
                </h1>
                <ul className="text-sm font-bold capitalize [&>li]:mb-2 mt-8">
                  <li>cROSS CHAIN SWAP</li>
                  <li>SWIFTIE CHAIN</li>
                  <li>P2E</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex items-center invert w-fit mx-auto pb-12">
            <Link href="https://twitter.com/swiftieexchange">
              <Image
                alt="Twitter"
                src="/twitter-outline.svg"
                height={50}
                className="mr-2"
                width={50}
              />
            </Link>
            <Link href="https://t.me/swiftiechat">
              <Image
                alt="Telegram"
                src="/telegram-outline.svg"
                height={50}
                width={50}
              />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
