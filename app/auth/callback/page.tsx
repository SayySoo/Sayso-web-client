
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Prevent duplicate exchanges during React Strict Mode
  const hasExchanged = useRef(false);

  useEffect(() => {
    if (hasExchanged.current) return;

    const code = searchParams.get("code");

    if (!code) {
      setError("Authentication code is missing.");
      setLoading(false);
      return;
    }

    if (!API_URL) {
      setError("Backend API URL is not configured.");
      setLoading(false);
      return;
    }

    hasExchanged.current = true;

    const exchangeCode = async () => {
      try {
        const response = await fetch(
          `${API_URL}/auth/handoff/exchange`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            cache: "no-store",
            body: JSON.stringify({ code }),
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Authentication failed.");
        }

        // Remove the one-time code from the browser URL
        router.replace("/");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong during authentication."
        );
      } finally {
        setLoading(false);
      }
    };

    exchangeCode();
  }, [searchParams, router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {loading ? (
          <>
            <div className="mx-auto mb-6 h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent" />

            <h1 className="text-xl font-semibold">
              Signing you in...
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Please wait while we securely verify your session.
            </p>
          </>
        ) : error ? (
          <>
            <h1 className="text-xl font-semibold">
              Authentication failed
            </h1>

            <p className="mt-3 text-sm text-destructive">
              {error}
            </p>

            <button
              onClick={() => router.replace("/")}
              className="mt-6 rounded-lg border px-5 py-2 text-sm"
            >
              Return to homepage
            </button>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center px-6">
          <p className="text-sm text-muted-foreground">
            Loading authentication...
          </p>
        </main>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
