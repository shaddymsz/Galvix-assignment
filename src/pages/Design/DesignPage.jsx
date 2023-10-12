import React from "react";
import { Button, Img, Input, List, SelectBox, Text } from "components";
import DesignColumn from "components/DesignColumn";
import DesignColumnOne from "components/DesignColumnOne";
import DesignColumnstartFreeTrial from "components/DesignColumnstartFreeTrial";
import Footer from "pages/Footer";
import { useSpring, animated } from "react-spring";
import {
  middledarkoutliThreeOptionsList,
  middledarkoutliFourOptionsList,
} from ".";
import FallingButtons from "./FallingButton";
  
export const DesignPage = () => {
   
 
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1031px] md:h-[1244px] sm:h-[1266px] md:px-5 relative w-full">
            <div className="absolute bg-gray-50 flex flex-col h-max inset-[0] items-start justify-center  p-4 w-full">
              <div className="flex flex-col items-center justify-start mb-[89px] mt-[23px] w-[94%] md:w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex flex-col items-start justify-start px-0.5">
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[-0.29px]"
                      size="txtDMSansBold24"
                    >
                      Grow
                    </Text>
                  </div>
                  <ul className="flex md:flex-1 flex-row sm:hidden items-start justify-between md:ml-[0] ml-[509px] md:mt-0 my-1 w-[37%] md:w-full common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900_66"
                      >
                        <Text size="txtDMSansMedium16">Tour</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900_66"
                      >
                        <Text size="txtDMSansMedium16">Prices</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900_66"
                      >
                        <Text size="txtDMSansMedium16">About</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900_66"
                      >
                        <Text size="txtDMSansMedium16">F.A.Q.</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900_66"
                      >
                        <Text size="txtDMSansMedium16">Support</Text>
                      </a>
                    </li>
                  </ul>
                </header>
                <div className="flex flex-col items-center justify-start mt-[89px] w-[56%] md:w-full">
                  <Text
                    className="leading-[70.00px] sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.00px] w-full"
                    size="txtDMSansBold58"
                  >
                    Sample content can be shown here
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-8 text-[22px] text-center text-gray-900_66 sm:text-lg md:text-xl w-[88%] sm:w-full"
                    size="txtDMSansMedium22"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[268px] mt-12 rounded-[30px] text-center text-xl"
                    color="pink_400"
                    size="xs"
                    variant="fill"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <FallingButtons />
          <div className="flex md:flex-col flex-row font-dmsans md:gap-10 items-start justify-between max-w-[1068px] mt-[92px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-16 items-start justify-start md:mt-0 mt-4 w-[32%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-2 justify-start w-full">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-[79%] md:w-full">
                    <Img
                      className="h-[38px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <Text
                      className="text-[22px] text-indigo-900 sm:text-lg md:text-xl"
                      size="txtDMSansMedium22Indigo900"
                    >
                      Lorem ipsum dolor
                    </Text>
                  </div>
                  <Text
                    className="leading-[26.00px] md:ml-[0] ml-[66px] text-base text-gray-900_66 w-[81%] sm:w-full"
                    size="txtDMSansRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[91%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row gap-[26px] items-start justify-start mr-[42px] w-[86%] md:w-full">
                    <Img
                      className="h-[41px]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                    <Text
                      className="mt-0.5 text-[22px] text-indigo-900 sm:text-lg md:text-xl"
                      size="txtDMSansMedium22Indigo900"
                    >
                      Lorem ipsum dolor
                    </Text>
                  </div>
                  <Text
                    className="leading-[26.00px] md:ml-[0] ml-[61px] mt-[3px] text-base text-gray-900_66 w-4/5 sm:w-full"
                    size="txtDMSansRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-[54%] md:w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <Text
                  className="leading-[52.00px] sm:text-[32px] md:text-[38px] text-[42px] text-indigo-900 tracking-[-0.40px] w-[98%] sm:w-full"
                  size="txtDMSansBold42"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Text
                  className="leading-[32.00px] text-[22px] text-gray-900_66 sm:text-lg md:text-xl w-full"
                  size="txtDMSansMedium22"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-9 items-center justify-start w-[72%] md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[200px] rounded-[25px] text-center text-lg"
                  shape="round"
                  color="pink_400"
                  size="xs"
                  variant="fill"
                >
                  Get Started
                </Button>
                <Img className="h-8" src="images/img_vector.svg" alt="vector" />
              </div>
            </div>
          </div>
          <div className="bg-deep_purple-900 flex md:flex-col flex-row font-dmsans md:gap-10 gap-[98px] items-center justify-start mt-[100px] p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[115px] w-[41%] md:w-full">
              <Text
                className="leading-[52.00px] sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 tracking-[-0.40px] w-[98%] sm:w-full"
                size="txtDMSansBold42WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur
              </Text>
              <Text
                className="leading-[32.00px] mt-[23px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                size="txtDMSansMedium22WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[150px] mt-[35px] rounded-[25px] text-center text-lg"
                shape="round"
                color="pink_400"
                size="xs"
                variant="fill"
              >
                Learn More
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start w-[34%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-3/5 md:w-full">
                    <Img
                      className="h-8"
                      src="images/img_fabook.svg"
                      alt="fabook"
                    />
                    <Text
                      className="mt-0.5 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtDMSansMedium22WhiteA700"
                    >
                      Lorem ipsum dolor
                    </Text>
                  </div>
                  <Text
                    className="leading-[26.00px] md:ml-[0] ml-[46px] text-base text-white-A700 w-[89%] sm:w-full"
                    size="txtDMSansRegular16WhiteA700"
                  >
                    You’ll get a description of each component and learn how to
                    connect and use them.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-start justify-start w-3/5 md:w-full">
                    <Img
                      className="h-[33px]"
                      src="images/img_fabook.svg"
                      alt="fabook_One"
                    />
                    <Text
                      className="mt-0.5 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtDMSansMedium22WhiteA700"
                    >
                      Lorem ipsum dolor
                    </Text>
                  </div>
                  <Text
                    className="leading-[26.00px] md:ml-[0] ml-[46px] text-base text-white-A700 w-[89%] sm:w-full"
                    size="txtDMSansRegular16WhiteA700"
                  >
                    At length one of them called out in a clear, polite, smooth
                    dialect, not unlike in sound.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-dmsans gap-[25px] justify-start mt-[100px] md:px-5">
            <Text
              className="leading-[52.00px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-indigo-900 tracking-[-0.40px] w-full"
              size="txtDMSansBold42"
            >
              Simple & flexible pricing built for everyone
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] text-base text-center text-gray-900_66"
              size="txtDMSansRegular16"
            >
              Start with 14-day free trial. No credit card needed. Cancel at
              anytime.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-dmsans gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1171px] mt-[67px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <DesignColumnstartFreeTrial className="flex flex-1 flex-col justify-start w-full" />
            <DesignColumn className="flex flex-1 flex-col items-center justify-start w-full" />
            <DesignColumnOne className="flex flex-1 flex-col justify-start w-full" />
          </List>
          <div className="flex flex-col font-dmsans items-start justify-start mt-[99px] md:px-5 w-[45%] md:w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-indigo-900 tracking-[-0.40px]"
              size="txtDMSansBold42"
            >
              We’d Love to Hear from You
            </Text>
            <Text
              className="leading-[32.00px] mt-[27px] text-[22px] text-gray-900_66 sm:text-lg md:text-xl w-full"
              size="txtDMSansMedium22"
            >
              Please submit your information and a Designmodo representative
              will get in touch with you
            </Text>
            <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-[25px] w-[42%] md:w-full">
              <Img className="h-[18px]" src="images/img_call.svg" alt="call" />
              <Text
                className="text-base text-indigo-900"
                size="txtDMSansRegular16Indigo900"
              >
                Call sales at +1 555 505 5050
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-dmsans gap-[31px] items-start justify-start max-w-[1158px] mt-[47px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <Text
                    className="border-2 border-gray-200 border-solid pl-35 pr-40 sm:px-5 py-3 rounded-[25px] text-gray-900_66 text-lg"
                    size="txtDMSansMedium18"
                  >
                    Your name
                  </Text>
                  <Text
                    className="border-2 border-gray-200 border-solid pl-35 pr-40 sm:px-5 py-3 rounded-[25px] text-gray-900_66 text-lg"
                    size="txtDMSansMedium18"
                  >
                    Your email
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <Input
                    name="middledarkoutli_Two"
                    placeholder="Your phone"
                    className="font-medium p-0 placeholder:text-gray-900_66 text-left text-lg w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="number"
                  ></Input>
                  <SelectBox
                    className="sm:flex-1 font-medium text-left text-lg w-[23%] sm:w-full"
                    placeholderClassName="text-indigo-900"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-2.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="middledarkoutli_Three"
                    options={middledarkoutliThreeOptionsList}
                    isSearchable={false}
                    placeholder="Budget"
                    shape="round"
                    color="gray_200"
                    size="xs"
                    variant="outline"
                  />
                  <SelectBox
                    className="sm:flex-1 font-medium text-left text-lg w-[36%] sm:w-full"
                    placeholderClassName="text-indigo-900"
                    indicator={
                      <Img
                        className="h-1.5 mr-[0] w-2.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="middledarkoutli_Four"
                    options={middledarkoutliFourOptionsList}
                    isSearchable={false}
                    placeholder="Company size"
                    shape="round"
                    color="gray_200"
                    size="xs"
                    variant="outline"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col items-start justify-start p-[15px] rounded-[10px] w-full">
                  <Text
                    className="mb-[114px] md:ml-[0] ml-[3px] text-gray-900_66 text-lg"
                    size="txtDMSansMedium18"
                  >
                    Your message
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[205px] md:ml-[0] ml-[565px] rounded-[30px] text-center text-lg"
                  color="pink_400"
                  size="sm"
                  variant="fill"
                >
                  Send a Message
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start">
              <Text
                className="text-[22px] text-indigo-900 sm:text-lg md:text-xl"
                size="txtDMSansMedium22Indigo900"
              >
                Help
              </Text>
              <Text
                className="leading-[26.00px] text-base text-gray-900_66 w-full"
                size="txtDMSansRegular16"
              >
                Need help? Don’t hestiate to ask us somethnig. Email us directly
                info@designmodo.com or call us at 1-347-523-34-90. You can
                checkout our F.A.Q. and Help page to get more information about
                our products.
              </Text>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
