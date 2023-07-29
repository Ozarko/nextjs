"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signingUrl?: string;
  signingUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider, i) => {
          return (
            <Button
              key={i}
              handleClick={() => signIn(provider.id)}
              title="Sign In"
            />
          );
        })}
      </div>
    );
  }

  return <div>AuthProviders</div>;
};

export default AuthProviders;
