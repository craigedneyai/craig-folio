import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/formik">
            <a>Formik example</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
