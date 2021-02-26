import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1>next js page</h1>
      <Link href="/product"><a>go product page</a></Link>
    </div>
  );
};

export default index;