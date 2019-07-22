import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <p>hey</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </>
  );
};

export default IndexPage;
