// @ts-check
import { useRouter } from "next/router";

import Card from "../components/Card";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button className="py-2" onClick={() => router.back()}>
      <Card>Go back</Card>
    </button>
  );
}
