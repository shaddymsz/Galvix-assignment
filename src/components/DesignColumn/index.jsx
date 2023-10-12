import React from "react";

import { Button, Img, Text } from "components";

const DesignColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[311px] items-center justify-start p-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_price.svg')" }}
        >
          <div className="flex flex-col justify-start mb-0.5 w-[83%] md:w-full">
            <Text
              className="md:ml-[0] ml-[67px] text-center text-indigo-900 text-sm tracking-[2.00px] uppercase"
              size="txtDMSansBold14"
            >
              {props?.enterprise}
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] mt-[30px] w-[77%] md:w-full">
              <div className="flex flex-row items-start justify-evenly w-full">
                <Text
                  className="mt-1.5 text-base text-center text-indigo-900"
                  size="txtDMSansRegular16Indigo900"
                >
                  {props?.one}
                </Text>
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.00px]"
                  size="txtDMSansBold58"
                >
                  {props?.fortynine}
                </Text>
                <div className="flex flex-col items-start justify-start mt-[17px]">
                  <Text
                    className="text-base text-indigo-900"
                    size="txtDMSansRegular16Indigo900"
                  >
                    {props?.peruser}
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-indigo-900"
                    size="txtDMSansRegular16Indigo900"
                  >
                    {props?.permonth}
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="leading-[26.00px] mt-[23px] text-base text-center text-gray-900_66 w-full"
              size="txtDMSansRegular16"
            >
              {props?.allthefeatures}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[39px] w-[56%] md:w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
            <div className="flex flex-row gap-[18px] items-center justify-start w-[94%] md:w-full">
              <Img
                className="h-[7px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
              <Text
                className="text-base text-gray-900_66"
                size="txtDMSansRegular16"
              >
                {props?.filesize}
              </Text>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
              <Img
                className="h-[7px]"
                src="images/img_checkmark.svg"
                alt="checkmark_One"
              />
              <Text
                className="text-base text-gray-900_66"
                size="txtDMSansRegular16"
              >
                {props?.duration}
              </Text>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start w-[82%] md:w-full">
              <Img
                className="h-[7px]"
                src="images/img_checkmark.svg"
                alt="checkmark_Two"
              />
              <Text
                className="text-base text-gray-900_66"
                size="txtDMSansRegular16"
              >
                {props?.socialintegratiOne}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[30px] text-base text-gray-200"
              size="txtDMSansRegular16Gray200"
            >
              {props?.advancedclient}
            </Text>
          </div>
        </div>
        <Button
          className="!text-indigo-900 cursor-pointer font-dmsans font-medium min-w-[200px] mt-8 rounded-[25px] text-center text-lg"
          shape="round"
          color="gray_200"
          size="xs"
          variant="outline"
        >
          Start Free Trail
        </Button>
      </div>
    </>
  );
};

DesignColumn.defaultProps = {
  enterprise: "Enterprise",
  one: "$",
  fortynine: "49",
  peruser: "per user",
  permonth: "per month",
  allthefeatures:
    "All the features you need to keep your personal files safe, accessible, and easy to share.",
  filesize: "2 GB of hosting space",
  duration: "14 days of free backups",
  socialintegratiOne: "Social integrations",
  advancedclient: "Advanced client billing",
};

export default DesignColumn;
