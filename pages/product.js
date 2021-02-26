import Link from 'next/link'

const product = () => {
    return (
        <div>
            <h1>This is products page</h1>
            <Link href="/"><a>go home page</a></Link>
        </div>
    );
};

export default product;