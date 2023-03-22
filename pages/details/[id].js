import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Details Page</h1>
      <p>Id: {id}</p>
    </div>
  );
}
