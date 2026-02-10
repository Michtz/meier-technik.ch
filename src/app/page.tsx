
import Image from "next/image";

const Page = () => {

  return (
    <>
      <Image width={1000} height={500} src={"/images/smallVan.jpg"} alt={"image"} />
      <p>
        Mail: <a href="mailto:d.meier@meier-technik.ch">d.meier@meier-technik.ch</a>
      </p>
    </>
  );
};

export default Page;
