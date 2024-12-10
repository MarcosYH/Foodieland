"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";

export const Mounted = ({ children }: PropsWithChildren) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <>
        <div className="min-h-screen flex justify-center items-center bg-white">
          <div className="loader bg-white p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-[#66bbce] rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-[#66bbce] rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-[#66bbce] rounded-full animate-bounce"></div>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};
