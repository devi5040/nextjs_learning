import Link from "next/link";
export default function SharePage() {
  return (
    <main>
      <h1>Page Share</h1>
      <div>
        <p>
          <Link href="/meals">Meals</Link>
        </p>
        <p>
          <Link href="/meals/share">Share</Link>
        </p>
        <p>
          <Link href="/meals/meal-1">Meal 1</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </div>
    </main>
  );
}
