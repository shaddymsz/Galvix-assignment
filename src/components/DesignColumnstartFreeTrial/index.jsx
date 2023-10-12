import React from "react";
import { Button, Img, Text } from "components";

const DesignColumnstartFreeTrial = () => {
  const data = {
    starttext: "Start",
    startvalue: "$",
    nineteenvalue: "19",
    perusertext: "per user",
    permonthtext: "per month",
    allthefeaturestext:
      "All the features you need to keep your personal files safe, accessible, and easy to share.",
    filesizetext: "2 GB of hosting space",
    durationtext: "14 days of free backups",
    socialintegrationstext: "Social integrations",
    advancedclienttext: "Advanced client billing",
  };

  return (
    <>
      <div className={data.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[311px] items-center justify-start p-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_price.svg')" }}
        >
          <div className="flex flex-col justify-start mb-0.5 w-[89%] md:w-full">
            <Text
              className="md:ml-[0] ml-[100px] text-center text-indigo-900 text-sm tracking-[2.00px] uppercase"
              size="txtDMSansBold14"
            >
              {data.starttext}
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[25px] mt-[30px] w-[73%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="mt-1.5 text-base text-center text-indigo-900"
                  size="txtDMSansRegular16Indigo900"
                >
                  {data.startvalue}
                </Text>
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.00px]"
                  size="txtDMSansBold58"
                >
                  {data.nineteenvalue}
                </Text>
                <div className="flex flex-col items-start justify-start mt-4">
                  <Text
                    className="text-base text-indigo-900"
                    size="txtDMSansRegular16Indigo900"
                  >
                    {data.perusertext}
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-indigo-900"
                    size="txtDMSansRegular16Indigo900"
                  >
                    {data.permonthtext}
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="leading-[26.00px] mt-[23px] text-base text-center text-gray-900_66 w-full"
              size="txtDMSansRegular16"
            >
              {data.allthefeaturestext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] mt-[39px] w-[56%] md:w-full">
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
                {data.filesizetext}
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
                {data.durationtext}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[31px] text-base text-gray-200"
              size="txtDMSansRegular16Gray200"
            >
              {data.socialintegrationstext}
            </Text>
            <Text
              className="md:ml-[0] ml-[31px] text-base text-gray-200"
              size="txtDMSansRegular16Gray200"
            >
              {data.advancedclienttext}
            </Text>
          </div>
        </div>
        <Button
          className="!text-indigo-900 cursor-pointer font-dmsans font-medium min-w-[200px] md:ml-[0] ml-[85px] mt-8 rounded-[25px] text-center text-lg"
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

DesignColumnstartFreeTrial.defaultProps = {
  startfreetrialbutton: "Start Free Trial",
};

export default DesignColumnstartFreeTrial;
