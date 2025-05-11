"use client";
import React, { useState } from "react";
import { Images } from "@/resources/images";
import Image from "next/image";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "What is this platform, and who is it for?",
      answer:
        "Our SaaS platform is designed for B2B businesses and Supply chain management tool to simplify order management, invoicing, and customer interactions. It's perfect for wholesalers, distributors, and manufacturers.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we are offering the free access to our early users",
    },
    {
      question: "How can customers track their orders?",
      answer:
        "Customers can track their orders in real-time through the app's Order History feature, which provides status updates, and invoice update.",
    },
    {
      question: "Can I manage multiple sub-admins?",
      answer:
        "Yes, sub-admin management features, allowing you to track attendance and their access of multiple sub-admins.",
    },
  ];

  return (
    <div className="w-full max-w-[1140px] mx-auto flex flex-col justify-start items-center gap-[60px] px-4 py-12">
      <div className="w-full max-w-[655px] flex flex-col justify-center items-center gap-6">
        <div className="px-4 py-2 rounded-[58px] outline-1 outline-[#c7c9d0] inline-flex justify-start items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <Image
              src={Images.ThunderIc}
              alt="Udhyog Sathi"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="text-center text-[#4254bc] text-base font-normal font-['Onest'] leading-tight">
            FAQs
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <h1 className="w-full text-center text-black text-[40px] font-semibold font-['Onest'] leading-[48px]">
            Got Questions? We have Got Answers!
          </h1>
          <p className="w-full text-center text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            Find quick answers to common questions about our platform, pricing,
            and features.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`w-full p-6 bg-[#fbfbfd] rounded-3xl outline-1 ${
              expandedIndex === index
                ? "outline-[#4254bc]"
                : "outline-[#f1f1f3]"
            } flex flex-col justify-start items-start gap-3 overflow-hidden`}
          >
            <div
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? -1 : index)
              }
            >
              <div className="text-black text-xl font-medium font-['Inter'] leading-7">
                {faq.question}
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <Image
                  src={expandedIndex === index ? Images.MinusIc : Images.PlusIc}
                  alt={expandedIndex === index ? "Collapse" : "Expand"}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            {expandedIndex === index && (
              <div className="w-full text-black text-lg font-normal font-['Inter'] leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQs };
