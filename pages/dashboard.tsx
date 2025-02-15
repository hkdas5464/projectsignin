import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextNav from './Nextnav';
import { Card, CardBody, Navbar, NavbarBrand, NavbarContent, NavbarItem, Tab, Tabs } from '@nextui-org/react';
import { BookAIcon, VideoIcon } from 'lucide-react';
import Link from 'next/link';
import { NotesIcon } from './icons/NotesIcon';
import { PreviousYearQuestionIcon } from './icons/PreviousYearQuestionIcon.jsx';
import { AllInOneIcon } from './icons/AllInOneIcon';
import { Button } from '@heroui/button';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to the 404 page if not logged in
      router.replace('/404');
    } else {
      setIsAuthorized(true);
      // Retrieve the name from localStorage
      const storedName = localStorage.getItem('name');
      setName(storedName);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    router.replace('/signin');
  };

  if (isAuthorized === null) {
    return null;
  }

  return (
    <div className="">
      <Navbar>
      <NavbarBrand>
      {name && <p className="mt-2">Welcome, {name}!</p>}

      </NavbarBrand>
     
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Link href="#">Login</Link> */}
        </NavbarItem>
        <NavbarItem>
          <Button onClick={handleLogout}  className="mt-10 bg-red-600 text-white" >Log Out</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      
      <div className="flex w-full flex-col">
        <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
          <p>
          {/* <ThemeSwitcher /> */}
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <p className="text-blue-600">  Harendra Kumar</p>
            </a>
                      {/* <ThemeSwitcher /> */}
            
          </div>
        </div>
        <div>
          {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-blue before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
          {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        </div>

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" variant="underlined" color="primary">
          <Tab key="vovablearning" title={

<div className="flex items-center space-x-2">
  <BookAIcon />
  <span>VOCAB LEARNING</span>
</div>
} >
<Card>
  <CardBody>
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
      <Link
        href={"learning/ows"}
        className="group rounded-lg border  border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-blue-600 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          All Vocab{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          - Blackbook
        </p>
      </Link>

      <Link
        href={"learning/gs"}
        className="group rounded-lg border  border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-blue-600 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          All GS{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          
        </p>
      </Link>
    </div>
  </CardBody>
</Card>
</Tab>
            <Tab key="video" title={

              <div className="flex items-center space-x-2">
                <VideoIcon />
                <span>Videos</span>
              </div>
            } >
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"videos/maths"}
                      className="group rounded-lg border  border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-blue-600 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        MATHS{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        - Rakesh Yadav Sir.
                      </p>
                    </Link>

                    <Link
                      href="videos/english"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        English{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        - BY Neetu Mam{" "}
                      </p>
                    </Link>

                    <Link
                      href={"videos/geography"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Geography{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        By Madhukar Sir{" "}
                      </p>
                    </Link>

                    <Link
                      href={"videos/history"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        History{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        by Madhukar sir{" "}
                      </p>
                    </Link>

                    <Link
                      href={"videos/economics"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Economics{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        by Murnal sir{" "}
                      </p>
                    </Link>
                    <Link
                      href="videos/parmar"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Parmar{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Parmar Sir{" "}
                      </p>
                    </Link>
                    <Link
                      href="videos/historybykhansir"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        History{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Khan Sir{" "}
                      </p>
                    </Link>

                    <Link
                      href="videos/biologybykhansir"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Biology{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Khan Sir{" "}
                      </p>
                    </Link>

                    <Link
                      href="videos/physicsbykhansir"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Physics{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Khan Sir{" "}
                      </p>
                    </Link>
                    <Link
                      href="videos/mapbykhansir"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Map{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Khan Sir{" "}
                      </p>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            








            <Tab key="notes" title={

              <div className="flex items-center space-x-2">
                <NotesIcon />
                <span>Notes</span>
              </div>
            } >
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"gk_books"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold text-blue">
                        <p className="text-blue-600"> GK_GS_BOOK </p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"parmar"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold text-blue">
                        <p className="text-blue-600"> Parmar_SSC </p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>


                    <Link
                      href={"upsc"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold text-blue">
                        <p className="text-blue-600"> UPSC </p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="pyq" title={

              <div className="flex items-center space-x-2">
                <PreviousYearQuestionIcon />
                <span>Previous Year Questions</span>
              </div>
            } >
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"ssccgl"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CGL{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href="/ssccpo"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CPO{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        SUB INSPECTOR IN CAPF{" "}
                      </p>
                    </Link>

                    <Link
                      href={"sscchsl"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CHSL{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Explore starter templates for Next.js.
                      </p>
                    </Link>

                    <Link
                      href={"sscgd"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC GD{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Constable in CAPF
                      </p>
                    </Link>

                    <Link
                      href={"sscmts"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC MTS{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                      </p>
                    </Link>
                    <Link
                      href="/pyq"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        All SSC PYQ{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                      </p>
                    </Link>

                    <Link
                      href="/books"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        BOOKS{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                       
                      </h2>
                    
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="allinone" title={

              <div className="flex items-center space-x-2">
                <AllInOneIcon />
                <span>All In One</span>
              </div>
            } >
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"rules"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Rules and Basic</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"english/vocab"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-blue-900 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">English Vocab</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                  </div>
                </CardBody>

                
              </Card>
            </Tab>

            <Tab key="Gallery" title="Quick Revision">
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"english-gallery"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">English Gallery</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"maths-gallery"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Maths Gallery</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"reasoning-gallery"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Reasoning Gallery</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"gk-gallery"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Gk/GS Gallery</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"gallery/art"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Art & Culture</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>

                    <Link
                      href={"gallery/polity"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Art & Culture</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="shorts" title="Shorts">
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"maths-shorts"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Maths Shorts</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                    <Link
                      href={"english-gallery/blackbook"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">English Vocab BlackBook</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>
                    <Link
                      href={"english-gallery/phrasal-verb"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Phrasal Verb</p>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </Link>



                   
                  
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="vocab" title="Vocab">
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"english-gallery/vocab"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">English Vocab</p>
                      </h2>
                    
                    </Link>
                    <Link
                      href={"english-gallery/blackbook"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">English Vocab BlackBook</p>
                      </h2>
                  
                    </Link>
                    <Link
                      href={"english-gallery/phrasal-verb"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">Phrasal Verb</p>
                      </h2>
                    
                    </Link>

                    <Link
                      href={"blackbook"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        <p className="text-blue-600">BLACKBOOK A to Z</p>
                      </h2>
                    
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>

          
        </div>
      </div>
    </main>
    
    </div>
  );
};

export default Dashboard;
