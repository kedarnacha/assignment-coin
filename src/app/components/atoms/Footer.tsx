import React from "react";
import Image from "next/image";


const footerData = [
    {
      logo: "/assets/footer1.svg",
      desc: "해외 개발자 원격 채용",
      linkText: "바로가기",
    },
    {
      logo: "/assets/footer2.svg",
      desc: "전 세계 디자이너 채용",
      linkText: "바로가기",
    },
    {
      logo: "/assets/footer3.svg",
      desc: "국제 마케팅 전문가 연결",
      linkText: "바로가기",
    },
    {
      logo: "/assets/footer4.svg",
      desc: "데이터 과학 전문가 채용",
      linkText: "바로가기",
    },
  ];

const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black flex items-center justify-center py-16">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center md:text-start md:col-span-1">
            <Image
              src="/assets/logo.svg"
              alt={`Logo Icon`}
              width={60}
              height={50}
              className="mx-auto md:mx-0 w-36 h-6"
            />
            <p className="mt-2">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div className="font-bold text-[#5E626F]">
              <p>010-0000-0000</p>
              <p>example@naver.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2  md:col-span-2 lg:grid-cols-4 gap-4 justify-center">
          {footerData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 w-full bg-white rounded-lg shadow-md space-y-4"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                  <Image
                    src={item.logo}
                    alt="Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-gray-800 font-semibold text-sm">
                  {item.desc}
                </div>
                <button className="flex items-center space-x-2 text-[#5E626F] font-medium text-xs hover:underline">
                  <span>바로가기</span>
                  <Image
                    src="/assets/footerArrow.svg"
                    alt="Arrow Icon"
                    width={5}
                    height={5}
                    className="w-4 h-4"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-start">
          <div className="flex flex-col space-y-1">
            <p className="font-medium">상호명</p>
            <p>하이퍼하이어</p>
            <p className="font-bold">Hyperhire India Private Limited</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-medium">대표 CEO</p>
            <p>김주현</p>
            <p className="font-bold">Juhyun Kim</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-medium">사업자등록번호 CIN</p>
            <p className="font-bold">427-86-01187</p>
            <p className="font-bold">U74110DL2016PTC290812</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-medium">주소 ADDRESS</p>
            <p>서울특별시 강남대로 479, 지하 1층 238호</p>
            <p className="font-bold">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-col  justify-center text-start">
          <p className="font-normal text-gray-500">
            <span className="text-sm font-bold">&copy; 2023 Hyperhire</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
