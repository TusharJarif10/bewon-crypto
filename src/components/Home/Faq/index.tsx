"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Faqdata } from "@/app/api/data";

const Faq = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10"
        id="faq-section"
      >
        <h3 className="text-center text-3xl lg:text-5xl font-bold text-white mb-3">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
            Frequently Asked And Question
          </span>
        </h3>
        <p className="text-justify lg:text-lg font-normal text-white/60">
          FAQs (Frequently Asked Questions) provide quick answers to common
          queries about a product, service, or topic. They cover functionality,
          security, troubleshooting, and usage, helping users find solutions
          without needing direct support.
        </p>
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            <div>
              <div className="w-full px-4 pt-16">
                {Faqdata.map((items, i) => (
                  <div
                    className="mx-auto w-full max-w-5xl rounded-2xl bg-darkmode py-8 px-6 mb-5"
                    key={i}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg text-white sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                            <span>{items.heading}</span>
                            <Icon
                              icon="tabler:chevron-up"
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } text-2xl text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-justify tracking-tighter leading-6  text-white/60 ">
                            {items.subheading}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-32">
              <Image
                src={"/images/faq/faq.svg"}
                alt="faq-image"
                width={941}
                height={379}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
