import { Img, Text } from 'components';
import React from 'react'

function Footer() {
    const footerData = {
      grow: {
        title: "Grow",
        text: "Be sure to take a look at our Terms of Use and Privacy Policy",
        socialIcons: [
          { src: "images/img_twitter.svg", alt: "twitter" },
          { src: "images/img_facebook.svg", alt: "facebook" },
          { src: "images/img_google.svg", alt: "google" },
        ],
      },
      product: {
        title: "Product",
        links: [
          { label: "Features", url: "javascript:" },
          { label: "Pricing", url: "javascript:" },
          { label: "Tour", url: "javascript:" },
        ],
      },
      work: {
        title: "Work",
        links: [
          { label: "Our Portfolio", url: "javascript:" },
          { label: "Latest Work", url: "javascript:" },
          { label: "Brands", url: "javascript:" },
        ],
      },
      stuff: {
        title: "Stuff",
        links: [
          { label: "Privacy", url: "javascript:" },
          { label: "Support", url: "javascript:" },
          { label: "Help Desk", url: "javascript:" },
          { label: "FAQ", url: "javascript:" },
        ],
      },
    };
  return (
    <div>
      <footer className="bg-gray-50 flex font-dmsans items-center justify-center mt-[100px] md:px-5 px-[214px] py-[72px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[21%] md:w-full">
            <div className="flex flex-col items-start justify-start px-0.5">
              <Text
                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.29px]"
                size="txtDMSansBold24"
              >
                {footerData.grow.title}
              </Text>
            </div>
            <Text
              className="leading-[26.00px] ml-0.5 md:ml-[0] mt-8 text-base text-gray-900_66 w-[99%] sm:w-full"
              size="txtDMSansRegular16"
            >
              {footerData.grow.text}
            </Text>
            <div className="flex flex-row items-center justify-start mt-[37px] w-[63%] md:w-full">
              {footerData.grow.socialIcons.map((icon, index) => (
                <Img
                  key={index}
                  className="h-[18px] w-[17px] ml-9"
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </div>
          </div>
          {Object.keys(footerData)
            .slice(1)
            .map((sectionKey, index) => (
              <div
                className={`flex md:flex-1 flex-col items-start justify-start w-[21%] md:w-full" items-start justify-start md:mt-0 mt-1.5 w-auto sm:w-full`}
                key={index}
              >
                <Text
                  className="text-indigo-900 text-lg"
                  size="txtDMSansMedium18Indigo900"
                  style={{ margin: "10px" }}
                >
                  {footerData[sectionKey].title}
                </Text>
                <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                  {footerData[sectionKey].links.map((link, linkIndex) => (
                    <li key={linkIndex} style={{ margin: "10px" }}>
                      <a href={link.url} className="text-base text-indigo-900">
                        <Text size="txtDMSansRegular16Indigo900">
                          {link.label}
                        </Text>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer